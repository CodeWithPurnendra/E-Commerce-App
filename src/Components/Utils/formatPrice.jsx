export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateDiscount = (originalPrice,discountedPrice)=>{
    const discount = ((originalPrice-discountedPrice)/originalPrice)*100;
    return Math.random(discount)
}