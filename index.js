  const heading = React.createElement("h1",
  {
    id: "title"
}
,"Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {id: "title2"
},
"Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading, heading2]
);//createElement to create a React element with the given type, props, and children.

  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //createRoot lets you create a root to display React components inside a browser DOM node.

  //passing a react element inside the root
  

  root.render(heading)
  //That line, `root.render(heading)`, is what takes the React element you created, the `heading` h1, and puts it onto the actual web page.
  //It basically tells React to draw that element inside the HTML element you defined as the root. Does that make sense?}
