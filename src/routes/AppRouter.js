import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch, } from "react-router-dom";

import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRouter } from './DashboardRouter';
import { startChecking } from '../actions/auth'
import '../index.css';
import { ClienteRouter } from './ClienteRouter';


export const AppRouter = () => {

    const override = css`
                    display: block;
                    margin: 0;
                    border-color: blue;`;

    const dispatch = useDispatch();

    const { checking, uid, name } = useSelector(state => state.auth);

    console.log(checking, !!uid, name)

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return (
            <div>
                <div className="load-spinner">
                    <PacmanLoader color='#41ade7' loading={checking} css={override} size={70} />
                </div>
            </div>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/' component={ClienteRouter} isAuthenticated={!!uid} />
                    <PrivateRoute path='/dashboard' component={DashboardRouter} isAuthenticated={!!uid} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
