"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

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

const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "apm",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          APM
          {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue("apm")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
        </Button>
      )
    },
  },
  {
    accessorKey: "contact",
    header: "Application Contact",
  },
  {
    accessorKey: "critical",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Critical
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue("critical") as number
      return (
        <div className="text-center">
          <span className={`font-semibold ${value > 0 ? 'text-red-600' : 'text-gray-400'}`}>
            {value}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "high",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            High
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue("high") as number
      return (
        <div className="text-center">
          <span className={`font-semibold ${value > 0 ? 'text-orange-600' : 'text-gray-400'}`}>
            {value}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "medium",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Medium
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue("medium") as number
      return (
        <div className="text-center">
          <span className={`font-semibold ${value > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
            {value}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "low",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Low
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue("low") as number
      return (
        <div className="text-center">
          <span className={`font-semibold ${value > 0 ? 'text-green-600' : 'text-gray-400'}`}>
            {value}
          </span>
        </div>
      )
    },
  },
]

export default function TablePage() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: applications,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Applications Security Overview</h1>
      
      <div className="bg-white rounded-lg shadow-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
