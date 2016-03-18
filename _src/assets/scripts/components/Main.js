import React from 'react'
// import jade from 'react-jade'
//
// const Main = React.createClass({
//     render: react `
//         h1 this is a test
//     `
// })
//
// export default Main

export default class Main extends React.Component {
    render () {
        return (
            <main role="main" className="Main" id="main">
                <div className="SmokeBg" id="smokebg"></div>
                { this.props.children }
            </main>
        )
    }
}
