import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/navigation/Homebar';
import Multimedia from '../components/pages/public/Multimedia';
import Inicio from '../components/pages/public/Home';

import '../assets/css/App.css';
import Aboutus from '../components/pages/public/Aboutus';
import Footer from '../components/pages/public/Footer';
import Temas from '../components/pages/public/Temas';

export const ClienteRouter = () => {

    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/' component={Inicio} />
                    <Route exact path='/multimedia' component={Multimedia} />
                    <Route exact path='/acerca' component={Aboutus} />
                    <Route exact path='/temas' component={Temas} />
                </Switch>
            </div>
            <Footer/>
        </>
    )
}