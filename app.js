// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div", { id: "parent" }, [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", { id: "heading2" }, "I am h1 Heading"),
            React.createElement("h2", { id: "heading2" }, "I am h2 Heading")
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", { id: "heading2" }, "I am h1 Heading"),
            React.createElement("h2", { id: "heading2" }, "I am h2 Heading")
        ]),
    ]
);

const root1 = ReactDOM.createRoot(document.getElementById("heading"));
root1.render(parent);
