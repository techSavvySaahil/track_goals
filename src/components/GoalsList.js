import React, { Component } from 'react';
import GoalCard from './GoalCard';
import {Link} from 'react-router-dom'

class CreateGoals extends Component {
	render() {
		return (
			<div className="goal-list-wrapper">
				{this.props.goals && this.props.goals.map((goal,index)=> (
					<GoalCard key={goal.id} goal={goal} index={index} deleteGoal={this.props.deleteGoal} saveGoals={this.props.saveGoals} update="true" />
				))}
				<Link to="/create">Create New Goal(s)<div className="create-new">+</div></Link>
			</div>
		)
	}
}

export default CreateGoals;