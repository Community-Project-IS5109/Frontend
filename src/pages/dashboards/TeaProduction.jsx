const TeaProduction = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tea production</h1>
      <p className="text-gray-500 mb-8">Analyze green leaf intake, processing, and factory output.</p>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="border border-gray-300 rounded p-2 text-sm bg-white focus:outline-none">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
        <select className="border border-gray-300 rounded p-2 text-sm bg-white focus:outline-none">
          <option>All Factories</option>
          <option>Main Factory</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Total Green Leaves</h3>
          <p className="text-2xl font-bold text-gray-900">45,000 kg</p>
        </div>
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Made Tea Output</h3>
          <p className="text-2xl font-bold text-gray-900">10,250 kg</p>
        </div>
        <div className="border rounded-lg p-6 bg-[#f8fafc] border-[#e2e8f0] shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Conversion Ratio</h3>
          <p className="text-2xl font-bold text-[#1b4332]">22.7%</p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="border rounded-lg p-6 bg-white shadow-sm h-80 flex flex-col justify-center items-center text-gray-400">
        <p className="mb-2">📊 [ Production Bar Chart Area ]</p>
        <p className="text-sm">Member 3 can add a Bar Chart here to show daily production levels.</p>
      </div>
    </div>
  );
};

export default TeaProduction;
