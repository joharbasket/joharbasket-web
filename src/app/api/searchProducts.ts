import { searchProduct } from '@/db/firebase';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get('q');
  
  if (!query) {
    return new Response(JSON.stringify({ error: 'Query parameter "q" is required' }), { status: 400 });
  }

  try {
    const results = await searchProduct(query);
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching products' }), { status: 500 });
  }
}
