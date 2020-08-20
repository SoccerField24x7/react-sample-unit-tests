import React from 'react';
import Todo from './Todo';
import Enzyme, { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> component unit tests", () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: 'buy milk'
    }

    let component;

    // beforeAll() if you want to run just once
    beforeEach(() => {
        component = shallow(<Todo { ...props } /> );
    });

    it("should render 1 <Todo /> component", () => {
        expect(component).toHaveLength(1);
        expect(component.find('li')).toHaveLength(1);
    });

    it("should render props correctly", () => {
        //console.log(component.props());
        expect(component.props().children).toEqual('buy milk');
    });

    it('should set props correctly', () => {
        component.setProps({ text: 'Hello'});
        expect(component.props().children).toEqual('Hello');
    });

    it('should call onClick handler when Todo component is clicked', () => {
        component.simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});

describe('<Todo /> Styling Behavior', () => {
    const mockFn = jest.fn();

    it('shoud not have linethrough style when Todo is incomplete', () => {
        const component = shallow(<Todo onClick={mockFn} completed={false} text="go shopping" />);
        expect(component.props().style).toEqual({ textDecoration: 'none' });
    });

    it('shoud have linethrough style when Todo is incomplete', () => {
        const component = shallow(<Todo onClick={mockFn} completed={true} text="go shopping" />);
        expect(component.props().style).toEqual({ textDecoration: 'line-through' });
    });
});