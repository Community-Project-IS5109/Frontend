const FarmerEntry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Farmer entry</h1>
      <p className="text-gray-500 mb-6">Add a farmer or update their basic details.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Production</button>
        <button className="px-4 py-2 border rounded bg-[#1b4332] text-white font-medium">Farmer</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Employee</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Sales</button>
      </div>

      {/* Form Section */}
      <div className="border rounded-lg p-6 mb-8 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Add farmer</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Farmer ID</label>
            <input type="text" defaultValue="F015" className="w-full border border-gray-300 rounded p-2 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input type="text" defaultValue="Nimal Silva" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Estate / Garden name</label>
            <input type="text" defaultValue="Silva Tea Garden" className="w-full border border-gray-300 rounded p-2 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location / Village</label>
            <select className="w-full border border-gray-300 rounded p-2 focus:outline-none">
              <option>Weligepola</option>
              <option>Balangoda</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Registration date</label>
            <input type="text" defaultValue="01 Oct 2026" className="w-full border border-gray-300 rounded p-2 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact number</label>
            <input type="text" defaultValue="077 123 4567" className="w-full border border-gray-300 rounded p-2 focus:outline-none" />
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1b4332] text-white rounded hover:bg-green-900">Save farmer</button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
        </div>
      </div>

      {/* Recent Entries */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">My recent entries</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b">
              <th className="p-3 font-medium">Farmer</th>
              <th className="p-3 font-medium">Location</th>
              <th className="p-3 font-medium">Last updated</th>
              <th className="p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b">
              <td className="p-3">F014 · Sunethra Perera</td>
              <td className="p-3">Balangoda</td>
              <td className="p-3">30 Sep 2026</td>
              <td className="p-3 text-[#1b4332] cursor-pointer">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmerEntry;