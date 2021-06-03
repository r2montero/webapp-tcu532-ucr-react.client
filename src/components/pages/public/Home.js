import React, { useEffect } from 'react';
import AOS from 'aos';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PeopleIcon from '@material-ui/icons/People';
import GradeIcon from '@material-ui/icons/Grade';
import SchoolIcon from '@material-ui/icons/School';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DateRangeIcon from '@material-ui/icons/DateRange';
import '../../../assets/css/publicHome.css';
import mujeres from '../../../assets/imgs/mujeres.jpg';
import mujeres1 from '../../../assets/imgs/mujeres-1.jpg';
import CountUp from 'react-countup';

export const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='container'>

            <div id="hero" className="d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">TCU 532</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">Universidad de Costa Rica - Sede Occidente. Repositorio de recursos educativos</h2>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                        <img src={mujeres} className="img-fluid animated" alt=""></img>
                    </div>
                </div>
            </div>

            <div id='about' className="about">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Sobre el TCU</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </p>
                            <ul>
                                <li><DoneAllIcon color='primary' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><DoneAllIcon color='primary' /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                <li><DoneAllIcon color='primary' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#" className="btn-learn-more">Más Detalles</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='counts' className="counts">
                <div className="container">
                    <div className="row">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                            data-aos="fade-right"
                            data-aos-delay="150">
                            <img src={mujeres1} alt="" className="img-fluid" />
                        </div>

                        <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                            <div className="content d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <PeopleIcon color='primary' fontSize='large' />
                                            <CountUp start={-50} end={265} duration={7} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <p><strong>Personas Impactadas</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <GradeIcon color='primary' fontSize='large' />
                                            <CountUp start={-20} end={10} duration={7} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <p><strong>Proyectos</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <SchoolIcon color='primary' fontSize='large' />
                                            <CountUp start={-60} end={65} duration={7} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <p><strong>Talleres</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <DateRangeIcon color='primary' fontSize='large' />
                                            <CountUp start={-50} end={8} duration={7} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <p><strong>Años</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="more-services" className="more-services">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Temas Destacados</h2>
                        <p>Aquí puede ver algunos de los temas destacados</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="card c1" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Cooperativismo</a></h5>
                                <p className="card-text">
                                    Recursos educativos sobre el cooperativismo
                                </p>
                                <div className="read-more">
                                    <a href="#"><ArrowForwardIcon fontSize='small' /> Mostrar Recursos</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="card c2" data-aos="fade-up" data-aos-delay="200">
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Economía Solidaria</a></h5>
                                <p className="card-text">
                                    Recursos educativos sobre Economía Solidaria
                                </p>
                                <div className="read-more">
                                    <a href="#"><ArrowForwardIcon fontSize='small' /> Mostrar Recursos</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex align-items-stretch mt-4">
                        <div className="card c3" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Derecho Laboral</a></h5>
                                <p className="card-text">
                                    Recursos educativos sobre Derecho Laboral
                                </p>
                                <div className="read-more">
                                    <a href="#"><ArrowForwardIcon fontSize='small' /> Mostrar Recursos</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex align-items-stretch mt-4">
                        <div className="card c4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Covid-19</a></h5>
                                <p className="card-text">
                                    Recursos educativos sobre manejo del coronavirus
                                </p>
                                <div className="read-more">
                                    <a href="#"><ArrowForwardIcon fontSize='small' /> Mostrar Recursos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
