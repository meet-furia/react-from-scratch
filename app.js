import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
const elementTitle = <h1>Namaste React From Element</h1>

const Title = () => <h1>Namaste React</h1>

const HeadingComponent = () => {
    return(
    <div>
        {elementTitle}
        {Title()}
        <Title></Title>
        <Title/>
        <h1 className="heading">Namaste React By Functional Component</h1>
    </div>    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);







  