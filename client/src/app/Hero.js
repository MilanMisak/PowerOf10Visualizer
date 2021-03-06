import React from 'react';
import PropTypes from 'prop-types';

export default function Hero({children}) {
    return <section className="hero is-primary is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h1 className="title">
                                Running Performance Visualizer
                            </h1>
                            <span className="tag is-warning" style={{marginLeft: 10}}>BETA</span>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
Hero.propTypes = {
    children: PropTypes.node
};
