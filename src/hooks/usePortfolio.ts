import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  symbol: string;
  shares: number;
  avg_price: number;
  current_price: number;
}

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setPortfolio([]);
      setLoading(false);
      return;
    }

    fetchPortfolio();
  }, [user]);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('portfolios')
        .select('*')
        .eq('user_id', user?.id);

      if (error) throw error;
      setPortfolio(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToPortfolio = async (symbol: string, shares: number, price: number) => {
    try {
      const { error } = await supabase
        .from('portfolios')
        .insert({
          user_id: user?.id,
          symbol,
          shares,
          avg_price: price,
          current_price: price,
        });

      if (error) throw error;
      await fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const updatePortfolioItem = async (id: string, updates: Partial<PortfolioItem>) => {
    try {
      const { error } = await supabase
        .from('portfolios')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const removeFromPortfolio = async (id: string) => {
    try {
      const { error } = await supabase
        .from('portfolios')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  return {
    portfolio,
    loading,
    error,
    addToPortfolio,
    updatePortfolioItem,
    removeFromPortfolio,
    refetch: fetchPortfolio,
  };
};