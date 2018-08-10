import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomcounter: 1,
      adultcount: 1,
      childcount: 0,
      roomAddButton_isDisabled: false,
      adultAddButton_isDisabled:false,
      message:''
    };
  }

  addRoomCounter = (roomcounter,message) => {

    if(message === "capacity full.Increse number of room"){
      this.setState({
        adultAddButton_isDisabled:false
      })
    }

    if (roomcounter >= 4) {
      this.setState({
        roomcounter: roomcounter + 1,
        roomAddButton_isDisabled: true,
        message:""
      });
    } else {
      this.setState({
        roomcounter: roomcounter + 1,
        roomAddButton_isDisabled: false,
        message:""
      });
    }
  };

  reduceRoomCounter = roomcounter => {
    if (roomcounter < 2) {
      this.setState({
        roomcounter: 1
        // isDisabled : false
      });
    } else {
      this.setState({
        roomcounter: roomcounter - 1,
        roomAddButton_isDisabled: false,
        childcount:0
      });
    }
  };

  addAdultCounter = (adultcount, childcount,roomcounter) => {
    var chkStatus = this.checkCount(adultcount, childcount,roomcounter);

    console.log(chkStatus);

    if(chkStatus){
      if (adultcount >= 4) {
        this.setState({
          adultcount: adultcount + 1
        });
      } else {
        this.setState({
          adultcount: adultcount + 1
        });
      }
    }else{
      this.setState({
        message:"capacity full.Increse number of room",
        adultAddButton_isDisabled:true
      })
    }

    
  };

  checkCount = (adultcount, childcount,roomcounter) => {
    let maxRoomCapacity;

    if(roomcounter === 1){
      maxRoomCapacity = 4
    }else if(roomcounter === 2){
      maxRoomCapacity = 8 
    }else if(roomcounter === 3){
      maxRoomCapacity = 12
    }else if(roomcounter === 4){
      maxRoomCapacity = 16
    }else{
      return null
    }

   // alert("checkcount", adultcount, childcount);
    console.log(adultcount, childcount);

    if (maxRoomCapacity > adultcount + childcount) {
      return true;
    } else {
      return false;
    }
  };

  reduceAdultCounter = (adultcount, childcount) => {
    if (adultcount < 2) {
      this.setState({
        adultcount: 1,
        adultAddButton_isDisabled:false
      });
    } else {
      this.setState({
        adultcount: adultcount - 1,
        adultAddButton_isDisabled:false,
        message:"",
      });
    }
  };

  addChildCounter = (childcount, adultcount,roomcounter) => {
    // this.checkCount(adultcount,childcount)

    var chkStatus = this.checkCount(adultcount, childcount,roomcounter);

    console.log(chkStatus);

    if(chkStatus){
      if (childcount >= 4) {
        this.setState({
          childcount: childcount + 1
          //  isDisabled : true
        });
      } else {
        this.setState({
          childcount: childcount + 1
          //  isDisabled : false
        });
      }
    }else{
      this.setState({
        message:"capacity full.Increse number of room",
        adultAddButton_isDisabled:true
      })
    }

   
  };

  reduceChildCounter = (childcount, adultcount) => {
    if (childcount < 1) {
      this.setState({
        childcount: 0
        // isDisabled : false
      });
    } else {
      this.setState({
        childcount: childcount - 1,
        //   isDisabled : false
        message:"",
      });
    }
  };

  render() {
    let { roomcounter, adultcount, childcount, roomAddButton_isDisabled ,message ,adultAddButton_isDisabled } = this.state;
    return (
      <div>
        <span>
          <i class="fa fa-group" color="grey" />
          Choose the number of people
        </span>
        <div className="hotelApp">
          <div className="block">
            <i class="fa fa-bed" color="red" />
            <span>Rooms {roomcounter}</span>

            <button
              onClick={() => this.addRoomCounter(roomcounter,message) }
              disabled={roomAddButton_isDisabled}
            >
              Add
            </button>
            <button onClick={() => this.reduceRoomCounter(roomcounter)} >
              Reduce
            </button>

            <span>{message}</span>

            <br />

            <div className="dash" />
          </div>

          <div className="block">
            <i class="fa fa-male" color="grey" />
            <span>Adult {adultcount}</span>

            <button
              onClick={() => this.addAdultCounter(adultcount, childcount,roomcounter)}
              disabled = {adultAddButton_isDisabled}
            >
              Add
            </button>
            <button
              onClick={() => this.reduceAdultCounter(adultcount, childcount)}
            >
              Reduce
            </button>

            <br />

            <div className="dash" />
          </div>

          <div className="block">
            <i class="fa fa-child" color="grey" />
            <span>Children {childcount}</span>

            <button
              onClick={() => this.addChildCounter(childcount, adultcount,roomcounter)}
            >
              Add
            </button>
            <button
              onClick={() => this.reduceChildCounter(childcount, adultcount)}
            >
              Reduce
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
