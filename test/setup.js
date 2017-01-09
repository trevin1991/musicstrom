import React from "react";
import { expect } from "chai";
import jsdom from "jsdom";

const DOC = jsdom.jsdom("<doctype html><html><body></body></html>");
const WIN = DOC.defaultView;

global.document = DOC;
global.window = WIN;

Object.keys(window).forEach(key => {
    if(!(key in global))
        global[key] = window.key;
});

global.React = React;
global.expect = expect;