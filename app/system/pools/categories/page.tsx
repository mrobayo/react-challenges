'use client';

import React, { useEffect, useState } from 'react';

type QzCategory = {
  id: string;
  name: string;
};

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
      <h1>Quiz Categories</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            {cat.id}: {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}