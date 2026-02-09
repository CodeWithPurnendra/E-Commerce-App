export const fetchAllProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductsById = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};
