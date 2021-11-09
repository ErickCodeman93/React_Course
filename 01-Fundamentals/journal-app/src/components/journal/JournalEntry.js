import React from 'react'

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">

			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage: 'url(https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg)'
				}}
			>
			</div>

			<div className="journal__entry-body">
				<p className="journal__entry-title"> 
					Un nuevo día
				</p>
				<p className="journal__entry-content"> 
					Commodo deserunt aliquip ut commodo culpa voluptate Lorem ex sunt.
				</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	)
}
