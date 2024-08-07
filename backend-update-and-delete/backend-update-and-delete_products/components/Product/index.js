import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
    event.target.reset();
  }

  async function handleDeleteProduct() {
    const response = await fetch(`api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.log("Error:", response.status);
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit Product
      </button>
      <br />
      <button onClick={handleDeleteProduct} disabled={isEditMode}>
        Delete Product
      </button>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data.Product}
          isEditMode={true}
        />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
