import React, { Component } from "react";
import UserService from "../services/user.service";

import {
  BsTwitter,
  BsFillHddNetworkFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

export default class FooterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }
  render() {
    return (
      <div className="footer">
        <div className="c1">
          Made with &hearts; By Avnish
          <a className="fa" href="https://twitter.com/avnishy84">
            <BsTwitter />
          </a>
          <a className="fa" href="https://www.linkedin.com/in/avnishy84/">
            <BsLinkedin />
          </a>
          <a className="fa" href="https://github.com/avnishy">
            <BsGithub />
          </a>
          <a className="fa" href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          </div>
          <div className="c2"> <BsFillHddNetworkFill/> {this.state.content}</div>
      </div>
    );
  }
}
