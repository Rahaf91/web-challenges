import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  padding: 10px;
`;
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: products, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!products) {
    return <h1>Product not found</h1>;
  }

  return (
    <StyledList>
      {products.map((product) => (
        <StyledListItem key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
