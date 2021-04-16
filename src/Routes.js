import React, {useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeNavbar from "./core/HomeNavbar"
import Error from "./core/Error"
import Login from "./core/Login"
import CreateUser from './core/CreateUser';
import Home from './core/Home';
import AllNotices from './core/AllNotices';
import  FilterNotice  from './core/FilterNotice';
import AllDatesheets from './core/AllDatesheets';
import FilterDatesheet from './core/FilterDatesheet';
import AllSyllabus from './core/AllSyllabus';
import FilterSyllabus from './core/FilterSyllabus';
import {isAdmin,isLoggedin,UserContext} from "./helper/helperFunctions"
import ManageComponent from './components/ManageComponent';
import FilterComponent from './components/FilterComponent';



const Routes=()=> {
    return (
        

        
        <BrowserRouter>
      <Switch>
        <Route path="/" exact  >
               <Home />
        </Route>
        <Route path="/login" exact  >
                {isLoggedin()?<Redirect to="/" />:<Login />}
                
        </Route>
        <Route path="/createUser" exact  >
                {!isAdmin()?<Redirect to="/"/>:<CreateUser />}
        </Route>
        <Route path="/allNotices" exact  >
                <AllNotices />
        </Route>
        <Route path="/filterNotices" exact  >
                <FilterComponent target="Notice" />
        </Route>
        <Route path="/allDatesheets" exact  >
                <AllDatesheets />
        </Route>
        <Route path="/filterDatesheets" exact  >
                <FilterComponent target="Datesheet" />
        </Route>
        <Route path="/allSyllabus" exact  >
                <AllSyllabus />
        </Route>
        <Route path="/filterSyllabus" exact  >
                <FilterComponent target="Syllabus" />
        </Route>
       {isLoggedin()&&!isAdmin()&&(<Route path="/userDashboard">
                <ManageComponent target="Notice" />
        </Route>)}
        {isLoggedin()&&isAdmin()&&(<Route path="/adminDashboard">
                <ManageComponent target="Notice" />
        </Route>)}
        {isLoggedin()&&(<Route path='/manageNotice'>
                <ManageComponent target="Notice" />
        </Route>)}
        {isLoggedin()&&(<Route path='/manageSyllabus'>
                <ManageComponent target="Syllabus" />
        </Route>)}
        {isLoggedin()&&(<Route path='/manageDatesheet'>
                <ManageComponent target="Datesheet" />
        </Route>)}
        {isLoggedin()&&isAdmin()&&(<Route path='/manageUser'>
                <ManageComponent target="User" />
        </Route>)}
        <Route >
                <Error />
        </Route>
      </Switch>
    </BrowserRouter>
    )
}

export default Routes
