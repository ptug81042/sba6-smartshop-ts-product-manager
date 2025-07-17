const BASE_URL = 'https://dummyjson.com/products';

export async function fetchAllProducts(): Promise<any[]> {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const data = await res.json();
    return data.products || [];
  } catch (err) {
    console.error("API fetchAllProducts error:", err);
    return [];
  }
}

export async function fetchProductById(id: number): Promise<any | null> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product ${id}: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`API fetchProductById error (${id}):`, err);
    return null;
  }
}