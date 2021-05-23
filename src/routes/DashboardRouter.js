import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../components/navigation/Sidebar';
import Inicio from '../components/pages/Inicio';
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
                    <Route exact path='/dashboard' component={Inicio} />
                    <Route exact path='/dashboard/materiales' component={Multimedia} />
                    <Route exact path='/dashboard/temas' component={Temas} />
                    <Route exact path='/dashboard/config' component={Configuracion} />

                </Switch>
            </div>
        </>
    )
}
