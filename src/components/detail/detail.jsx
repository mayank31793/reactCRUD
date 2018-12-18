import React from 'react';

import classes from './detail.css';

const detail = (props) => {
	return(
		<div className={classes.detailContainer} >
		{props.details.img?
			<div className={classes.details}>
				<div className={classes.imgDiv}>
					<img src={props.details.img} alt="ProfilePicture" />
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Name:</span><input type="text" readOnly value={props.details.name} className={classes.InputFields} />
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Rating:</span><input type="number" readOnly value={props.details.rating} className={classes.InputFields} />
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Description:</span><textarea rows="5" readOnly value={props.details.description} className={classes.InputFields} ></textarea>
				</div>
			</div>:
			<p>Teknuance Info Solution</p>
		}						
		</div>
	);
}

export default detail;