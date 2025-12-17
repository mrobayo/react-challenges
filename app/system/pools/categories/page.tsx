'use client';

import React, { useEffect, useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/data-table/DataTable"
import {Heading} from "@radix-ui/themes";
import { Checkbox } from "@/components/ui/checkbox"
import { LuPlus } from 'react-icons/lu';

type QzCategory = {
  id: string;
  name: string;
};

const columns: ColumnDef<QzCategory>[] = [
  { //accessorKey: "id",
    // header: "Id",
    id: "select",
    header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          className="bg-white"
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),},
  { id: "id", accessorKey: "id", header: "Id" },
  { id: "name", accessorKey: "name", header: "Name" }
]

export default function QzCategoriesPage() {
  const [categories, setCategories] = useState<QzCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Heading as="h3">Quiz Categories</Heading>
      <DataTable columns={columns} data={categories} globalAction={{
        label: "Add",
        action: () => console.log("add..."),
        icon: LuPlus,
      }}/>
    </div>
  );
}