import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
afterEach(cleanup);
describe('About component', () => {
    //renders About test
    //first test
    it('renders', ()=> {
        render(<About />);
    });
    //second test snapshots of the DOM
    it('matches snapshot DOM node structure', ()=> {
        //render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

    });
  })