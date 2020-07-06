import React from 'react';
import './Style/Style.sass';
// import Getusers from "./components/GetApi/Getusers";
import Container from "./components/Container";
import LoginContent from "./components/LoginContent"
import Header from "./components/Header"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      logined: false
    }
  }
  myFunc = () => {

  }
  componentDidMount(){
    if(localStorage.getItem("Login")){
      this.setState({
        logined: true
      })
    }else{
      this.setState({
        logined: false
      })
    }
    if(this.state.logined == true){
      window.location.reload()
    }
  }
  render(){
    return (
      <div className="App">
        <div className="AppContent">
          <Header/>
          {!this.state.logined && <LoginContent/>}
          {this.state.logined && <Container/>}
        </div>
      </div>
    );
  }
}
export default App;
