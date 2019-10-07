import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"FirstName",
            surName:"SurName",
            Language:"https://media.istockphoto.com/photos/american-flag-textile-close-up-picture-id540983048?k=6&m=540983048&s=612x612&w=0&h=PFUMyunR23dd6BTdSbQAd00H85l22MxpJ9nQBcFkYsM="
         }
        this.handleChange = this.handleChange.bind(this)
        this.chageSurname = this.chageSurname.bind(this)
    }

    handleChange(e){
        this.setState({
            name:e.target.value
        })
    }

    chageSurname(e){
        this.setState({
            surName:e.target.value
        })
    }

    render() { 
        return ( 
            <div className="Contact">
               <h3>Contact page</h3> 
               <div className="App-form">
               <div className="App-inner">
               <input type="" name="" 
               value={this.state.name}
               onChange={this.handleChange}/>
               <br/>
               <input type="" name="" 
               onChange={this.chageSurname}
               value={this.state.surName}/>
               <br/>
               <span>Language</span>
               <br/>
                   <img className="img"
               src={this.state.Language} alt=""/>
               <br/>
               <button type="">Submit</button> 
               </div>
           </div>
            </div>
         );
    }
}
 
export default Contact;