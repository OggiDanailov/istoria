import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import GeneralPage from '../pages/GeneralPage'
import ReviewPage from '../pages/ReviewPage'
import CorrectListingPage from '../pages/CorrectListingPage'
import NavBar from './NavBar'

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/general" component={GeneralPage} />
        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/review/:id" component={CorrectListingPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routing
