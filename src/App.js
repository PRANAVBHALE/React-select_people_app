import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomcounter: 1,
      adultcount: 1,
      childcount: 0,
      isDisabled : false
    };
  }

  addRoomCounter = roomcounter => {

    if(roomcounter >= 4){
      this.setState({
        roomcounter: roomcounter + 1,
        isDisabled : true   
      });
    }else{
      this.setState({
        roomcounter: roomcounter + 1,
        isDisabled : false   
      });
    }

   
  };

  reduceRoomCounter = roomcounter => {

    if(roomcounter  < 2 ){
      this.setState({
        roomcounter: 1,
       // isDisabled : false   
      });
    }else{
      this.setState({
        roomcounter: roomcounter - 1,
        isDisabled : false   
      });
    }
   
  };

  addAdultCounter = adultcount => {

    if(adultcount >= 4){
      this.setState({
        adultcount: adultcount + 1,
      });
    }else{
      this.setState({
        adultcount: adultcount + 1,
      });
    }

   
  };

  reduceAdultCounter = adultcount => {

    if(adultcount  < 2 ){
      this.setState({
        adultcount: 1,
       // isDisabled : false   
      });
    }else{
      this.setState({
        adultcount: adultcount - 1,
        //isDisabled : false   
      });
    }
   
  };

  addChildCounter = childcount => {

    if(childcount >= 4){
      this.setState({
        childcount: childcount + 1,
      //  isDisabled : true   
      });
    }else{
      this.setState({
        childcount: childcount + 1,
      //  isDisabled : false   
      });
    }

   
  };

  reduceChildCounter = childcount => {

    if(childcount  < 1 ){
      this.setState({
        childcount: 0,
       // isDisabled : false   
      });
    }else{
      this.setState({
        childcount: childcount - 1,
     //   isDisabled : false   
      });
    }
   
  };

  render() {
    let { roomcounter, adultcount, childcount ,isDisabled } = this.state;
    return (
      <div>
        <span>
          <i class="fa fa-group" color ="grey" />
          Choose the number of people
        </span>
        <div className="hotelApp">
          <div className = "block">
            <i class="fa fa-bed" color ="red" />
            <span>Rooms {roomcounter}</span>

            <button onClick={() => this.addRoomCounter(roomcounter)} disabled = {isDisabled}>Add</button>
            <button onClick={() => this.reduceRoomCounter(roomcounter)}>
              Reduce
            </button>

            <br />

            <div className = "dash" ></div>
          </div>

          <div className = "block">
            <i class="fa fa-male" color ="grey" />
            <span>Adult {adultcount}</span>

            <button onClick={() => this.addAdultCounter(adultcount)}>Add</button>
            <button onClick={() => this.reduceAdultCounter(adultcount)}>
              Reduce
            </button>

            <br />

             <div className = "dash" ></div>
          </div>

          <div className = "block">
            <i class="fa fa-child" color ="grey" />
            <span>Children {childcount}</span>

            <button onClick={() => this.addChildCounter(childcount)}>Add</button>
            <button onClick={() => this.reduceChildCounter(childcount)}>
              Reduce
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
