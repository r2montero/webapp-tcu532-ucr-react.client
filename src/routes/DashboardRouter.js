import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from '../components/navigation/Navbar';
import Infografias from "../components/pages/Infografias";
import Home from "../components/pages/Inicio";
import Temas from "../components/pages/Temas";

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/materiales" component={Infografias} />
                    <Route path="/temas" component={Temas} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
