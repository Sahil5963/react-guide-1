import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import withProp from '../../hoc/withProp'
import PropTypes from 'prop-types'

class Person extends Component {
	constructor(props){
        super(props);
        console.log("[Person.js] Constructor",props);
        }
        

      componentWillMount = () =>{
        console.log("[Person.js] Will Mount");
      }
    
      componentDidMount = () =>{
        console.log("[Person.js] Did Mount")
        
    }
    
    OnKeyUp = (e,target)=>{
      
        console.log(this.props.inputRef);

    }
    
	  
  render() {
    console.log("[Person.js] Render");
	return (
		<Aux>
    <p onClick={this.props.click}>Hey {this.props.name} and your age {this.props.age}</p>
    <input 
    type="text" 
    value={this.props.name} 
    onChange={this.props.changed}
    ref={this.props.inputRef}
    onKeyUp={(e) => this.OnKeyUp(e,this.props.id)}
    />
		</Aux>

    // <Aux>
    // <p onClick={this.props.click}>Hey {this.props.name} and your age {this.props.age}</p>
    // <input type="text" value={this.props.name} onChange={this.props.changed}/>
    // </Aux>

  );
  
  // return [
  //   <p key="1" onClick={this.props.click}>Hey {this.props.name} and your age {this.props.age}</p>,
	// 	<input key="2" type="text" value={this.props.name} onChange={this.props.changed}/>
  // ];
  
  }
}


Person.propTypes = {
  click:  PropTypes.func,
  name: PropTypes.string,
  age:  PropTypes.number,
  changed:  PropTypes.func

};



export default Person;