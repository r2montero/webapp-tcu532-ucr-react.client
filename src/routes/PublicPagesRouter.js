import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/navigation/Homebar';
import Multimedia from '../components/pages/public/Multimedia';
import { Home } from '../components/pages/public/Home';
import { NotFound404 } from '../components/pages/notFound/NotFound404';

import '../assets/css/App.css';
import Aboutus from '../components/pages/public/Aboutus';
import Footer from '../components/pages/public/Footer';
import Temas from '../components/pages/public/Temas';

export const PublicPagesRouter = () => {

    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/multimedia' component={Multimedia} />
                    <Route exact path='/acerca' component={Aboutus} />
                    <Route exact path='/temas' component={Temas} />
                    <Route exact path='/404' component={NotFound404} />

                    <Redirect to='/404' />
                </Switch>
            </div>
            <Footer />
        </>
    )
}