import React from "react";
import { Routes, Route } from "react-router-dom";
import { members } from "../data/data";
import Companies from "../pages/companies/Companies";
import Customers from "../pages/customer/customer";
import Home from "../pages/home/home";
import { useState } from "react";

const AppRoutes = ()=>{
    const [lista, setLista] = useState(members)
    console.log(lista)
    return(
        <Routes>
            <Route path="/" element={ <Home members={members} /> } /> 
            <Route path="/companies/:id" element={ <Companies />} />
            <Route path="/customers/:id" element={ <Customers /> } />
        </Routes>
    )
}

export default AppRoutes