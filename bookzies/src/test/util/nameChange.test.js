import {expect} from '@jest/globals';
import {nameChange} from '../../util/nameChange'

test("nameChange is defined", () => {
    expect(nameChange).toBeDefined();
});

test("nameChange eliminates all | characters and replaces them with , from a given string", () => {
    const strEx = "Person1|Person2|Person3";
    expect(nameChange(strEx, "|")).toEqual("Person1, Person2, Person3");
});