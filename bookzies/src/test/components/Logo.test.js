import {expect} from '@jest/globals';
import React from 'react';
import Logo from '../../components/Logo';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {shallow, configure} from 'enzyme';
import logoImg from '../../img/Bookzies.png'

test("Logo.js is defined", () => {
    expect(Logo).toBeDefined();
});
configure({adapter: new Adapter()});

describe("Logo", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Logo/>)
    });

    it("renders correctly", () => {
        wrapper;
    });

    it("Contains app name", () => {
        expect(wrapper.containsAnyMatchingElements([<img src={logoImg} alt="Bookzies"/>])).toEqual(true);
    });
});