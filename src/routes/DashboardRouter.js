import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../components/navigation/Sidebar';
import Home from '../components/pages/Inicio';
import Temas from '../components/pages/Temas';
import Multimedia from '../components/pages/Multimedia';
import Configuracion from '../components/pages/Configuracion';

import '../assets/css/App.css';


export const DashboardRouter = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <header>
                <h6 className='menu'>Menu</h6> <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            </header>

            <Sidebar show={showNav} />

            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/materiales' component={Multimedia} />
                    <Route exact path='/temas' component={Temas} />
                    <Route exact path='/config' component={Configuracion} />

                    <Redirect to='/' />
                </Switch>
            </div>
        </>
    )
}
