import React, { useEffect } from 'react';
import AOS from 'aos';

import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import solidaridad from '../../../assets/imgs/solidaridad-about.jpg';
import '../../../assets/css/about.css';

const Aboutus = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <div id='about' className="about section-bg">

                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h3>TCU <span> 532</span></h3>
                        <p>Promoción de la Economía Solidaria y el Cooperativismo en la Región de Occidente</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                            <img src={solidaridad} class="img-fluid" alt=""></img>
                        </div>

                        <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <BubbleChartIcon color='primary' fontSize='large' />
                                    <div>
                                        <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                        <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                    </div>
                                </li>
                                <li>
                                    <BubbleChartIcon color='primary' fontSize='large' />
                                    <div>
                                        <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                        <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                                    </div>
                                </li>
                            </ul>
                            <p className='last-p'>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Aboutus