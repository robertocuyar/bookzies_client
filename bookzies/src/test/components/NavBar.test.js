import {expect} from '@jest/globals';
import React from 'react';
import NavBar from '../../components/NavBar';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {shallow, configure} from 'enzyme';
import Typography from '@material-ui/core/Typography';

test("NavBar.js is defined", ()=>{
    expect(NavBar).toBeDefined();
});
configure({ adapter: new Adapter()});

describe ("Navbar", ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<NavBar/>)
    });

    it("renders correctly", ()=>{
        wrapper;
    });

    it("Contains app name", ()=>{
        expect(wrapper.containsAnyMatchingElements([<Typography>Bookzies</Typography>])).toEqual(true);
    });
});