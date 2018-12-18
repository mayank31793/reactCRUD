import React, { Component } from 'react';
import axios from 'axios';

import classes from './App.css';
import Detail from './components/detail/detail';
import Newuser from './components/newuser/newuser';
import List from './components/list/list';

class App extends Component {	
	constructor(){
		super();
		this.state = {
			myData:[],
			img:'',
			name:'',
			rating:'',
			description:'',
			newUser:false,
			newUserImg:'',
			newUserName:'',
			newUserRating:'',
			newUserDescription:'',
			checkPeopleCheckbox:false,
			checkSingleCheckbox:false,
			arrayCheckListCheckbox:[],
			// deleteArray:[]
		}
		this.handleListClick = this.handleListClick.bind(this);
		this.handleNewName = this.handleNewName.bind(this);
		this.handleNewRating = this.handleNewRating.bind(this);
		this.handleNewDescription = this.handleNewDescription.bind(this);
		this.handlePeopleCheckboxClicked = this.handlePeopleCheckboxClicked.bind(this);
		// this.handleSingleCheckboxClicked = this.handleSingleCheckboxClicked.bind(this);
	}
	
	componentDidMount(){
		axios.get('http://localhost:3004/People')
			.then((res) => this.setState({myData:res.data}))
			.then(() => this.setState({arrayCheckListCheckbox:Array(this.state.myData.length).fill(this.state.checkSingleCheckbox)}))		
	}

	handleListClick = (a) => {
		this.setState({
			img: this.state.myData[a].img,
			name: this.state.myData[a].name,
			rating: this.state.myData[a].rating,
			description: this.state.myData[a].Description
		})
	}	

	handleAddNewUserButton = () => {
		this.setState({newUser:!this.state.newUser})
	}

	handleNewImg = (event) => {
		this.setState({newUserImg:event.target.value})
		console.log(event.target.value);
	}

	handleNewName = (event) => {
		this.setState({newUserName:event.target.value})
		console.log(event.target.value);
	}

	handleNewRating = (event) => {
		this.setState({newUserRating:event.target.value})
		console.log(event.target.value);
	}

	handleNewDescription = (event) => {
		this.setState({newUserDescription:event.target.value})
		console.log(event.target.value);
	}		

	handleNewUserAdd = () => {
		axios.post('http://localhost:3004/People',{img:this.state.newUserImg,name:this.state.newUserName,rating:this.state.newUserRating,Description:this.state.newUserDescription})
		.then((res) => console.log(res.data))
		.catch(error => console.log(error.message));
		window.location.reload();
	}

	handlePeopleCheckboxClicked = (event) => {
		console.log('people clicked', event.target.checked);
		const copy = [...this.state.arrayCheckListCheckbox];
		if(event.target.checked === true){
			for(var i=0;i<copy.length;i++){
				copy[i] = !this.state.checkSingleCheckbox;
			}
		}
		else{
			for(var j=0;j<copy.length;j++){
				copy[j] = this.state.checkSingleCheckbox;
			}			
		}
		this.setState({arrayCheckListCheckbox:copy});
		console.log(this.state.arrayCheckListCheckbox);		
	}

	handleSingleCheckboxClicked = (event,val) => {
		console.log('single clicked event',event);
		console.log('single clicked val',val);
		const copy = [...this.state.arrayCheckListCheckbox];
		if(event === true){
			copy[val] = !this.state.checkSingleCheckbox;
		}
		else if(event === false){
			copy[val] = this.state.checkSingleCheckbox;
		}
		this.setState({arrayCheckListCheckbox:copy});
		console.log(this.state.arrayCheckListCheckbox);
	}

	deleteSelectedUsers = () => {
		console.log('delete function');
		const copy = [...this.state.arrayCheckListCheckbox];
		for(var i=0;i<copy.length;i++){
			if(copy[i] === true){
				const deleteId = i+1;
				axios.delete('http://localhost:3004/People/'+deleteId);
				// console.log('http://localhost:3004/People/'+deleteId);
			}
		}
	}

	render() {
		console.log(this.state.arrayCheckListCheckbox);
		return (	
			<div className={classes.webpageUsers}>
				<div className={classes.list}>
					<List 
					listing={this.state.myData}
					// arrayCheckListCheckbox={this.state.arrayCheckListCheckbox}
					handleListClickEvent={this.handleListClick}
					checkPeopleCheckbox={this.state.checkPeopleCheckbox}
					handlePeopleCheckboxClicked={this.handlePeopleCheckboxClicked}
					handleSingleCheckboxClicked={this.handleSingleCheckboxClicked}
					// checkSingleCheckbox={this.state.checkSingleCheckbox}
					deleteSelectedUsers={this.deleteSelectedUsers} />
				</div>
				<div className={classes.detail}>
					<div 
					onClick={this.handleAddNewUserButton} 
					className={classes.newUserButton}>
						{
							!this.state.newUser?
							<span>&#43;</span>:
							<span>&#120;</span>
						}
					</div>
					
					{
						this.state.newUser 
						? 
						<Newuser 
						newUserDetail={this.state} 
						newUserAdd={this.handleNewUserAdd}
						newImg={this.handleNewImg}
						newName={this.handleNewName}  
						newRating={this.handleNewRating}
						newDescription={this.handleNewDescription} />
						: 
						<Detail 
						details={this.state} />
					}	
				</div>			
			</div>
		);
	}

}

export default App;