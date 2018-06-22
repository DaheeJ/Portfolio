import React from 'react';
import 'bulma/css/bulma.css'

const HomeInfo = ( ) => (
    <div>
        <div className="columns is-mobile">
            <div className="columns is-half is-offset-one-quarter">
                <div className="box">

                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Bedroom1</strong> <small>We needs...</small>
                                    <br />
                                    1.Bed mat.<br />
                                    2.   <br />
                                    3.   <br />
                                    4.   <br />
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    
    < br />
    <div className="is-11 is-offset-1">
        <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                </figure>
            </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Livingroom1</strong> <small>We needs...</small> 
                            <br />
                                1.bean bags.<br />
                                2.   <br />
                                3.   <br />
                                4.   <br />
                        </p>
                    </div>
                </div>
        </article>
        </div>
        <br />
    </div>
        <div className="is-4 is-offset-8">
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-480x480">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>kitchen</strong> <small>We needs...</small>
                                <br />
                                1. Refrigerator.<br />
                                2. Island  <br />
                                3.   <br />
                                4.   <br />
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
)

export default HomeInfo;
