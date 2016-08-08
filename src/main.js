/* @flow */
import React from "react";
import ReactDOM from "react-dom";
import xtend from "xtend";

// function bar(x): string {
//   return x.length;
// }
// bar('Hello, world!');

type Event = {
  type: string;
}

type EventA = {
  type: "a";
  foo: number;
};

type EventB = {
  type: "b";
  bar: number;
};

type Events = EventA | EventB;

function aaa(ev: Events): number {
  if (ev.type === "a") {
    return ev.foo;
  } else if (ev.type === "b") {
    return ev.bar;
  }
  return 1;
}

var x: ?number = 3;

function id(n: number) {return n;}

x && id(x);

if (x && typeof x === "number") {
  id(x);
}

class Hello extends React.Component {
  props: ({
    a: "a";
  } | {
    a: "b";
  } | {
    b: number;
  });

  render() {
    return <h1> Hello </h1>;
  }
}

ReactDOM.render(<Hello a={"a"}/>, document.querySelector(".mainContainer"));
