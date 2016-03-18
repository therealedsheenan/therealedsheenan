import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
// import TimelineLite from 'gsap'
// import Top from './components/Top.js'
import THREE from 'three'
import routes from './config/routes.js'

render( routes, document.getElementById('mainContainer') )
