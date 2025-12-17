'use client';

import React, { useEffect, useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/data-table/DataTable"
import {Heading} from "@radix-ui/themes";

type QzCategory = {
  id: string;
  name: string;
};

const columns: ColumnDef<QzCategory>[] = [
  { accessorKey: "id", header: "Id" },
  { accessorKey: "name", header: "Name" }
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
      <DataTable columns={columns} data={categories} />
    </div>
  );
}