import axios from 'axios';
import React, {Component} from 'react';
import SignUpinp from './SingUpinpComponent';

class SignUp extends Component{
    constructor(props){
    super(props);
    this.nameinpRef = React.createRef();
    this.emailinpRef = React.createRef();
    this.passwordinpRef = React.createRef();
    this.repasswordinpRef = React.createRef();
    this.mess = React.createRef();
    this.state = {
        name: '',
        email: '',
        password: '',
        repassword: '',
        }
    }
    submitHandler = (e) =>{
        e.preventDefault();
        const nameinpval = this.nameinpRef.current;
        const emailinpval = this.emailinpRef.current;
        const passinpval = this.passwordinpRef.current;
        const repassinpval = this.repasswordinpRef.current;
        const message = this.mess.current;
        let inps = [nameinpval, emailinpval, passinpval, repassinpval]
        if(!inps[0].getValue() || !inps[1].getValue() || !inps[2].getValue() || !inps[3].getValue()){
            message.innerHTML = "You must fill all inputs";
            for(let i = 0; i < inps.length; i++){
                inps[i].changeBorderHandler("2px dashed #797878");
            }
        } else if(passinpval.getValue() !== repassinpval.getValue()){
            message.innerHTML = "re type password must be same with password";
            for(let i = 0; i < inps.length; i++){
                if(inps[i] !== repassinpval) inps[i].changeBorderHandler("none");
                else inps[i].changeBorderHandler("2px dashed #797878")
            }
        } else {
            message.innerHTML = "";
            for(let i = 0; i < inps.length; i++){
                inps[i].changeBorderHandler("none");
            }
            this.setState({
                name: nameinpval.getValue(),
                email: emailinpval.getValue(),
                password: passinpval.getValue(),
                repassword: repassinpval.getValue() 
            })
            axios
            .post('https://244f84fe-979b-407f-9aca-0118152befa6.mock.pstmn.io/SignUp', this.state)
            .then((response)=>{
                if(response.status === 200){
                    message.innerHTML = `welcome ${this.state.name}`;
                }
            })
            .catch((err)=>{
                message.innerHTML = "we have a same error please try again";
            })
        }
    }
    render(){
        const t = this;
        return(
            <article className="signUp">
                <SignUpinp ref={t.nameinpRef} name="Uname" id="Username" type="text" HTMLFor="Username" lbl="Username"/>                
                <SignUpinp ref={t.emailinpRef} name="Email" id="Email" type="email" HTMLFor="Email" lbl="Email" />                
                <SignUpinp ref={t.passwordinpRef} name="Password" id="Password" type="password" HTMLFor="Password" lbl="Password" />                
                <SignUpinp ref={t.repasswordinpRef} name="Repass" id="Repass" type="password" HTMLFor="Repass" lbl="Re type password" /> 
                <span className="message" ref={t.mess}></span>
                <button className="btn" type="submit" onClick={t.submitHandler}>singup</button>
            </article>
        )
    }
}

export default SignUp;