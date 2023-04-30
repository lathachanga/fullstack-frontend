import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditTodo() {

    let navigate=useNavigate();

    const {id}=useParams()
    
    const [todo,setTodo]=useState({
         name:"",
         description:"",
         completed:"",
         assignTo:""
    })
    const{name,description,completed,assignTo}=todo;

    const onInputChange=(e)=>{
        setTodo({...todo,[e.target.name]:e.target.value});
    };
   
    useEffect(()=>{
        loadTodo();
    }, []);
    
    const onSubmit= async (e)=>{
         e.preventDefault();
        await axios.put(`http://localhost:8080/add/${id}`,todo)
        navigate("/");
    };

    const loadTodo=async ()=>{
        const result=await axios.get(`http://localhost:8080/todo/${id}`)
        setTodo(result.data);
    };
   return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Updating Todo</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type={"text"} className="form-control" placeholder="Enter the task" name="name" value={name} onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type={"text"} className="form-control" placeholder="Enter the description" name="description" value={description}  onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Completed" className="form-label">Completed</label>
                    <input type={"text"} className="form-control" placeholder="Enter the Name" name="completed" value={completed}  onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="AssignTo" className="form-label">AssignTo</label>
                    <input type={"text"} className="form-control" placeholder="Enter the Name" name="assignTo" value={assignTo}  onChange={(e)=>onInputChange(e)}/>
                </div>

                <button type="submit" className="btn btn-outline-success">Submit</button>
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
