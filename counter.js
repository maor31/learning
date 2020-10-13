import React,{Component} from 'react';

class counter extends Component{
    state = {myDate:"2027-06-06" ,days:999};


    componentDidMount(){
        var daysLeft = this.calcDaysFromDate(this.props.appDate2)   
        
        this.setState({days:daysLeft}); 
    }        

    componentDidUpdate(_props,_state){
        if(this.props.appDate2 != _props.appDate2){
            var daysLeft = this.calcDaysFromDate
            (this.props.appDate2);
            this.setState({days:daysLeft});
        }
    
   }     

    calcDaysFromDate(_date){
        var time = Date.parse(_date) - Date.parse(new Date());
        var days = time / (1000 * 60 * 60 * 24);
        return Math.floor(days) 
    }

    render(){

        return(
            <div>
             <h2>Count down to {this.props.appDate2 }</h2>     
            <h3>Days: {this.state.days}</h3>        
            </div> 
        )    
    }    
}

export default counter;