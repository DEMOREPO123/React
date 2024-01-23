// const val = React.createElement("h1", { id: "colors" }, "Hello ");
// const root = ReactDOM.createRoot(document.querySelector(".one"));
// root.render(val);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "last" }, "reactjs"),
    React.createElement("h2", { id: "last1" }, "reactjs siblings"),
  ])
);
const root = ReactDOM.createRoot(document.querySelector(".one"));
root.render(parent);
