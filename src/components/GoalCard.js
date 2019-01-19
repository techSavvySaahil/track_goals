import React, { Component } from 'react';

class GoalCard extends Component {
	state = {
		isEditing: this.props.isEditing,
		title: this.props.goal.title,
		description: this.props.goal.description,
		id: this.props.goal.id
	}
	handleChange = (e,title)=> {
		let text = e.target.value;
		if(!this.props.update) {
			let index = this.props.index;
			this.props.handleChange(text, title, index);
		}
		if(title) {
			this.setState({
				title: text
			})
		}
		else {
			this.setState({
				description: text
			})
		}
	}
	toggleEditing = (edit)=> {
		this.setState({
			isEditing: !this.state.isEditing
		})
	}
	saveGoals = ()=> {
		let {title, description, id} = this.state;
		let obj = {title, description, id};
		let index = this.props.index;
		this.props.saveGoals([obj], index);
		this.toggleEditing();
	}
	resetState = () => {
		this.toggleEditing();
		this.setState({
			title: this.props.goal.title,
			description: this.props.goal.description
		})
	}
	deleteGoal = ()=> {
		let index = this.props.index;
		this.props.deleteGoal(index);
	}

	render() {
		return (
			<div className="goal-card">
				{this.state.isEditing && 
					(<div>
					<input value={this.state.title} placeholder="Title" onChange={(e)=> this.handleChange(e,true)} />
					<textarea value={this.state.description} placeholder="Description" onChange={(e)=> this.handleChange(e,false)} />
					{this.props.update && 
						(<div className="btn-wrapper">
							<button onClick={this.toggleEditing}>Cancel</button>
							<button onClick={this.saveGoals}>Save</button>
						</div>)
					}
					{!this.props.update && 
						(<div className="btn-wrapper">
							<button onClick={this.deleteGoal}>Delete</button>
						</div>)
					}
					</div>)
				}
				{!this.state.isEditing && 
					(<div>
					<div>{this.props.goal.title}</div>
					<div className="goal-desc">{this.props.goal.description}</div>
					<div className="btn-wrapper">
						<button onClick={this.deleteGoal}>Delete</button>
						<button onClick={this.resetState}>Update</button>
					</div>
					</div>)
				}
			</div>
		)
	}
}

export default GoalCard;