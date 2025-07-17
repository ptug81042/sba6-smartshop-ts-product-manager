const CATALOG_URL = 'https://dummyjson.com/products';

export async function loadProductCatalog(): Promise<any[]> {
  try {
    const resp = await fetch(CATALOG_URL);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const body = await resp.json();
    console.log("Fetched catalog size:", body.products?.length);
    return body.products || [];
  } catch (err) {
    console.error("Catalog fetch failed:", err);
    return [];
  }
}