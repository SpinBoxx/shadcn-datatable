"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./datatable-header";
import ColumnActions from "./column-actions";

export type FilterColumnType = {
  id: number;
  value: string;
  label: string;
  backgroundColor: string;
  status: string;
};

export const columns: ColumnDef<FilterColumnType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Value" />
    ),
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "backgroundColor",
    header: "BackgroundColor",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.backgroundColor}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.backgroundColor }}
        />
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ColumnActions dataId={row.original.id} />,
  },
];
