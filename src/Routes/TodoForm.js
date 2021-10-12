import React from 'react'
import { useState } from 'react'
// import API_url from '../Services/API_url';
import postData from '../Services/postData';

const TodoForm = () =>{
    
    // const[todolist, setTodolist] = useState([]);
    const[todo,setTodo]=useState({
        name: ""
    });
    const {name}=todo;

    // useEffect(()=>{
    //     fetch(API_url+"/ctodo-list")
    //     .then(response=>response.json())
    //     .then(result=>{
    //       if(result.data && result.data.length){
    //         setTodolist(result.data)
    //       }
    //       console.log(result);

    //     })
        
    // },[]);
    const onChange =(key,value)=>{
        setTodo(prev=>(
            {
                ...prev,
                [key]:value
            }
        ))
    }

    const save_todo = (e)=>{
        e.preventDefault();
        postData("/create-todo",todo)
        .then(result=>{
            console.log(result);
        })
        console.log(todo)
    }
    

    return (
        <div className="login-section">
            <h1>Create Todos</h1>
            <form onSubmit={save_todo}>
                <div className="form-field">
                    <label>Add Todo</label>
                    <input type="text"
                        placeholder="Add Todo list "
                        value={name}
                        onChange={e => {onChange("name",e.target.value)}}
                    />
                    
                    <button type="submit">Add</button>
                    </div>
                
              
               
            </form>
        </div>
    )

}
export default TodoForm


