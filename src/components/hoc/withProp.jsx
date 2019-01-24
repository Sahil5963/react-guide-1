import React , {Component} from 'react';

// const withClass =  (WrapperComponent,className) => {
//             return (props) =>
//                 <div className={className}>
//                 <WrapperComponent {...props}/>
//                 </div>
// }

const withProp = (propName) => (WrapperComponent) => {

    return class extends Component{
        render(){
            return(
                // this.props.? ? <WrapperComponent/> : <div>Loading </div> 
                 <WrapperComponent { ...this.props }/>
            )
        }

    }  

}





export default withProp;