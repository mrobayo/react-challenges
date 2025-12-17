import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const category = await prisma.qzCategory.findUnique({
    where: { id: params.id },
  });
  if (!category) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(category);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json();
  const category = await prisma.qzCategory.update({
    where: { id: params.id },
    data: { name: data.name },
  });
  return NextResponse.json(category);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await prisma.qzCategory.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ success: true });
}
