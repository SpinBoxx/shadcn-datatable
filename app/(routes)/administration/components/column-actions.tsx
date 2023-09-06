"use client";

import { filters } from "@/data";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { filterType } from "@/types/filters";
import { Row } from "@tanstack/react-table";
import { Copy, Edit, Trash } from "lucide-react";
import React from "react";

interface Props {
  dataId: number;
}

export default function ColumnActions({ dataId }: Props) {
  const { onOpen } = useUpdateModal();
  const filter = filters.find((filter) => filter.id === dataId);

  if (!filter) return null;

  return (
    <div className="flex items-center gap-x-4">
      <Edit
        onClick={() => onOpen("Status", filter)}
        className="h-4 w-4 cursor-pointer text-blue-500"
      />
      <Copy className="h-4 w-4 cursor-pointer" />
      <Trash className="h-4 w-4 cursor-pointer text-red-500" />
    </div>
  );
}
