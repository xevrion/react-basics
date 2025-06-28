import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime" ye bhi kar skte hai...
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | Chai</h1>
      <h2>line test</h2>
      <hr></hr>
    </div>
    // ye pura syntax ki parsing hoti hai... the transpiler does this work...
  )
}

// so hum jsx me kuch bi likhte hai.. vo at the end of the day..
// starts looking like the below code, after parsing..
// to agar hum pehle se hi aisa parse kiya hua (means pure react ka) code likhe toh kya hoga?.. let's see..
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: "Click me to visit google"
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"


const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit google',
  anotherUser
) // this is how we write the object just like how react wants it to be written..

createRoot(document.getElementById('root')).render(
  // ReactElement
  // MyApp() // par ye mat karna use... 
  
  <div> 
  <MyApp/>
  <App/>
  </div>
)
