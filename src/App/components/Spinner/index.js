import React from 'react'
import { svg } from './styles'

const Spinner = ({ size = '5rem', style = svg }) =>
	<div style={{display:'flex', justifyContent: 'center', height: '30rem', alignItems: 'center'}}>
		<svg style={style} width={size} height={size} viewBox='0 0 24 24' strokeWidth='3' strokeLinecap='round'>
			<style>{`
				@keyframes spin {
					0% { transform: rotate(0deg) }
					100% { transform: rotate(359.99deg) }
				}
			`}</style>
			<circle cx='12' cy='12' r='5.5' fill='none' stroke={'#1E1447'}></circle>
			<circle cx='12' cy='12' r='5.5' fill='none' stroke={'#C7A31E'} strokeDasharray='12 32'></circle>
		</svg>
	</div>

export default Spinner