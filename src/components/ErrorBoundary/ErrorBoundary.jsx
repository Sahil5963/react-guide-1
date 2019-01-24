import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    state = ({
        error:false,
        errorMessage:''

    })

    componentDidCatch(error,info){
        this.setState({error:true , errorMessage:error});

    }


  render() {
    if(this.state.error){
        return <h1>{this.state.errorMessag}</h1>
    }
    else{
        return this.props.children;
    }
  }
}

export default ErrorBoundary
