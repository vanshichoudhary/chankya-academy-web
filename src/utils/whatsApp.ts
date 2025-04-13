
export const openWhatsApp = (productName: string, price?: number) => {
  const message = encodeURIComponent(`Hello, I'm interested in purchasing "${productName}"${price ? ` for ₹${price}` : ''} from Chankya International Academy. Please provide more details.`);
  window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
};
