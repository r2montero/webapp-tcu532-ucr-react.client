import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    restricted,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated && restricted)
                    ? (<Redirect to="/dashboard" />)
                    : (<Component {...props} />)
            )}

        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    restricted: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}
