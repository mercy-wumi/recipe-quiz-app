import React, {useState} from 'react'
import Cake from './Cake'
import cakeQuiz from '../cakeQuiz'


function MainContent (){

    // const[question, setQuestion] = useState([])
    const[showScore, setShowScore] = useState(false)
    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[score, setScore]= useState(0)
    const[answer, setAnswer]= useState("")
    const[checkAns, setCheckAns]= useState("")
    // const[]


    return(
        <main>
        <Cake
            currentQuestion={currentQuestion}
            setCurrentQuestion = {setCurrentQuestion}
            // question ={question}
            // setQuestion = {setQuestion}
            score = {score}
            setScore = {setScore}
            showScore= {showScore}
            setShowScore={setShowScore}
            answer= {answer}
            setAnswer={setAnswer}
            checkAns={checkAns}
            setCheckAns={setCheckAns}
        />
        </main>
    )
}

export default MainContent