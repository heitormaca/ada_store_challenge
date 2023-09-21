import { axiosInstance } from "@/core/configs/axios";
import { ProductList, ProductListRequestParams } from "./product.types";

const URL_CONTROLLER = '/products';

export default {
  async list(params?: ProductListRequestParams) {
    const result = await axiosInstance.get<ProductList>(`${URL_CONTROLLER}`, { params: params });

    return result.data;
  }
}