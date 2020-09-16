import React, {Component} from 'react';
import './App.css';
import {CreateNewBike} from "./components/CreateNewBike";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {UserListRent} from "./components/UserListRent";
import {UserListAvailableBike} from "./components/UserListAvailableBike";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: "Click me!",
      additional: "", tamp: "",
      active: false
    }

    this.handlerClickBtn = this.handlerClickBtn.bind(this);
  }

  componentDidMount() {
    fetch("/")
        .then(res => res.text())
        .then(res => this.setState({additional: res, tamp: res}))
        .catch(err => err);
  }

  handlerClickBtn(){
    this.setState(() =>{
          if(this.state.active){
            return {
              text: "Click me!",
              active: !this.state.active,
              additional: this.state.tamp
            }
          }else{
            return {
              text: "Unclick me!",
              active: !this.state.active,
              additional: ""
            }
          }
    }
    );
  }


    render() {
    return (
        <Container>
          <h1>Awesome bike rental</h1>
          <form className="App" >
            <CreateNewBike />
          </form>
          <UserListRent/>
          <UserListAvailableBike/>
        </Container>
    );
  }
}

export default App;
