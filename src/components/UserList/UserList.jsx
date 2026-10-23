import { Component } from "react";

class UserList extends Component{
    render(){
        const {users,handleDel}=this.props;
        return <ul>{users.map(({id,name,age,email,isActive})=>{
            return <li key={id}>
                <h2>Name:{name}</h2>
                <p>Age:{age}</p>
                <p>Email:{email}</p>
                <p>Status:{isActive?"Online":"Offline"}</p>
                <button type="button" onClick={()=>handleDel(id)}>Delete</button>
            </li>
        })}</ul>
    }
}

export default UserList