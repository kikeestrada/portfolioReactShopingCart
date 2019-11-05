import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Courses from "./pages/Courses"
import Course from "./pages/Course"
import Home from "../components/pages/Home"
import MainMenu from "./organisms/MainMenu"
import Banner from "../components/organisms/Banner"

const AppRoutes = () => (

    <Router>
        <MainMenu />
        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/cursos/:id" exact component={Course}/>
            <Route path = "/cursos" exact component={()=>(
                <>
                <Banner/>
                <Courses/>
                </>

            )}/>
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Página no encontrada</h1>
                </div>
            )}/>
        </Switch>
    </Router>

)

export default AppRoutes;