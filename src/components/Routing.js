import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import GeneralPage from "../pages/GeneralPage"
import ReviewPage from "../pages/ReviewPage"
import NavBar from "./NavBar"

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/general' component={GeneralPage} />
        <Route exact path='/review' component={ReviewPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routing
