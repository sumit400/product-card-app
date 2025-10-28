import HomeClient from './components/HomeClient';

export default async function Home() {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
  cache: "no-store",
});


  if (!res.ok) {
    console.error('Failed to fetch products');
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">
          Failed to load products.
        </p>
      </main>
    );
  }

  const products = await res.json();

  return <HomeClient products={products} />;
}

