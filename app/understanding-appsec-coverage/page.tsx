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

interface AppSecCoverage {
  apm: string
  internetFacing: boolean
  confidential: boolean
  publicCloud: boolean
  mobile: boolean
}

const appSecData: AppSecCoverage[] = [
  {
    apm: "APM-001",
    internetFacing: true,
    confidential: true,
    publicCloud: true,
    mobile: false
  },
  {
    apm: "APM-002",
    internetFacing: true,
    confidential: false,
    publicCloud: true,
    mobile: true
  },
  {
    apm: "APM-003",
    internetFacing: false,
    confidential: true,
    publicCloud: false,
    mobile: false
  },
  {
    apm: "APM-004",
    internetFacing: true,
    confidential: false,
    publicCloud: true,
    mobile: true
  },
  {
    apm: "APM-005",
    internetFacing: false,
    confidential: true,
    publicCloud: true,
    mobile: false
  },
  {
    apm: "APM-006",
    internetFacing: true,
    confidential: true,
    publicCloud: false,
    mobile: true
  },
  {
    apm: "APM-007",
    internetFacing: false,
    confidential: false,
    publicCloud: true,
    mobile: false
  },
  {
    apm: "APM-008",
    internetFacing: true,
    confidential: true,
    publicCloud: true,
    mobile: true
  }
]

const BooleanCell = ({ value }: { value: boolean }) => (
  <div className="text-center">
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      value 
        ? 'bg-green-100 text-green-800' 
        : 'bg-gray-100 text-gray-800'
    }`}>
      {value ? 'Yes' : 'No'}
    </span>
  </div>
)

const columns: ColumnDef<AppSecCoverage>[] = [
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
    accessorKey: "internetFacing",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Internet-Facing
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <BooleanCell value={row.getValue("internetFacing")} />,
  },
  {
    accessorKey: "confidential",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Confidential
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <BooleanCell value={row.getValue("confidential")} />,
  },
  {
    accessorKey: "publicCloud",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Public Cloud
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <BooleanCell value={row.getValue("publicCloud")} />,
  },
  {
    accessorKey: "mobile",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Mobile
            {column.getIsSorted() === "asc" ? " ↑" : column.getIsSorted() === "desc" ? " ↓" : ""}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <BooleanCell value={row.getValue("mobile")} />,
  },
]

export default function UnderstandingAppSecCoverage() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: appSecData,
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
      <h1 className="text-3xl font-bold mb-8">Understanding AppSec Coverage</h1>
      
      <div className="mb-6">
        <p className="text-gray-600 text-lg">
          This table provides an overview of application security coverage across different deployment characteristics.
          Understanding these attributes helps prioritize security efforts and ensure comprehensive protection.
        </p>
      </div>
      
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
