import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const category = await prisma.qzCategory.findUnique({
    where: { id },
  });
  if (!category) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(category);
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const data = await request.json();
  const { id } = await params;
  const category = await prisma.qzCategory.update({
    where: { id },
    data: { name: data.name },
  });
  return NextResponse.json(category);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.qzCategory.delete({
    where: { id },
  });
  return NextResponse.json({ success: true });
}
