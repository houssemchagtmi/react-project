import React, { Component } from 'react'
import Appcomp from './Appcomp'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"
export default class Buton extends Component {
    state={
        show: false
    }

    toggle() {
        this.setState({show: !this.state.show})
    }
    render() {
        
        return (
            <div>
                  <Button onClick={() => this.toggle()} variant="danger"> {this.state.show ? "HIDE" : "SHOW"}</Button> 

                {this.state.show ? <Appcomp/> : null}
            </div>
        )
    }
}
