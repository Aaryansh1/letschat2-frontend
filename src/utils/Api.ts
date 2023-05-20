import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ErrorResponse {
    message: string;
    // Add other properties if needed
  }

export async function fetchAPI<T>(endpoint: string, method: string, data: any = null): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    data,
  };

  try {
    const response: AxiosResponse<T> = await axiosInstance.request<T>(config);
    return response.data;
  } catch (error: any) {
    const errorResponse: ErrorResponse = error.response?.data || { message: 'Something went wrong' };
    throw new Error(errorResponse.message);
  }
}