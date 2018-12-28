import React, { Component,Fragment } from 'react';
import SingleItem from './SingleItem'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputEvent:'',
      eventList:[]
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label>Please enter your events:</label>
          <input 
          value={this.state.inputEvent}
          onChange={(e)=>{this.setState({inputEvent:e.target.value})}}
          >
          </input>
          <button
          onClick={(e)=>{
            this.setState(
              {
                //copy previous list and add a new value
                eventList:[...this.state.eventList,this.state.inputEvent],
                inputEvent:'' //init the inputbox
              }
              )}}
          >Create</button>
        </div>
        <ul>
          {this.state.eventList.map((item,index)=>{
            return (<SingleItem 
              eventName={item} 
              index={index}
              eventDelete={this.eventDelete.bind(this)}/>)
          })}
        </ul>
      </Fragment>
    );
  }
eventDelete(index){
  const newList=[...this.state.eventList];
  newList.splice(index,1);
  this.setState({
    eventList:newList
  })
}

}

export default App;
