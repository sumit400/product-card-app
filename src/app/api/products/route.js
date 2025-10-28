export async function GET() {
  const products = [
    {
      id: 1,
      image: "/boat-headphone.webp",
      title: "Boat Rockerz 550 Wireless Headphones",
      price: 59.99,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      image: "/boat-headphone.webp",
      title: "Sony WH-1000XM4 Noise Cancelling Headphones",
      price: 299.99,
      rating: 4.8,
      inStock: false,
    },
  ];

  return Response.json(products);
}
