const UserAccounts = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-800 font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User accounts</h1>
          <p className="text-gray-500">Manage system access and roles for staff.</p>
        </div>
        <button className="px-4 py-2 bg-[#1b4332] text-white rounded hover:bg-green-900 font-medium">
          + Add new user
        </button>
      </div>

      <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b">
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Role</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Saman Kumara</td>
              <td className="p-4 text-gray-500">saman@foresthill.lk</td>
              <td className="p-4">Administrator</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
              <td className="p-4 text-[#1b4332] cursor-pointer font-medium">Edit</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Kamal Perera</td>
              <td className="p-4 text-gray-500">kamal@foresthill.lk</td>
              <td className="p-4">Data Entry</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
              <td className="p-4 text-[#1b4332] cursor-pointer font-medium">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAccounts;