import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  try {
    await dbConnect();
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Database connection error: " + error.message });
  }
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }
      return response.status(200).json(product);
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Error retrieving product: " + error.message });
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedProduct = request.body;
      await Product.findByIdAndUpdate(id, updatedProduct);
      return response.status(200).json({ status: "Product updated" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      return response.status(200).json({ message: "Product deleted" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
