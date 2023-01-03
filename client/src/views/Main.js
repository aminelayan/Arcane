import axios from 'axios';
import React, { useState } from 'react'
import QuestionForm from '../components/QuestionForm';

const Main = () => {
    // const [question,setQuestion]=useState([])
    // const [errors,setErrors] = useState([])
    // const navigate = useNavigate()

    // const createQuestion = questions =>{
    //     axios.post('http://localhost:8000/api/questions',questions)
    //     .then(res =>{
    //         setQuestion([...question,res.data]);
    //         navigate('/')
    //     })
    //     .catch(err=>{
    //         const errorResponse = err.response.data.errors; 
    //         const errorArr = []; 
    //         for (const key of Object.keys(errorResponse)) { 
    //             errorArr.push(errorResponse[key].message)
    //         }
    //         setErrors(errorArr);
    //     })         
    // }
  return (
    <div>
        {/* <QuestionForm /> */}
    </div>
  )
}

export default Main;