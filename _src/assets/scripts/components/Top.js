import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from 'react-router'

const socialLinks = [
    {
        id: 1,
        label: 'facebook',
        link: 'https://www.facebook.com/therealedsheenan'
    },
    {
        id: 2,
        label: 'twitter',
        link: 'https://twitter.com/drealedsheenan'
    },
    {
        id: 3,
        label: 'github',
        link: 'https://github.com/therealedsheenan',
    },
    {
        id: 4,
        label: 'gmail',
        link: 'mailto:private.sheenantenepre@gmail.com'
    }
]

export default class Top extends React.Component {

    constructor( props ) {
        super( props );
    }

    componentDidMount () {
        if ( this.topPage !== undefined ) {
            this.topPage.style.backgroundColor = '#000000'
        }
    }

    ShouldComponentUpdate () {
        return true
    }

    componentWillUpdate() {
        if ( this.topPage !== undefined ) {
            this.topPage.style.backgroundColor = 'red'
        }
    }

    render () {
        return (
            <section className="Top" ref={ ref => this.topPage = ref }>
                <Social></Social>
                <div className="Top-content">
                    <div className="Top-content__intro">
                        <p className="intro">
                            Hello, I am
                            {/*<Link to='/about' className="aboutLink">*/}
                                <span className="xbold __box">{ this.props.uname }</span>
                            {/*</Link>*/}
                            a Front end developer based in Tokyo, Japan.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

class Social extends React.Component {
    render () {
        let links = socialLinks.map(( link ) => {
            return (
                <div key={ link.id }>
                    <li className={ link.label }>
                        <a href={ link.link } target="_blank">
                            { link.label }
                        </a>
                    </li>
                </div>
            )
        })
        return (
            <ul className="Top-social">
                <div className="Top-social__inner">
                    { links }
                </div>
            </ul>
        )
    }
}

Top.defaultProps = {
    uname: 'Sheenan'
}

Top.propTypes = {
    uname: React.PropTypes.string.isRequired
}
