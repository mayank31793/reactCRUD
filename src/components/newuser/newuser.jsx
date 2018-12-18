import React from 'react';

import classes from './newuser.css';

const newuser = (props) => {
	return(
		<div className={classes.newuserContainer}>
			<div className={classes.newuser}>
				<div className={classes.newUserHeading}>
					<h3>New User</h3>
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Image URL:</span>
					<input type="text" 
					value={props.newUserDetail.newUserImg} 
					onChange={props.newImg}
					className={classes.InputFields} />
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Name:</span>
					<input type="text" 
					value={props.newUserDetail.newUserName} 
					onChange={props.newName}
					className={classes.InputFields} />
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Rating:</span>
					<input type="number" 
					value={props.newUserDetail.newUserRating} 
					onChange={props.newRating} 
					className={classes.InputFields} />
				</div>
				<div className={classes.inputFieldDiv}>
					<span>Description:</span>
					<textarea rows="5"
					value={props.newUserDetail.newUserDescription} 
					onChange={props.newDescription}
					className={classes.InputFields} ></textarea>
				</div>
				<div className={classes.inputFieldSubmit}>
					<button onClick={props.newUserAdd} >Add User</button>
				</div>
			</div>
		</div>
	);
}

export default newuser;