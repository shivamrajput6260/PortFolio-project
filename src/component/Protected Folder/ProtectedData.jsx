import React from 'react'
import HomePage from '../HomePage'
import About from '../About'
import Service from '../Service'
import PortFolio from '../PortFolio'
import Blog from '../Blog'
import Contact from '../Contact'
import ScrollBar from '../ScrollBar'
import HeaderNew from '../HeaderNew'
import Footer from '../Footer'

const ProtectedData = () => {
    return (
        <div>
            <HeaderNew />
            <HomePage />
            <About />
            <Service />
            <PortFolio />
            <Blog />
            <Contact />
            <Footer />
            <ScrollBar />
        </div>
    )
}

export default ProtectedData