"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Application {
  apm: string
  name: string
  contact: string
  critical: number
  high: number
  medium: number
  low: number
}

const applications: Application[] = [
  {
    apm: "APM-001",
    name: "Customer Portal",
    contact: "john.doe@company.com",
    critical: 2,
    high: 5,
    medium: 12,
    low: 23
  },
  {
    apm: "APM-002", 
    name: "Payment Gateway",
    contact: "jane.smith@company.com",
    critical: 0,
    high: 3,
    medium: 8,
    low: 15
  },
  {
    apm: "APM-003",
    name: "Admin Dashboard",
    contact: "mike.johnson@company.com", 
    critical: 1,
    high: 7,
    medium: 18,
    low: 31
  },
  {
    apm: "APM-004",
    name: "Mobile API",
    contact: "sarah.wilson@company.com",
    critical: 3,
    high: 9,
    medium: 14,
    low: 28
  },
  {
    apm: "APM-005",
    name: "Analytics Engine",
    contact: "david.brown@company.com",
    critical: 0,
    high: 2,
    medium: 6,
    low: 19
  },
  {
    apm: "APM-006",
    name: "User Management",
    contact: "lisa.davis@company.com",
    critical: 1,
    high: 4,
    medium: 11,
    low: 22
  }
]

export default function TablePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Applications Security Overview</h1>
      
      <div className="bg-white rounded-lg shadow-md border">
        <Table>
          <TableCaption>A list of applications and their vulnerability counts.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>APM</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Application Contact</TableHead>
              <TableHead className="text-center">Critical</TableHead>
              <TableHead className="text-center">High</TableHead>
              <TableHead className="text-center">Medium</TableHead>
              <TableHead className="text-center">Low</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.apm}>
                <TableCell className="font-medium">{app.apm}</TableCell>
                <TableCell>{app.name}</TableCell>
                <TableCell>{app.contact}</TableCell>
                <TableCell className="text-center">
                  <span className={`font-semibold ${app.critical > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                    {app.critical}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`font-semibold ${app.high > 0 ? 'text-orange-600' : 'text-gray-400'}`}>
                    {app.high}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`font-semibold ${app.medium > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                    {app.medium}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`font-semibold ${app.low > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                    {app.low}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
