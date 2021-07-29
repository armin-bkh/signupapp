import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hassError: false,
            child: ''
        }
    }
    static getDerivedStateFromError(err){
        return{hassError: true}
    }
    static getDerivedStateFromProps(props, state){
        return{child: props.children}
    }
    render(){
        const state = this.state;
        if(state.hassError){
            return(
                <h1>We have a error here</h1>
            )
        }
        return( state.child )
    }
}
export default ErrorBoundary;