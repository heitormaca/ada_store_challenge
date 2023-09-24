export type Product = {
  id: string;
  name: string;
  avatar: string;
  description: string;
  price: string;
  rating: number;
  category: string;
};

export type ProductList = Product[];

export type ProductListRequestParams = {
  pageSize?: string;
  pageNumber?: string;
  search?: string;
};
