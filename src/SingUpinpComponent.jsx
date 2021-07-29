import React, { Component } from "react";

class SignUpinp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      id: "",
      name: "",
      HTMLFor: "",
      lbl: "",
      value: "",
      ref: React.createRef()
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      type: props.type,
      id: props.id,
      name: props.name,
      HTMLFor: props.HTMLFor,
      lbl: props.lbl,
    };
  }
  changeHandler = (e) =>{
    this.setState({
        value: e.target.value
    });
    this.state.ref.current.style.border = "none";
  }
  getValue = () =>{
    return this.state.ref.current.value;
  }
  changeBorderHandler = (color) =>{
    this.state.ref.current.style.border = color;
  }
  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <label className="lbl" htmlFor={this.state.HTMLFor}>
          {this.state.lbl}:
        </label>
        <input
          value={this.state.value}
          className="inp"
          type={this.state.type}
          id={this.state.id}
          name={this.state.name}
          onChange={this.changeHandler}
          ref={state.ref}
        />
      </React.Fragment>
    );
  }
}
export default SignUpinp;
