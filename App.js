// let heading = React.createElement("h1",{
//     id:"heading",
//     xyz :'xyz'
// },"Hello world in React js");
const Parent = React.createElement("div",{id:"parent"},[
    
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"heading inside the parent"),React.createElement("h2",{id:"heading"},"heading 2 inside the parent")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"heading"},"heading inside the parent"),React.createElement("h2",{id:"heading"},"heading 2 inside the parent")]
)
]
)
console.log(Parent);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);