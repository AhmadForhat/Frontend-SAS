import React from 'react'
import { render } from 'react-dom'
import { load as FontLoader } from 'webfontloader'
import { App } from './App/index'
import './index.css'

FontLoader({
	google: { families: ['Roboto:500,600,700', 'Nunito:400,700'] }
})

render(<App />, document.getElementById('app'))