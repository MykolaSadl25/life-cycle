import { Component } from "react";
import "./App.css"
import UserList from "./components/UserList/UserList";
import OpenButton from "./components/OpenButton/OpenButton";
import Modal from "./components/Modal/Modal";
import data from "./users.json"
class App extends Component{

  state={
    users: data,
    isOnScreen:false,
  }
  componentDidMount(){

    let saveData = window.localStorage.getItem("users");
    if (saveData) {
      this.setState({
        users:JSON.parse(saveData)
      })
    }
  }

  componentDidUpdate(_,prevState){
    if (prevState.users.length !== this.state.users.length) {
      window.localStorage.setItem("users",JSON.stringify(this.state.users))
    }
  }

  handleFormSubmit = (data)=>{
    this.setState((prev)=>({users:[...prev.users,data]}))
  }

  handleToggle = () =>{
    this.setState((prev)=>({isOnScreen:!prev.isOnScreen}))
  }

  handleDelete = (id)=>{
    this.setState((prev)=>({users:prev.users.filter(user=>user.id!==id)}))
  }
  render(){
    const {users,isOnScreen}=this.state;
    return(
      <>
      <OpenButton openModal={this.handleToggle}/>
      <UserList users={users} handleDel={this.handleDelete}/>
      {isOnScreen && <Modal onForm={this.handleFormSubmit} closeModal={this.handleToggle}/>}
      </>
    )
  }
}

export default App