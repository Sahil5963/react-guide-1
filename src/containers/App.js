import React, { PureComponent } from 'react';
import classes from './App.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log("[App.js] Constructor",props);
    this.state = {
      persons :[
        {id:'1', name:"Sahil", age:19},
        {id:'2', name:"Rohit", age:17},
        {id:'3', name:"Shanky", age:18}
      ],
      showPersons:false,
      toggleClicked:0,
    }
    this.inputElement = React.createRef();
    
  }
  

  // state = {
  //   persons :[
  //     {id:'1', name:"Sahil", age:19},
  //     {id:'2', name:"Rohit", age:17},
  //     {id:'3', name:"Shanky", age:18}
  //   ],
  //   showPersons:false,
  // }

  // switchNameHandler = (newName) =>{
  //   this.setState({
  //     persons:[
  //       {name:newName,age:30},
  //       {name:"Sahil",age:60},
  //       {name:"Shanky",age:18}
  //     ]
  //   })
  // }


  
  componentWillMount = () =>{
    console.log("[App.js] Will Mount");
  }

  componentDidMount = () =>{
    console.log("[App.js] Did Mount")
   
  }

  // componentWillReceiveProps = (nextProps) => {
  //   console.log('[Persons.js] Will Recieve Props',nextProps);
  // }  ------ Trigger Internaly

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[App.js] Should Component Update',nextProps,nextState);
  //   return nextState.persons !== this.state.persons||
  //          nextState.showPersons !== this.state.showPersons;
  // } ----------- Not Required When Using PURE COMPONENT

  componentWillUpdate(nextProps,nextState){
    console.log('[App.js] Component Will Update',nextProps,nextState);
  }
  
  componentDidUpdate(){
    console.log('[App.js] Component Did Update');

  }


  nameChangedHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons :persons});
  }

 
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow});

  //   this.setState({ 
  //     showPersons : !doesShow,
  //     toggleClicked:this.state.toggleClicked +1 });   --------BAD WAY IF RELYING ON PREV STATE
  // }

    this.setState((prevState,props) => ({ 
    showPersons : !doesShow,
    toggleClicked:prevState.toggleClicked +1 }) // ------- Mutating State Relying on Prev State
    );

  }


  render() {
    console.log("[App.js] Rendered")
    let person =null;
    

if(this.state.showPersons){
  person = 
    <Persons 
      persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangedHandler}
      inputRef={this.inputElement}
      />;

  /* <Person 
  name={this.state.persons[0].name} 
  age={this.state.persons[0].age} 
  />
  
  <Person 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age} 
  click={this.switchNameHandler.bind(this,'Max')} 
  changed={this.nameChangedHandler}
  />
  
  <Person 
  name={this.state.persons[2].name} 
  age={this.state.persons[2].age} 
  /> */


}


    return (
      // <WithClass classes={classes.A}>  -- CSS MODULES ENABLED
      <Aux>
      <button onClick={()=> this.setState({showPersons:true})}>Show Persons</button>
     <Cockpit 
     appTitle={this.props.title}
     persons={this.state.persons} 
     clicked={this.togglePersonsHandler}
     />
      {person}
      </Aux>
    );
  }
}

export default withClass([classes.App , classes.Red].join(" "))(App);


