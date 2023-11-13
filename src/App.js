import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {ObjData} from "./utiles/ApiData"



let data = ObjData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
const AapLayout = ()=>{
    return(
        <div className='App'>
            <Header/>
            <Body data={data} />
            <Footer/>
        </div>
    )
}

// console.log(jsxElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AapLayout/>);