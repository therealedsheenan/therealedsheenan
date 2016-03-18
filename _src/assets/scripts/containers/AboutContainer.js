import React from 'react'
import About from '../components/About.js'

export default class AboutContainer extends React.Component {
    render () {
        return (
            // <h1>this is a test</h1>
            <About
                cName = { this.props.cName }
                header = { this.props.header }
            />
        )
    }
}

AboutContainer.defaultProps = {
    cName: 'About',
    header: 'About Me'
}
