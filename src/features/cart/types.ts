import type { Product } from '@features/products/types';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Cart {
  id: number;
  userId: number;
  products: Product[];
}

export type CartState = Record<number, number>;

export type CartTogglePayload = PayloadAction<number>;
export type CartSetCountPayload = PayloadAction<{ id: number; count: number }>;
