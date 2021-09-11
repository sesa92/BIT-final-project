import React from 'react';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

function Home (){
    return (
    <div className="login">
        <Header title="Interview Reports" showItems={true} />
        <Footer />
    </div>
    )
}
export default Home;