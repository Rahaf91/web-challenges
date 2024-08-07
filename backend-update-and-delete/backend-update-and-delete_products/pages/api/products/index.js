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
  await dbConnect();

  if (request.method === "GET") {
  }

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      return response.status(200).json(products);
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Error retrieving products: " + error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
