import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;

  const product = getProductById(id);

  if (!product) {
    response.status(404).json({ message: "product not found" });
  }

  if (request.method === "GET") {
    response.status(200).json(product);
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
