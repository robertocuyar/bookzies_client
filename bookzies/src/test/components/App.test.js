import {expect} from '@jest/globals';
import React from 'react';
import App from "../../components/App";
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavBar from '../../components/Logo';
import Splash from '../../components/Splash';
import SearchBar from "../../components/SearchBar";

test("App.js is defined", () => {
    expect(App).toBeDefined();
});

configure({adapter: new Adapter()});

describe("App", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it("renders shallow instance", () => {
        wrapper;
    });

    it("Contains all sub components for App", () => {
        expect(wrapper.containsAllMatchingElements([
            <NavBar/>,
            <Splash/>,
            <SearchBar/>
        ])).toEqual(true);
    });

});

