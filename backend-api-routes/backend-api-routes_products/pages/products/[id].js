import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <div>
        <h1>{data.product} </h1>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.currency}</p>
        <p>{data.category}</p>
      </div>
      <Link href="/">Back to all</Link>
    </>
  );
}
