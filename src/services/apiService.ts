// URL of the external product catalog
// For now, we're pulling from a dummy API, but this can easily be swapped out later.
const CATALOG_URL = 'https://dummyjson.com/products';

// Asynchronously loads product data from the API.
// Returns a list of products (or an empty array if something goes wrong).
export async function loadProductCatalog(): Promise<any[]> {
  try {
    // Make a GET request to the catalog endpoint.
    const resp = await fetch(CATALOG_URL);

    // If the response isn't successful (e.g. 404, 500), throw an error.
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    // Parse the JSON body of the response.
    const body = await resp.json();

    // Log how many products were fetched - good for debugging or sanity checks.
    console.log("Fetched catalog size:", body.products?.length);

    // Return the array of products (or an empty array of somehow undefined).
    return body.products || [];
  } catch (err) {
    // If anything fails (network issues, parsing errors, bad status), log it.
    console.error("Catalog fetch failed:", err);
    return []; // Fail gracefully by returning an empty catalog.
  }
}