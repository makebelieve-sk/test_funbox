import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CardComponent } from '../card-component';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10) => shallow(
    <CardComponent product={prop1} selected={prop2} buyMode={prop3} i={prop4} text={prop5} mouseEnter={prop6} mouseLeave={prop7} checked={prop8} change={prop9} disabled={prop10} />
);

const mock = {
    product: {
        id: 0,
        title: `Сказочное заморское яство`,
        hoverTitle: `Котэ не одобряет?`,
        name: `Нямушка`,
        with: `с фуа-гра`,
        description_line1: `10 порций`,
        description_line2: `мышь в подарок`,
        weight: `0,5`,
        quantity: 1,
        text: `Чего сидишь? Порадуй котэ, `,
        buy: true
    },
    selected: [false, false, false, false],
    buyMode: `string`,
    i: 0,
    text: `some text`,
    mouseEnter: jest.fn(),
    mouseLeave: jest.fn(),
    checked: false,
    change: jest.fn(),
    disabled: `some string`
};

describe(`CardComponent component`, () => {
    let component;

    beforeEach(() => {
        component = setUp(mock.product, mock.selected, mock.buyMode, mock.i, mock.text, mock.mouseEnter, mock.mouseLeave, mock.checked, mock.change, mock.disabled);
    });

    it(`should contain div wrapper`, () => {
        const wrapper = component.find('.product-wrapper');
        expect(wrapper.length).toBe(1);
    });

    it(`CardComponent correctly renders after relaunch`, () => {
        const tree = renderer  
            .create(<CardComponent 
                product={mock.product}
                selected={mock.selected}
                buyMode={mock.buyMode}
                i={mock.i}
                text={mock.text}
                mouseEnter={mock.mouseEnter}
                mouseLeave={mock.mouseLeave}
                checked={mock.checked}
                change={mock.change}
                disabled={mock.disabled}
            />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});