import { useQuery } from "@tanstack/react-query";
import { ProductList, ProductListRequestParams } from "./product.types";
import { AxiosError } from "axios";
import productService from "./product.service";

export function useProducts(params?: ProductListRequestParams) {
  return useQuery<ProductList, AxiosError>(['products'], () => productService.list(params),
  {
    onError(error) {
      console.log(error);
    },
  })
}