import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CandlestickChart,
  ReferenceLine,
} from 'recharts';

interface ChartData {
  time: string;
  price: number;
  volume: number;
  high: number;
  low: number;
  open: number;
  close: number;
}

interface AdvancedChartProps {
  symbol: string;
  timeframe: string;
  chartType: 'line' | 'area' | 'candlestick';
}

const AdvancedChart: React.FC<AdvancedChartProps> = ({ symbol, timeframe, chartType }) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  // Generate mock data based on timeframe
  useEffect(() => {
    const generateMockData = () => {
      const basePrice = 175;
      const dataPoints = timeframe === '1D' ? 24 : timeframe === '1W' ? 7 : 30;
      const mockData: ChartData[] = [];

      for (let i = 0; i < dataPoints; i++) {
        const variation = (Math.random() - 0.5) * 10;
        const price = basePrice + variation + (i * 0.5);
        const high = price + Math.random() * 3;
        const low = price - Math.random() * 3;
        const open = i === 0 ? basePrice : mockData[i - 1].close;
        const close = price;

        mockData.push({
          time: timeframe === '1D' 
            ? `${9 + i}:00` 
            : timeframe === '1W' 
            ? `Day ${i + 1}` 
            : `${new Date(Date.now() - (dataPoints - i) * 24 * 60 * 60 * 1000).toLocaleDateString()}`,
          price,
          volume: Math.floor(Math.random() * 1000000),
          high,
          low,
          open,
          close,
        });
      }

      setData(mockData);
      setLoading(false);
    };

    setLoading(true);
    setTimeout(generateMockData, 500); // Simulate API call
  }, [symbol, timeframe]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">Price: <span className="font-semibold">${data.price.toFixed(2)}</span></p>
            {chartType === 'candlestick' && (
              <>
                <p className="text-gray-600">Open: <span className="font-semibold">${data.open.toFixed(2)}</span></p>
                <p className="text-gray-600">High: <span className="font-semibold text-green-600">${data.high.toFixed(2)}</span></p>
                <p className="text-gray-600">Low: <span className="font-semibold text-red-600">${data.low.toFixed(2)}</span></p>
                <p className="text-gray-600">Close: <span className="font-semibold">${data.close.toFixed(2)}</span></p>
              </>
            )}
            <p className="text-gray-600">Volume: <span className="font-semibold">{data.volume.toLocaleString()}</span></p>
          </div>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-etoro-green"></div>
      </div>
    );
  }

  const renderChart = () => {
    switch (chartType) {
      case 'area':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00C896" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00C896" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              domain={['dataMin - 2', 'dataMax + 2']}
              stroke="#666"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#00C896"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        );
      
      case 'line':
      default:
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              domain={['dataMin - 2', 'dataMax + 2']}
              stroke="#666"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#00C896"
              strokeWidth={2}
              dot={{ fill: '#00C896', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#00C896', strokeWidth: 2 }}
            />
          </LineChart>
        );
    }
  };

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default AdvancedChart;