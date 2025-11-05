import { store } from '@app/rtk/store';
import { productApi } from '@features/products/productsApi';

export const fetchProductById = async (id: string) => {
  return store
    .dispatch(productApi.endpoints.getProductById.initiate(id))
    .unwrap();
};
