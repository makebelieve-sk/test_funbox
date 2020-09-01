import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../app';

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => shallow(<App />);

describe(`App component`, () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it(`should contain div wrapper`, () => {
        const wrapper = component.find('.main_wrapper');
        expect(wrapper.length).toBe(1);
    });

    it(`App correctly renders after relaunch`, () => {
        const tree = renderer  
            .create(<App />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});