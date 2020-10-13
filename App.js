import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import counter from "./compus/counter"
import UserInput from './compus/usrerinput';

class App extends Component{
   state = {myDate:"2089-06-06", daysDif: 0}

   changeDate = (_val) => {
     //this.state.myDate = "2023-01-05";
     //this.forceUpdate();
    //  alert(this.refs.id_input.value)
    let date = new Date(_val)
    let time = date.getTime();
    let difTime = time - Date.now();
    let day = 1000 * 60 * 60 * 24;
    let daysDif = Math.ceil(difTime / day);
    console.log('daysDif',daysDif);
     this.setState({myDate:_val, daysDif: daysDif}) 
   } 

  render(){
    return(
     <div className="App">
      <counter appDate2={this.state.myDate}></counter> 
      <h2>Count down to {this.state.myDate}</h2>
      <h3>Days: {this.state.daysDif}</h3>
      {/* נשים את זה בהמשך בקומפוננטה נפרדת */}
      <UserInput chengeDateApp={this.changeDate}></UserInput>
      {/* <input ref="id_input" type="date" defaultValue="2028-11-27"/> */}
      {/* <button onClick={this.changeDate} className="btn btn-success">change</button> */}
    </div>  
  )              
}
}

export default App;
