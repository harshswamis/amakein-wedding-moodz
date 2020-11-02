import React from 'react';

const Hero = ({handleSignout}) => {

    return(
        <section className="Hero">
            <nav>
                <h2> Welcome </h2>
                <button onClick={handleSignout}> Logout </button>
            </nav>
        </section>    
    );

};

export default Hero;
