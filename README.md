# What Is State In React

## Main job of react is to take your application state and turn it into DOM nodes

## Many Kinds Of State; Model Data, View/UI State, Session State, Communication, Location

## Counter.js is a simple example of state in a class based component

## Turns out SCSS files is Auto Compiled With Parcel just write The File and import it

## What Not To Do With StateManagment

#### Props have PropTypes State does not.

#### if you can do it with props dont store it in state

#### If youre not rendering it you dont need to store it in state

#### Only stuff that when it changes i want to trigger a reRender

#### Break Things Into Helper Methods

#### useRef

#### const countRef = React.useRef();

#### useRef() gives us an object, { current: null }. It has the current property on it

#### Primitives are passed by value non-Primitives are passed by reference, this way it keeps referencing tge same obkect..

#### we can use countRef.current to compare new values and old values.

#### useReducer Handles more complex state
