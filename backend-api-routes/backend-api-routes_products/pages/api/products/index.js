import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts();

  if (request.method === "GET") {
    response.status(200).json(products);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
