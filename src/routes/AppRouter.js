import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PublicPagesRouter } from './PublicPagesRouter';
import { DashboardRouter } from './DashboardRouter';
import { startChecking } from '../actions/auth'
import '../index.css';


export const AppRouter = () => {

    const override = css`
                    display: block;
                    margin: 0;
                    border-color: blue;`;

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

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
                    <PublicRoute
                        exact
                        path='/login'
                        component={LoginScreen}
                        isAuthenticated={!!uid}
                        restricted={true}
                    />

                    <PrivateRoute
                        path='/dashboard'
                        component={DashboardRouter}
                        isAuthenticated={!!uid}
                    />

                    <PublicRoute
                        path='/'
                        component={PublicPagesRouter}
                        isAuthenticated={!!uid}
                        restricted={false}
                    />
                </Switch>
            </div>
        </Router>
    )
}


