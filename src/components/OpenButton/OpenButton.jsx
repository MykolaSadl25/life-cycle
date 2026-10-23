import { Component } from "react";
import style from "./OpenButton.module.css"
class OpenButton extends Component{
    render(){
        const {openModal}=this.props;
        return(
            <button onClick={openModal} className={style.button} type="button">Open modal</button>
        )
    }
}

export default OpenButton