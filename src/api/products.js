import axios from 'axios';

export const getFeaturedProducts = async () => {
  try {
    const response = await axios.get('/api/featured-products'); // Adjust the endpoint as needed
    return response;
  } catch (error) {
    console.error("Error fetching featured products", error);
    return { data: [] };
  }
};
