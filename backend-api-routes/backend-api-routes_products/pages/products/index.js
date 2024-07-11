import useSWR from "swr";
import Link from "next/link";

export default function HomePage() {
  const { data: products, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!products) {
    return;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
