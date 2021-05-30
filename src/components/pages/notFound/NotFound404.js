import React from 'react';
import './notFound404.css';

export const NotFound404 = () => {
    return (
        <>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Oh... Esto es un error
		                            </h3>

                                    <p>La página que buscas no existe</p>

                                    <a href="/" className="link_404">Volver a la civilización</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
