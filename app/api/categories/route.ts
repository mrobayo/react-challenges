import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const categories = await prisma.qzCategory.findMany();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const data = await request.json();
  const category = await prisma.qzCategory.create({
    data: { name: data.name },
  });
  return NextResponse.json(category, { status: 201 });
}
