import { NextResponse } from 'next/server';
import { fetchAllCategoriesData } from '@/db/firebase';

export async function GET() {
  try {
    const allCategories = await fetchAllCategoriesData();
    return NextResponse.json(allCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}