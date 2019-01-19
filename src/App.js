import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import FetchReq from './API/api';
import GoalsList from './components/GoalsList';
import CreateGoals from './components/CreateGoals';
import AlignedGoals from './components/AlignedGoals.js';

class App extends Component {
  state = {
    goals: [
      {
        "title": "Goal one",
        "description": "First goal's description"
      },
      {
        "title": "Goal two",
        "description": "Second goal's description"
      }
    ]
  }

  saveGoals = (goals,index=-1) => {
    let arr = [...this.state.goals];
    if(!~index) {
      arr = arr.concat(goals);
    }
    else {
      arr[index] = Object.assign({}, goals[0]);
    }
    this.setState({
      goals: arr
    });
    let reqArr = goals.map(goal=> {
      let newGoal = Object.assign({}, goal);
      delete newGoal.id;
      return newGoal;
    });
    // POST request for saving new goals
    // FetchReq.post(reqArr)
    // .then(res => {
    //   console.log(res);
    //   return res.json();
    // })
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
  }

  deleteGoal = (index)=> {
    let arr = [...this.state.goals];
    let goal = arr.splice(index,1);
    delete goal.id;
    this.setState({
      goals: arr
    });
    // DELETE request for deleting goals
    // FetchReq.delete(goal)
    // .then(res => {
    //   console.log(res);
    //   return res.json();
    // })
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
  }

  componentDidMount = ()=> {
    // GET request for getting saved goals
    // FetchReq.get()
    // .then(response=> {
    //   return response.json();
    // })
    // .then(myJson=> {
    //   let arr = myJson.data.map(goal=> {
    //     goal.id = new Date().getTime() + (Math.random()*1000);
    //     return goal;
    //   })
    //   this.setState({goals: arr});
    // });
  }
  render() {
    return (
      <div className="App">
      <header><Link to='/'>Goals Dashboard</Link>
      <Link to='/aligned-goals'>See Aligned Goals</Link>
      </header>
        <Route exact path='/' render={()=>(
          <GoalsList goals={this.state.goals} saveGoals={this.saveGoals} deleteGoal={this.deleteGoal} />
        )} />
        <Route exact path='/create' render={()=>(
          <CreateGoals saveGoals={this.saveGoals} />
        )} />
        <Route exact path='/aligned-goals' render={()=>(
          <AlignedGoals />
        )} />
      </div>
    );
  }
}

export default App;