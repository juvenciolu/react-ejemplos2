import React,{Component} from 'react';
import Meme from './Meme';

class MemeContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'Name from state'
    }

  }
  render(){
    const name= this.state.name
    const name2= this.props.name
    return (
      <div>
      <Meme name={name}/>
      <Meme name={name2}/>
      </div>
    )
  }
}

export default MemeContainer;