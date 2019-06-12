import React from "react";
import ReactDOM from "react-dom";
import AppInit from "./AppInit";

console.messages = [];
console.defaultLog = console.log.bind(console);
console.log = function() {
    console.defaultLog.apply(console, arguments);
    console.messages.push("log: " + Array.from(arguments));
};
console.defaultError = console.error.bind(console);
console.error = function() {
    console.defaultError.apply(console, arguments);
    console.messages.push("error: " + Array.from(arguments));
};
console.defaultWarn = console.warn.bind(console);
console.warn = function() {
    console.defaultWarn.apply(console, arguments);
    console.messages.push("warn: " + Array.from(arguments));
};
console.defaultDebug = console.debug.bind(console);
console.debug = function() {
    console.defaultDebug.apply(console, arguments);
    console.messages.push("debug: " + Array.from(arguments));
};
console.defaultInfo = console.info.bind(console);
console.info = function() {
    console.defaultInfo.apply(console, arguments);
    console.messages.push("info: " + Array.from(arguments));
};

if (__PERFORMANCE_DEVTOOL__) {
    const {registerObserver} = require("react-perf-devtool");
    registerObserver();
}

const rootEl = document.getElementById("content");
const render = () => {
    ReactDOM.render(<AppInit />, rootEl);
};
render();
