import { Component } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const modal = document.getElementById("modal");
class Modal extends Component {

    state={
        name:"",
        age:"",
        email:"",
    }
  componentDidMount() {
    console.log(" Modal component did mount");
    window.addEventListener("keydown", this.handleCloseOnEsc);
  }

  componentWillUnmount() {
    console.log("Modal component unmounted(");
    window.removeEventListener("keydown", this.handleCloseOnEsc);
  }

  handleCloseOnEsc = (evt) => {
    if (evt.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleCloseOnBackdrop = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

  handleInput=(evt)=>{
    const {name,value}=evt.target
    this.setState({
        [name]:value,
    })
  }

  render() {
    const { closeModal } = this.props;
    const {name,age,email}=this.state;
    console.log(this.state);
    
    return createPortal(
        
      <div className={style.backdrop} onClick={this.handleCloseOnBackdrop}>
        <div className={style.modal}>
          <form className={style.form}>
            <button onClick={closeModal} type="button" className={style.close}>X</button>
            <input value={name} onChange={this.handleInput} type="text" name="name" placeholder="Enter their name" />
            <input value={age} onChange={this.handleInput} type="number" name="age" placeholder="Enter their age" />
            <input value={email} onChange={this.handleInput} type="email" name="email" placeholder="Enter their email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>,
      modal,
    );
  }
}

export default Modal;
