const heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[
React.createElement("h1",{id:"heading"},"hello world"),
React.createElement("h1",{id:"heading2"},"hello world2")]));
console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"))
        console.log(root);
        root.render(heading);
