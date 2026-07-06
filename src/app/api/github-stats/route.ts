import { NextResponse } from 'next/server';
import { fetchLanguageBreakdown } from '@/lib/github';

export const revalidate = 3600;

export async function GET() {
  try {
    const languages = await fetchLanguageBreakdown();
    return NextResponse.json({ languages });
  } catch (error) {
    console.error('Failed to fetch GitHub language breakdown', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub stats' }, { status: 502 });
  }
}
