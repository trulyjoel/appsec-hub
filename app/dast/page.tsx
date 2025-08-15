export default function Dast() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">DAST Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Critical Vulnerabilities */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Critical Vulnerabilities</h2>
          <div className="text-3xl font-bold text-red-600 mb-2">8</div>
          <p className="text-sm text-gray-600">↓ 2 from last scan</p>
        </div>

        {/* High Vulnerabilities */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">High Vulnerabilities</h2>
          <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
          <p className="text-sm text-gray-600">↑ 3 from last scan</p>
        </div>

        {/* Medium Vulnerabilities */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Medium Vulnerabilities</h2>
          <div className="text-3xl font-bold text-yellow-600 mb-2">67</div>
          <p className="text-sm text-gray-600">↓ 5 from last scan</p>
        </div>

        {/* Low Vulnerabilities */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Low Vulnerabilities</h2>
          <div className="text-3xl font-bold text-green-600 mb-2">142</div>
          <p className="text-sm text-gray-600">↑ 8 from last scan</p>
        </div>

        {/* Total Scans */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Total Scans</h2>
          <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
          <p className="text-sm text-gray-600">This month: 89</p>
          <div className="mt-4">
            <div className="text-sm text-gray-500">Last scan: 4 hours ago</div>
          </div>
        </div>

        {/* Average Time to Remediate */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Avg Time to Remediate</h2>
          <div className="text-3xl font-bold text-purple-600 mb-2">12.5</div>
          <p className="text-sm text-gray-600">days (↓ 2.1 from last month)</p>
          <div className="mt-4">
            <div className="text-sm text-gray-500">Critical: 3.2d | High: 8.7d</div>
          </div>
        </div>
      </div>

      {/* Scan Duration Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Scan Performance</h2>
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Average Scan Duration</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2.3h</div>
              <div className="text-sm text-gray-600">Full Scan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">45m</div>
              <div className="text-sm text-gray-600">Quick Scan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">1.8h</div>
              <div className="text-sm text-gray-600">API Scan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3.1h</div>
              <div className="text-sm text-gray-600">Deep Scan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
