import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>
        <strong>Description:</strong> {data.description}
      </p>
      <p>
        <strong>Price: </strong> {data.price} {data.currency}
      </p>
      <hr />
      {data.reviews &&
        data.reviews.map((review) => (
          <section key={review._id}>
            <p>
              <strong>{review.title}</strong>
              <br />
              {review.text} <br />
              <strong>Rating:</strong> {review.rating}
            </p>
          </section>
        ))}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
