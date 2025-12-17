"use server";

import { prisma } from '@/lib/prisma';
import {Flex, Heading} from "@radix-ui/themes";
import Link from "next/link";


import { GetServerSideProps } from 'next';
import React from 'react';
// import prisma from '../lib/prisma';

type QzCategory = {
  id: string;
  name: string;
};

type Props = {
  categories: QzCategory[];
};

const QzCategoriesPage: React.FC<Props> = ({ categories }) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await prisma.qzCategory.findMany({
    select: { id: true, name: true },
    orderBy: { name: 'asc' },
  });
  return { props: { categories } };
};

export default QzCategoriesPage;