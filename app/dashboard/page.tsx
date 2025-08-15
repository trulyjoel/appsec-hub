export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">AppSec Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scan Coverage Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">AppSec Coverage</h2>
          <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
          <p className="text-sm text-gray-600">256 of 266 applications</p>
        </div>

        {/* Vulnerabilities Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Critical Issues in Prod</h2>
          <div className="text-3xl font-bold text-red-600 mb-2">12</div>
          <p className="text-sm text-gray-600">↓ 3 from last week</p>
          <div className="mt-4">
            <div className="text-sm text-gray-500">High: 28 | Medium: 45</div>
          </div>
        </div>

        {/* Security Score Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Conditional Overrides</h2>
          <div className="text-3xl font-bold text-red-600 mb-2">87</div>
          <p className="text-sm text-gray-600">↑ 5% from last month</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{width: '87%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
