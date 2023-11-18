import React from 'react';
import Home from '../../Pages/Home/index';
import About from '../../Pages/About/index';
import Contact from '../../Pages/Contact/index';
import Product from '../../Pages/Product';
import ProductDetail from '../../Pages/ProductDetail/index';



export const WebRoutes = [
    {id:1, path:"/", element:<Home/>, title:"Home"},
    {id:2, path:"/about", element:<About/>, title:"About"},
    {id:3, path:"/contact", element:<Contact/>, title:"Contact"},
    {id:4, path:"/product", element:<Product/>, title:"Product"},
    {id:5, path:"/product*/:id", element:<ProductDetail/>, title:""},
];