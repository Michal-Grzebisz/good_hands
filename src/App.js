import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from './components/LogIn'


const App = () => (
  <>
       <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                   <LogIn />
                </Route> 
                {/* <Route exact path='/logout-successful'>
                    <LogoutSuccess />
                </Route>
                    <Route exact path='/register'>
                        <SignUp />
                    </Route>
                <Route exact path='/giveaway'>
                    <GiveAway />
                </Route> */}
            </Switch>
        </BrowserRouter>
        </>
  </>
)

export default App;
