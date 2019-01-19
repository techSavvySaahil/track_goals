import React, { Component } from 'react';
import Manager from '../images/Manager.jpg';
import Agent1 from '../images/Agent1.png';
import Agent2 from '../images/Agent2.jpg';
import Agent3 from '../images/Agent3.jpg';
import Agent4 from '../images/Agent4.jpg';

import '../styles/aligned-goals.css';
import AlignedGoalsData from '../data/goals';

const imagesUrl = {
	"Agent 1": Agent1,
	"Agent 2": Agent2,
	"Agent 3": Agent3,
	"Agent 4": Agent4,
};

class AlignedGoals extends Component {
	render() {
		return (
			<div className="alignedgoals-wrapper">
				{AlignedGoalsData.map(goal=> (
					<div key={goal.id}>
						<div>
							<img src={Manager} /><div className="managergoal-desc">{goal.manager_goal}</div>
						</div>
						{goal.agent_goals.map(agentGoal=>(
							<div key={agentGoal.id} className="agent-goals">
								<div className="tip">
									<div></div>
								</div>
								<img src={imagesUrl[agentGoal.name]} /><div className="agentgoal-desc">{agentGoal.goal}</div>
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
}

export default AlignedGoals;