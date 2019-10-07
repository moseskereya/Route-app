import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
// import Reveal from 'react-reveal/Reveal';
import Rotate from 'react-reveal/Rotate';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img:"https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
    }
    render() { 
        return ( 
            <div className="App-Content">
                <h3>home page</h3>
                    <div className="Img">
                <Rotate to left>
                    <img src={this.state.img} alt=""/>
                <img src="https://images.pexels.com/photos/2089379/pexels-photo-2089379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <img src="https://images.pexels.com/photos/461490/pexels-photo-461490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </Rotate>
                <img src="https://images.pexels.com/photos/2915997/pexels-photo-2915997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
               <Slide left>
                <img src="https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <img src="https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </Slide>
                <Slide to right>
                <img src="https://images.pexels.com/photos/795188/pexels-photo-795188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <img src="https://images.pexels.com/photos/268633/pexels-photo-268633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </Slide>
            </div>

            </div>
         );
    }
}
 
export default App1;