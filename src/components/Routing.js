import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import GeneralPage from "../pages/GeneralPage"
import NavBar from "./NavBar"

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/general' component={GeneralPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routing
