import type { PayloadAction } from '@reduxjs/toolkit';

export type WishlistState = {
  items: number[];
};

export type WishlistPayload = PayloadAction<number>;
