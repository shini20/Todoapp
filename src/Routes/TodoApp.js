import {useEffect,useState} from 'react';




const TodoApp = ({history}) => {
    const[TodoappList,setTodoappList] = useState([])

    
    useEffect(()=>{
          
        fetch("http://localhost:5000/api/v1/todo-list")
        .then(response=>response.json())
            .then(result=>{
                setTodoappList(result)})},
            
            [])

    const logOut=()=>{
        localStorage.removeItem("token");
        history.push("/login");

        
        
    }

            
    return (  
        <>
        <div className="my-todo">
            My Todo
        </div>
        <div className="input-todo">
            {TodoappList.map((recipe,i)=>(
                <div key={i}>
                    
                    <input type="checkbox" name="my-checkbox" id="opt-in"/>
                    <label htmlFor="opt-in">{recipe.name}</label>
                    <div className="btn">
                    <button className="btn">Delete</button>
                    </div>
                </div>
            ))}
            <button onClick={logOut}>Logout</button>
        </div>

        
    </>
)
}
  

export default TodoApp
