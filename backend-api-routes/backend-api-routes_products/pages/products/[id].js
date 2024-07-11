import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
  align-items: center;
`;
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
      <Container>
        <h1>{data.product} </h1>
        <p>Discription: {data.description}</p>
        <p>Price: {data.price}</p>
        <p>Currency: {data.currency}</p>
        <p>Category: {data.category}</p>
      </Container>
      <Link href="/products">Back to all</Link>
    </>
  );
}
