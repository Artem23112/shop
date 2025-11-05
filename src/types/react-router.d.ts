import { ReactNode } from 'react';
import 'react-router-dom';

declare module 'react-router-dom' {
  interface RouteHandle<TData = unknown> {
    crumb?: (data?: TData) => ReactNode;
  }
}
