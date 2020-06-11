import { Children } from 'react';

export const Provider = jest.fn(({ children }) => Children.only(children));
