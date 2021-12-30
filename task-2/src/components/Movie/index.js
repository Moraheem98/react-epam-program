import React from 'react'
import './index.css'

export const Movie = (props) => {
	return (
		<div className='movieContainer'>
			<p>
				Title:
				{props.title}
			</p>
			<p>
				Genre:
				{props.genre}
			</p>
			<p>
				Year:
				{props.year}
			</p>
			{/* {props.image} */}
		</div>
	)
}
