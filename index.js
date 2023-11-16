//import React from "react"
//import ReactDOM from "react-dom"

//ReactDOM.render(<ul><li>aadrika</li>
//    <li>srivastava</li></ul>,
//document.getElementById("root"))
//with JSX there were certain changes that were made like class was made to be className
//JSX - Javascript XMl
//difference between jsx and other dom components


//const h1 = document.createElement("h1")
//h1.textContent = "hello world"
//h1.className = "header"
//this displays the heading as html 
//console.log(h1)


//const element = <h1 className = "header">This is a header</h1>
//console.log(element)
//jsx
//gve out put in jaascript object form 

//ReactDOM.render(element,document.getElementById("root"))
//we cannot render 2 siblings together
//so inorder to solve that we can render it in one parent,we wrap both in a div
//ReactDOM.render(<div>
   // <h1>hi</h1>
    //<p>paea</p>
   // </div>,
//document.getElementById("root")
//)
//you can take all of the div as a one element



//Challenge
const bar = (
<nav>
    <h1>AADRIKA</h1>
    <ul>
        <li>
            Pricing
        </li>
        <li>
            About
        </li>
        <li>
            Contact
        </li>
    </ul>
</nav>
)
//ReactDOM.render(bar,document.getElementById("root"))
//React is where te jsx syntax is defined and has to be imported if we are removing cd

//document.getElementById("root").append()//this displays object Object as output
///how tp get the object use JSON.stringify()
