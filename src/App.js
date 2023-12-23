import React,{lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {ObjData} from "./utiles/ApiData"
import { createBrowserRouter ,Outlet,RouterProvider} from 'react-router-dom';
// import About from "./components/About"
import Error from './components/Error';
import Contact from './components/Contact';
import ResturantMenu from './components/ResturantMenu';
const About = lazy(()=> import("./components/About"));
import UserContext from './utiles/UserContext'




let data = ObjData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
const AapLayout = ()=>{
    const [userName,setUserName] = useState()
    const [searchItem,setSearchItem] = useState()
   
    useEffect(()=>{
        const data ={
            name :"Amit saini",
        } 
        setUserName(data.name);
    },[])


    return(
        <UserContext.Provider value={{loginDate:userName ,searchData: searchItem, setUserName,setSearchItem}}>
        <div className='App'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AapLayout/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1 className='mt-70'>loading...</h1>}><About /></Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/resturant/:restId",
                element:<ResturantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
]);

// console.log(jsxElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);