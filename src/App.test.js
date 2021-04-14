import React from 'react';
import { render } from '@testing-library/react';
import AppSocialNetwork from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<AppSocialNetwork />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
