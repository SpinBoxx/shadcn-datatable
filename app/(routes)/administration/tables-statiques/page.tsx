import { filters } from "@/data";
import React from "react";
import { DataTable } from "../components/datatable";
import { columns } from "../components/columns";
import Header from "@/components/ui/header";

export default function TablesStatiquesPage() {
  const formattedData = filters.map((filter) => ({
    id: filter.id,
    value: filter.code,
    backgroundColor: filter.backgroundColor,
    label: filter.label,
    status: filter.status.label,
  }));
  return (
    <div className="mt-4 grid xl:grid-cols-2 xl:gap-6">
      <div className="w-full">
        <Header title="Table status" description="" />
        <div className="mt-3">
          <DataTable columns={columns} data={formattedData} />
        </div>
      </div>
      <div className="w-full">
        <Header title="Table status" description="" />
        <div className="mt-3">
          <DataTable columns={columns} data={formattedData} />
        </div>
      </div>
    </div>
  );
}
