import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout/Dashboard';
import Home from './screen/home/Home';
import Recruitment from './screen/recruitment/Recruitment';


const Controller = () => {
    return(
        <Router>
            <DashboardLayout>
                this is layout
                <Switch>
                <Route exact path="/" render={(props)=><Home {...props}/>} />
                <Route path="/recruitment" render={(props)=><Recruitment {...props}/>}/>
                </Switch>
            </DashboardLayout>
        </Router>
    )
}
export default Controller;