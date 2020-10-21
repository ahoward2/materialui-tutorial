import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

test("Tests working", () => {
  expect(1 + 1).toBe(2);
});

test("CustomButton has text `Welcome To CodeRoad`", () => {
  const { queryByTestId } = render(<App />);
  const buttonElement = queryByTestId("custom-button");
        if (!buttonElement){
            throw new Error(`Custom button does not exist`)
        }

        expect(buttonElement.hasAttribute("class")).toBeTruthy();
});
