import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img1:"https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         }
    }
    render() { 
        return ( 
            <div className="Gall">
               <h3>Gallery page</h3> 
               <img className="img-2" src={this.state.img1} alt=""/>
            </div>
         );
    }
}
 
export default Contact;