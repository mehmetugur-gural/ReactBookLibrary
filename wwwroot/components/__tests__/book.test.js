import React from 'react';
import { shallow } from 'enzyme';

import Book from './wwwroot/components/book/book.js';

describe("Book", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Book />);
  });
});