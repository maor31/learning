import React,{Component} from 'react';

class UserInput extends Component{

    changeDate3 = () => {
        this.props.chengeDateApp(this.refs.id_input.value);
    }
    
    render(){
        return(
            <div>
                <input ref="id_input" type="date" defaultValue="2028-11-27"/>
      <button onClick={this.changeDate3} className="btn btn-success">change</button>
                UserINPUT work
            </div> 
        )    
    }    
}

export default UserInput;