const ExecutiveDashboard = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Executive dashboard</h1>
      <p className="text-gray-500 mb-8">Overview of Forest Hill Tea operations and performance.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-6 bg-white shadow-sm border-l-4 border-l-[#1b4332]">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Total Production (This Month)</h3>
          <p className="text-3xl font-bold text-gray-900">12,450 <span className="text-lg text-gray-500 font-normal">kg</span></p>
          <p className="text-green-600 text-sm mt-2 font-medium">↑ +5.2% from last month</p>
        </div>
        
        <div className="border rounded-lg p-6 bg-white shadow-sm border-l-4 border-l-[#2d6a4f]">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Total Sales Revenue</h3>
          <p className="text-3xl font-bold text-gray-900"><span className="text-lg text-gray-500 font-normal">LKR</span> 8.2M</p>
          <p className="text-green-600 text-sm mt-2 font-medium">↑ +2.1% from last month</p>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm border-l-4 border-l-[#40916c]">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Active Workforce</h3>
          <p className="text-3xl font-bold text-gray-900">142</p>
          <p className="text-gray-500 text-sm mt-2">Employees & registered farmers</p>
        </div>
      </div>

      {/* Chart Placeholder Area */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 bg-white shadow-sm h-80 flex flex-col justify-center items-center text-gray-400">
          <p>[ Production Trends Chart Area ]</p>
          <p className="text-sm">Member 3 can integrate Recharts or Chart.js here</p>
        </div>
        <div className="border rounded-lg p-6 bg-white shadow-sm h-80 flex flex-col justify-center items-center text-gray-400">
          <p>[ Sales by Market Chart Area ]</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;

