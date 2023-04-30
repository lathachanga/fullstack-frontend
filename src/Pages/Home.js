import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {
     
   const[todos,setTodos]=useState([]);
     
   useEffect(()=>{
      loadTodos();
   }, []);

   const loadTodos= async ()=>{
       const result= await axios.get("http://localhost:8080/todos");
       console.log(result.data);
       setTodos(result.data);
   };
   
   const deleteTodo=async (id)=>{
       await axios.delete(`http://localhost:8080/delete/${id}`)
       loadTodos()
   }


   return (
    <div className="container"> 
        <div className="py-4">
            <table className="table border shadow table-hover">
               <thead>
                   <tr>
                       <th scope="col">SNO</th>
                       <th scope="col">NAME</th>
                     
                       <th scope="col">DESCRIPTION</th>
                       <th scope="col">DATE</th>
                      
                       <th scope="col">ASSIGNTO</th>
                       <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                         /* todos.map((user,index)=>{
                           return  <tr>
                              <th scope="row" key={index}> {index+1}</th>
                                 <td>{user.name} </td>
                                
                                 <td>{user.description} </td>
                                 <td>{user.date} </td>
                                 
                                 <td>{user.assignTo} </td>
                               
                            </tr>
                            
                          })*/
                          Object.keys(todos).length > 0 ? 
                          <>
                           {
                              todos.map((todo,index)=>{
                                 return  <tr>
                                    <th scope="row" key={index}> {index+1}</th>
                                       <td>{todo.name} </td>
                                       <td>{todo.description} </td>
                                       <td>{todo.date} </td>
                                       <td>{todo.assignTo} </td>
                                       <td>
                                          <Link className="btn btn-outline-primary mx-2" to={`/editTodo/${todo.id}`}>Edit</Link>
                                          <button className="btn btn-outline-danger mx-2" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                       </td>
                                  </tr>
                                  
                                })
                           } 
                          </> : null
                     }
                       
                  </tbody>
           </table>
        </div>
    </div>
  )
}
