import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import './Topic.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Topic = ({ quest }) => {
    const { question, options, id, correctAnswer } = quest;
    const [count, setCount] = useState()
    const showAnswer = (id) => {
        setCount(correctAnswer)
    }

    const [quizInfo, setQuizInfo] = useState([])
    const handleChange = (event) => {
        const { value, checked } = event.target
        if (checked) {
            setQuizInfo(value)
        }
    }

    const handleBtn = () => {

        if (quizInfo === correctAnswer) {
            toast('write  answer')

        }
        else {
            toast('wrong')
        }
    }
    return (
        <div>
            <div className='flex justify-center'>

                <div className='bg-black-200 w-full quiz-sec rounded-lg bg-red-300 m-5 p-10'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='md:lg:text-2xl'>{question}?</h1>
                        </div>
                        <div>
                            <button onClick={() => showAnswer(id)}>
                                <FaEye className='text-xl mx-5'></FaEye>
                            </button>
                        </div>
                    </div>
                    {
                        options.map((option) =>
                            <form className=' m-10 border-2 flex justify-center align-middle h-30 p-5 hover:bg-green-600'>
                                <input onClick={handleChange} className='mx-4 h-6 w-20 input-field' type="checkbox" name='option' value={option} id="input-field" />
                                <label className='' for='option'> {option}</label>
                            </form>


                        )
                    }
                    <button onClick={handleBtn} className=' bg-sky-500 px-8 py-2 rounded'>Next</button>
                    <ToastContainer                      position="top-center"
                        autoClose={5000}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light">

                    </ToastContainer>
                </div>
            </div>
            <h1 className='text-xl'>Correct Answer is: <span className='text-red-700'>{count}</span></h1>

        </div>
    );
};

export default Topic;