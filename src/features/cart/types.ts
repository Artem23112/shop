import type { Product } from '@features/products/types';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Cart {
  id: number;
  userId: number;
  products: Product[];
}

export type CartState = { items: number[] };
export type CartPayload = PayloadAction<number>;
