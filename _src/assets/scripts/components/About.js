import React from 'react'
import { Router, Link } from 'react-router'

const About = ( props ) => {
    return (
        <section className={ props.cName } /*ref={ ref => this.aboutPage = ref }*/ >
            <h1>{ props.header }</h1>
            <Link to="/">
                <p>back to home</p>
            </Link>
        </section>
    )
}

export default About
