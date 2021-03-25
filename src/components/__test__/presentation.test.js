import React from 'react';
import ReactDOM from 'react-dom';

import Presentation from '../Presentation.js';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Presentation></Presentation>, div);
  ReactDOM.unmountComponentAtNode(div)
});

it("renders presentation correctly", () => {
  const {getByTestId} = render(<Presentation></Presentation>);
  expect(getByTestId('heloise')).toHaveTextContent("HELOISE ROUSSEL");
})

it("matches snapshot", () => {
  const tree = renderer.create(<Presentation></Presentation>).toJSON();
  expect(tree).toMatchSnapshot();
})
