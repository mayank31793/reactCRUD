import React from 'react';

import classes from './list.css';

const list = (props) =>  {
		console.log('checkSingleCheckbox',props.arrayCheckListCheckbox);
		return(
			<div className={classes.listContainer}>
				<div className={classes.peopleDiv}>
					<div>
						<label>
							<input type="checkbox" name="people" 
							className={classes.checkboxPeople}
							// checked={props.checkPeopleCheckbox}
							onChange={props.handlePeopleCheckboxClicked} />
							People
						</label>
					</div>
					<div>
						<span 
						className={classes.deleteUsers}
						onClick={props.deleteSelectedUsers}>&#128465;</span>
					</div>
				</div>
				<hr />
				{props.listing.map((res,i) => {
					return(
						<div 
						key={i} 
						className={classes.listDisplay} >
							<input type="checkbox" 
							value={res.name}  
							className={classes.checkboxList}
							onChange={(e) => props.handleSingleCheckboxClicked(e.target.checked,i)} 
							/>
							<p onClick={() => props.handleListClickEvent(i)} >{res.name}</p>
						</div>
					);
				})}
			</div>
		);
}

export default list;