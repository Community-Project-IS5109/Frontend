const SalesEntry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales entry</h1>
      <p className="text-gray-500 mb-6">Add a sale or update an existing sales record.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Production</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Farmer</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Employee</button>
        <button className="px-4 py-2 border rounded bg-[#1b4332] text-white font-medium">Sales</button>
      </div>

      {/* Form Section */}
      <div className="border rounded-lg p-6 mb-8 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Add sale</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Sale date</label>
            <input type="text" defaultValue="30 Sep 2026" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Batch</label>
            <select className="w-full border border-gray-300 rounded p-2">
              <option>FH-0928</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tea type</label>
            <select className="w-full border border-gray-300 rounded p-2">
              <option>Black tea</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Local or export</label>
            <select className="w-full border border-gray-300 rounded p-2">
              <option>Export</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Market / country</label>
            <select className="w-full border border-red-400 rounded p-2 text-gray-600">
              <option>Select a country</option>
            </select>
            <p className="text-red-500 text-sm mt-1">Choose a country for an export sale.</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Customer / market name</label>
            <input type="text" defaultValue="Hill Tea Buyers" className="w-full border border-gray-300 rounded p-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Quantity (kg)</label>
            <input type="text" defaultValue="500" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Unit price (LKR / kg)</label>
            <input type="text" defaultValue="900" className="w-full border border-gray-300 rounded p-2" />
          </div>
        </div>

        <div className="bg-[#fcf8ef] p-3 rounded text-sm text-[#7c6a46] mb-4 border border-[#f0e6d2]">
          Total (calculated): 500 kg × LKR 900 = LKR 450,000
        </div>
        
        <p className="text-gray-500 text-sm mb-4">The total updates from the quantity and unit price. This draft has not been saved.</p>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1b4332] text-white rounded hover:bg-green-900">Save sale</button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
        </div>
      </div>

      {/* Recent Entries Table */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">My recent entries</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b">
              <th className="p-3 font-medium">Sale / date</th>
              <th className="p-3 font-medium">Tea type</th>
              <th className="p-3 font-medium">Quantity</th>
              <th className="p-3 font-medium">Total (LKR)</th>
              <th className="p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b">
              <td className="p-3">S018 · 30 Sep 2026</td>
              <td className="p-3">Black tea</td>
              <td className="p-3">500 kg</td>
              <td className="p-3">450,000</td>
              <td className="p-3 text-[#1b4332] cursor-pointer">Edit</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">S017 · 29 Sep 2026</td>
              <td className="p-3">Green tea</td>
              <td className="p-3">300 kg</td>
              <td className="p-3">225,000</td>
              <td className="p-3 text-[#1b4332] cursor-pointer">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesEntry;