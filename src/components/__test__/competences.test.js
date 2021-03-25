import React from 'react';
import ReactDOM from 'react-dom';

import Competences from '../Competences.js';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Competences></Competences>, div);
  ReactDOM.unmountComponentAtNode(div)
});
//
it("renders competences correctly", () => {
   const {getByTestId} = render(<Competences/>);
   expect(getByTestId('competence-name')).toHaveTextContent("Programmation :");
})
