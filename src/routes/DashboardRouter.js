import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Inicio from '../components/pages/admin/Inicio';
import Temas from '../components/pages/admin/Temas';
import Multimedia from '../components/pages/admin/Multimedia';
import Configuracion from '../components/pages/admin/Configuracion';

import '../assets/css/App.css';

export const DashboardRouter = () => {

    return (
        <>

            <Navbar />


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
