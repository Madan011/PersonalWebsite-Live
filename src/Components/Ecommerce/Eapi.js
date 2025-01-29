import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const authenticateUser = async (email, password) => {
  try {
    const username = email.split('@')[0];
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password,
    });
    return response.data; // Contains the token
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};