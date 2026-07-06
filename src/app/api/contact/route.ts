import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid input', issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  try {
    const message = await prisma.contactMessage.create({
      data: parsed.data,
    });
    return NextResponse.json({ id: message.id }, { status: 201 });
  } catch (error) {
    console.error('Failed to save contact message', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
