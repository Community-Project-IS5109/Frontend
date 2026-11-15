const EmployeeEntry = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee entry</h1>
      <p className="text-gray-500 mb-6">Add an employee or update their basic details.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Production</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Farmer</button>
        <button className="px-4 py-2 border rounded bg-green-800 text-white font-medium">Employee</button>
        <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Sales</button>
      </div>

      {/* Form Section */}
      <div className="border rounded-lg p-6 mb-8 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Add employee</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Employee ID</label>
            <input 
              type="text" 
              defaultValue="E002"
              className="w-full border border-red-400 rounded p-2 focus:outline-none"
            />
            <p className="text-red-500 text-sm mt-1">E002 is already in use. Choose a new ID or edit that employee.</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input 
              type="text" 
              defaultValue="Dinesh Jayawardena"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Position</label>
          <input 
            type="text" 
            defaultValue="Packing assistant"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-700"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-2">
          <div>
            <label className="block text-sm font-medium mb-1">Gender (optional)</label>
            <select className="w-full border border-gray-300 rounded p-2 focus:outline-none">
              <option>Prefer not to say</option>
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Local employee?</label>
            <select className="w-full border border-gray-300 rounded p-2 focus:outline-none">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <p className="text-gray-500 text-xs mb-4">Gender options: Woman, Man, Self-describe, Prefer not to say. You may leave this unanswered.</p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Employment date</label>
            <input 
              type="text" 
              defaultValue="01 Oct 2026"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact number or email</label>
            <input 
              type="text" 
              defaultValue="dinesh@staff.example"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <button className="px-4 py-2 bg-[#1b4332] text-white rounded hover:bg-green-900">Save employee</button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
        </div>
        <a href="#" className="text-[#1b4332] font-medium underline text-sm">Record training on Employment →</a>
      </div>

      {/* Recent Entries Table */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">My recent entries</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b">
              <th className="p-3 font-medium">Employee</th>
              <th className="p-3 font-medium">Position</th>
              <th className="p-3 font-medium">Last updated</th>
              <th className="p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b">
              <td className="p-3">E001 · Anjali Fernando</td>
              <td className="p-3">Tea processing</td>
              <td className="p-3">30 Sep 2026</td>
              <td className="p-3 text-[#1b4332] cursor-pointer">Edit</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">E003 · Malini Silva</td>
              <td className="p-3">Quality checks</td>
              <td className="p-3">28 Sep 2026</td>
              <td className="p-3 text-[#1b4332] cursor-pointer">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeEntry;