const ProductionEntry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Production entry</h1>
      <p className="text-gray-500 mb-6">Log daily green leaf intake and tea processing batches.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 border rounded bg-[#1b4332] text-white font-medium">Production</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Farmer</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Employee</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Sales</button>
      </div>

      <div className="border rounded-lg p-6 mb-8 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Log daily intake</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input type="date" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Batch Number</label>
            <input type="text" placeholder="e.g. BT-20261015" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Green Leaves Weight (kg)</label>
            <input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Supplier / Farmer ID</label>
            <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700">
              <option>Select registered farmer</option>
              <option>F001 - Nimal Silva</option>
              <option>F002 - Sunethra Perera</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1b4332] text-white rounded hover:bg-green-900">Save entry</button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Clear form</button>
        </div>
      </div>
    </div>
  );
};

export default ProductionEntry;
