@@ .. @@
 import TradingChart from '../components/dashboard/TradingChart';
 import NewsFeed from '../components/dashboard/NewsFeed';
 import SocialFeed from '../components/dashboard/SocialFeed';
+import RealTimeData from '../components/features/RealTimeData';

 const Dashboard = () => {
 }
@@ .. @@
             
             {/* Right Sidebar */}
             <div className="space-y-6">
+              <RealTimeData />
               <NewsFeed />
             </div>
           </div>