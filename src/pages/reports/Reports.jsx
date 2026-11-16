const Reports = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
      <p className="text-gray-500 mb-8">Generate and download operational and financial reports.</p>

      <div className="grid grid-cols-2 gap-6">
        {/* Report Card 1 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm flex justify-between items-center hover:border-green-700 transition">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Monthly Production Report</h3>
            <p className="text-gray-500 text-sm mt-1">Detailed breakdown of green leaf intake and processed tea.</p>
          </div>
          <button className="px-4 py-2 border border-[#1b4332] text-[#1b4332] rounded hover:bg-green-50 font-medium whitespace-nowrap ml-4">
            Generate PDF
          </button>
        </div>

        {/* Report Card 2 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm flex justify-between items-center hover:border-green-700 transition">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Sales &amp; Export Summary</h3>
            <p className="text-gray-500 text-sm mt-1">Revenue details filtered by local and export markets.</p>
          </div>
          <button className="px-4 py-2 border border-[#1b4332] text-[#1b4332] rounded hover:bg-green-50 font-medium whitespace-nowrap ml-4">
            Generate CSV
          </button>
        </div>

        {/* Report Card 3 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm flex justify-between items-center hover:border-green-700 transition">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Future Estimates (ML Forecast)</h3>
            <p className="text-gray-500 text-sm mt-1">AI-generated yield predictions for the next quarter.</p>
          </div>
          <button className="px-4 py-2 border border-[#1b4332] text-[#1b4332] rounded hover:bg-green-50 font-medium whitespace-nowrap ml-4">
            View Forecast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;