import React from 'react';
import Getusers from "./GetApi/Getusers";
import Postusers from "./PostApi/Postusers";

class Container extends React.Component{
render(){
    return (
        <div className="ContainerContent">
                <div className="FirstContent">
                    <Getusers/>
                </div>
                
                <div className="SecondContent">
                    <Postusers/>
                </div>
        </div>
    );
  }
}
export default Container;
