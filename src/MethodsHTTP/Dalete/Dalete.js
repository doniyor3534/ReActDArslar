import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Dalete = () => {
    const [update,setUpdate]=useState([])
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then((res)=>{setUpdate(res.data) 
                           console.log(res.data)})
             .catch((err)=>console.error(err))
    },[])
    const deletrequest=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
              setUpdate(null)
              alert('sssssssssssss')
    }
    if(!update){
        return 'not found'
    }
    return (
        <div>
            <h1>{update.user}</h1>
            <h1>{update.title}</h1>
            <h3>{update.body}</h3>
            <button onClick={deletrequest}>delete</button>
        </div>
    );
};

export default Dalete;