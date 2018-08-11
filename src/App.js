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
      adultAddButton_isDisabled: false,
      message: ""
    };
  }

  addRoomCounter = (roomcounter, message) => {
    if (message === "Room capacity full.Increse number of room") {
      this.setState({
        adultAddButton_isDisabled: false
      });
    }

    if (roomcounter >= 4) {
      this.setState({
        roomcounter: roomcounter + 1,
        roomAddButton_isDisabled: true,
        message: ""
      });
    } else {
      this.setState({
        roomcounter: roomcounter + 1,
        roomAddButton_isDisabled: false,
        message: ""
      });
    }
  };

  reduceRoomCounter = roomcounter => {
    console.log(roomcounter);

    let forcedAdultCount;

    debugger

    if (roomcounter === 5) {
      forcedAdultCount = 16;
    } else if (roomcounter === 4) {
      forcedAdultCount = 12;
    } else if (roomcounter === 3) {
      forcedAdultCount = 8;
    } else if (roomcounter === 2) {
      forcedAdultCount = 4;
    }

    if (roomcounter < 2) {
      this.setState({
        roomcounter: 1
        // isDisabled : false
      });
    } else {
      this.setState({
        roomcounter: roomcounter - 1,
        roomAddButton_isDisabled: false,
        childcount: 0,
        adultcount: forcedAdultCount
      });
    }
  };

  addAdultCounter = (adultcount, childcount, roomcounter) => {
    var chkStatus = this.checkCount(adultcount, childcount, roomcounter);

    console.log(chkStatus);

    if (chkStatus) {
      if (adultcount > 4) {
        this.setState({
          adultcount: adultcount + 1
        });
      } else {
        this.setState({
          adultcount: adultcount + 1
        });
      }
    } else {
      this.setState({
        message: "Room capacity full.Increse number of room",
        adultAddButton_isDisabled: true
      });
    }
  };

  checkCount = (adultcount, childcount, roomcounter) => {
    let maxRoomCapacity;

    if (roomcounter === 1) {
      maxRoomCapacity = 4;
    } else if (roomcounter === 2) {
      maxRoomCapacity = 8;
    } else if (roomcounter === 3) {
      maxRoomCapacity = 12;
    } else if (roomcounter === 4) {
      maxRoomCapacity = 16;
    } else if(roomcounter === 5){
      maxRoomCapacity = 20;
    } else{
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
        adultAddButton_isDisabled: false
      });
    } else {
      this.setState({
        adultcount: adultcount - 1,
        adultAddButton_isDisabled: false,
        message: ""
      });
    }
  };

  addChildCounter = (childcount, adultcount, roomcounter) => {
    // this.checkCount(adultcount,childcount)

    var chkStatus = this.checkCount(adultcount, childcount, roomcounter);

    console.log(chkStatus);

    if (chkStatus) {
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
    } else {
      this.setState({
        message: "Room capacity full.Increse number of room",
        adultAddButton_isDisabled: true
      });
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
        message: "",
        adultAddButton_isDisabled: false
      });
    }
  };

  render() {
    let {
      roomcounter,
      adultcount,
      childcount,
      roomAddButton_isDisabled,
      message,
      adultAddButton_isDisabled
    } = this.state;
    return (
      <div className = "app">
        <span>
          <i class="fa fa-group" color="grey" />
          Choose the number of people
        </span>
        <div className="hotelApp">
          <div className="block">
            <i class="fa fa-bed" color="red" />
            <span>Rooms </span>

            <button
              onClick={() => this.addRoomCounter(roomcounter, message)}
              disabled={roomAddButton_isDisabled}
              className="add"
            >
              <i className="fa fa-plus" />
            </button>

            <span>{roomcounter}</span>
            <button
              onClick={() => this.reduceRoomCounter(roomcounter)}
              className="reduce"
            >
              <i className="fa fa-minus" />
            </button>

            <br />
            <span className="message">{message}</span>

            <br />

            <div className="dash" />
          </div>

          <div className="block">
            <i class="fa fa-male" color="grey" />
            <span>Adult </span>

            <button
              onClick={() =>
                this.addAdultCounter(adultcount, childcount, roomcounter)
              }
              disabled={adultAddButton_isDisabled}
              className="add"
            >
              <i className="fa fa-plus" />
            </button>

            <span>{adultcount}</span>

            <button
              onClick={() => this.reduceAdultCounter(adultcount, childcount)}
              className="reduce"
            >
              <i className="fa fa-minus" />
            </button>

            {/* <br /> */}

            <div className="dash" />
          </div>

          <div className="block">
            <i class="fa fa-child" color="grey" />
            <span>Children </span>

            <button
              onClick={() =>
                this.addChildCounter(childcount, adultcount, roomcounter)
              }
              className="add"
            >
              <i className="fa fa-plus" />
            </button>

            <span>{childcount}</span>

            <button
              onClick={() => this.reduceChildCounter(childcount, adultcount)}
              className="reduce"
            >
              <i className="fa fa-minus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
