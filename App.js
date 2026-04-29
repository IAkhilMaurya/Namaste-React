import React from "react"; // we do import react from react because the react come from node modules.
import ReactDOM from "react-dom/client";

const Title = () => {
    <h1 id="title" key="h2">
    Namaste React
    </h1>
};

// composing components
const HeaderComponents  = () => {
    return (
        <div>
         <Title />
        <h1>Namaste React functional component</h1>
        <h2>This is h2</h2>
        </div>
    );
};

/*
const heading = React.createElement("h1",
  {
  id: "title"
}
,"Namaste React"
);

const heading2 = React.createElement(
    "h2",
    {id: "title2"
},
"Namaste React"
);

*/
/*
const container = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading, heading2]
);//createElement to create a React element with the given type, props, and children.

  console.log(heading);
  */


  const HeaderComponent  = function () {      // This is a functional component in React, defined as an arrow function named `HeaderComponent`.
                                             // It returns a JSX element, which is a syntax extension for JavaScript that looks similar to HTML.
                                            //  When this component is used in a React application, it will render a `div` containing an `h1` and an `h2` element.
    return(
     <div>
     <h1>Namaste React functional component</h1>
     <h2>This is h2</h2>
     </div>
    );

    const HeaderComponent2  = () => {        // This is an arrow function that defines a React functional component `HeaderComponent2`.
                                            // It returns a JSX element, which is a syntax extension for JavaScript that looks similar to HTML.
                                           //  This component will render a `div` containing an `h1` and an `h2` element when used in a React application.
        <div>
            <ħ1>Namaste React functional component</h1>
            <h2>This is h2</h2> 
        </div>  
    };


  const root = ReactDOM.createRoot(document.getElementById("root"));
  //createRoot lets you create a root to display React components inside a browser DOM node.

  //passing a react element inside the root
  

  root.render(<HeaderComponents /> );
  //The `render` method is used to render a React element into the DOM. In this case, it takes the `heading` React element and renders it inside the root DOM node that was created with `createRoot`.
  //That line, `root.render(heading)`, is what takes the React element you created, the `heading` h1, and puts it onto the actual web page.
  //It basically tells React to draw that element inside the HTML element you defined as the root. Does that make sense?}
