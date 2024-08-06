import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Milk', price: 2.5 },
    { id: 2, name: 'Butter', price: 1.25 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  const newProduct = await prisma.product.create({
    data: { name: body.name, price: body.price },
  });
  return NextResponse.json(newProduct, {status: 201});
}
