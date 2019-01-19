import React, { Component } from 'react';
import GoalCard from './GoalCard';
import {Link} from 'react-router-dom';

class CreateGoals extends Component {
	state = {
		newGoals: [
			{
			  "title": "",
			  "description": "",
				"id": new Date().getTime() + (Math.random()*1000)
			}
		]
	}
	handleChange = (text,title,index)=> {
		let arr = [...this.state.newGoals];
		let key = title ? "title" : "description";
		arr[index][key] = text;
		this.setState({
			newGoals: arr
		});
	}
	saveGoals = (e)=> {
		let flag = false;
		let arr = [...this.state.newGoals];
		arr.some((goal, index)=> {
			if(!goal.title || !goal.description) {
				flag = true;
				alert(`All the fields in goals are necessary. Please check Goal #${index+1}`);
				e.preventDefault();
				return true;
			}
			return false;
		})
		if(!flag && arr.length) {
			this.props.saveGoals(arr);
		}
	}
	deleteGoal = (index)=> {
		if(this.state.newGoals.length <2) {
			alert("Please go to the main page if you don't want to add any goals");
			return;
		}
		let arr = [...this.state.newGoals];
		arr.splice(index,1);
		this.setState({
			newGoals: arr
		});
	}
	addGoal = () => {
		if(this.state.newGoals.length<8) {
			let arr = [...this.state.newGoals];
			arr.push({
				  "title": "",
				  "description": "",
				  "id": new Date().getTime() + (Math.random()*1000)
				});
			this.setState({
				newGoals: arr
			});
		}
		else {
			alert("You can't add more than 8 goals at once");
		}
	}

	render() {
		return (
			<div className="create-goal-wrapper">
			<div className="back-btn"><Link to="/">Back to List page</Link></div>
			<div>
				{this.state.newGoals.map((goal,index)=> (
					<div style={{width:"25%"}} key={goal.id}><span>Goal #{index+1}</span>
					<GoalCard goal={goal} index={index} handleChange={this.handleChange} deleteGoal={this.deleteGoal} isEditing="true" />
					</div>
				))}
				</div>
				<button onClick={this.addGoal}>Add New Goal</button>
				<Link to="/" onClick={this.saveGoals}>Save</Link>
			</div>
		)
	}
}

export default CreateGoals;