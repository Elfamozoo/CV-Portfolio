import * as React from "react"
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components/'
import './App.scss'
import Darkmode from 'darkmode-js';

const options = {
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const App = () => {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Footer />
                {new Darkmode(options).showWidget()}
            </div>
        </>
    )
}

export default App