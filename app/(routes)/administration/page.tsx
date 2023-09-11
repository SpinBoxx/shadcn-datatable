import React from "react";
import { columns } from "./components/columns";
import { filters } from "@/data";
import { DataTable } from "./components/datatable";

export default function SettingsPage() {
  const formattedData = filters.map((filter) => ({
    id: filter.id,
    value: filter.code,
    backgroundColor: filter.backgroundColor,
    label: filter.label,
    status: filter.status.label,
  }));
  return (
    <div className="mt-4 flex w-full justify-between gap-10">
      <div className="w-1/2">
        <DataTable columns={columns} data={formattedData} />
      </div>
      <div className="w-1/2">
        <DataTable columns={columns} data={formattedData} />
      </div>
    </div>
  );
}
