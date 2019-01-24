import React, { PureComponent } from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import withProp from '../hoc/withProp'

class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log("[Persons.js] Constructor",props); 
        this.state ={
          id:'001'
        }
        }

      componentWillMount = () =>{
        console.log("[Persons.js] Will Mount");
      }
    
      componentDidMount = () =>{
        console.log("[Persons.js] Did Mount");
      }

      componentWillReceiveProps = (nextProps) => {
        console.log('[Persons.js] Will Recieve Props',nextProps);
      }
      
      // shouldComponentUpdate(nextProps,nextState){
      //   console.log('[Persons.js] Should Component Update',nextProps,nextState);
      //   return nextProps.persons !== this.props.persons || 
      //          nextProps.clicked !== this.props.clicked ||
      //          nextProps.changed !== this.props.changed;
      // } ------------- Not Required When Using PURE COMPONENT

      componentWillUpdate(nextProps,nextState){
        console.log('[Persons.js] Component Will Update',nextProps,nextState);
      }
      
      componentDidUpdate(){
        console.log('[Persons.js] Component Did Update');
      }

  render() {
    console.log("[Persons.js] Render");
    return (
        this.props.persons.map((person,index) => 

          <Person 
          click={(this.props.clicked.bind(this.props,index))} 
          name={person.name} 
          age={person.age}
          changed={(event) => this.props.changed(event,person.id)}
          key={person.id}
          position={index}
          inputRef={this.props.inputRef}
          ></Person> )

        // <ErrorBoundary key={person.id}> 
        //   <Person 
        //   click={(this.props.clicked.bind(this.props,index))} 
        //   name={person.name} 
        //   age={person.age}
        //   changed={(event) => this.props.changed(event,person.id)}
        //   id={person.id}
        //   ></Person> 
        // </ErrorBoundary>)
    );
    
  }
}

export default withProp('changed')(Persons);
