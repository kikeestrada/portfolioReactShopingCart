import React from "react"
import {BrowserRouter as Router, Route, HashRouter} from "react-router-dom"
import Courses from "./pages/Courses"
import Course from "./pages/Course"
import Home from "../components/pages/Home"
import MainMenu from "./organisms/MainMenu"
import Banner from "../components/organisms/Banner"

const AppRoutes = () => (

    <Router>
        <HashRouter basename = '/'>
            <MainMenu />
            <Route path = "/" exact component={Home}/>
            <Route path = "/cursos/:id" exact component={Course}/>
            <Route path = "/cursos" exact component={()=>(
                <>
                <Banner/>
                <Courses/>
                </>

            )}/>
        </ HashRouter >


    </Router>

)

export default AppRoutes;