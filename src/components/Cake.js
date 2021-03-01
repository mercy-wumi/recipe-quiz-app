import React from 'react'
// import Score from './Score'
import cakeQuiz from '../cakeQuiz'

function Cake (props){

    const handleNextClick= () => {
        const nextQuestion = props.currentQuestion + 1;
        if (nextQuestion < cakeQuiz.length) {
            props.setCurrentQuestion(nextQuestion)
        }
        else{
            props.setShowScore(true)
        }
        props.setAnswer("");
    }
    const handlePreviousClick= () => {
        const nextQuestion = props.currentQuestion - 1;
        props.setCurrentQuestion(nextQuestion);
        props.setAnswer("");
    }
    const handleChange= (event) => {
        const myAnswer= props.setAnswer(event.target.value)             
        const checkAnswer = cakeQuiz[props.setCheckAns].quizAnswer
        console.log(checkAnswer)
        if(myAnswer === checkAnswer){
            // alert('the answer is incorrect')
            console.log(checkAnswer)
            props.setScore(props.score + 1)
        }
        }
    return (
        <div>
        {props.showScore ? (
            <div className="quiz-box">You scored {props.score} out of {cakeQuiz.length}</div>
            ) : (
                <>
            <div className="quiz-box">
                <div className="box">
                    <div className="question">
                    <p>{cakeQuiz[props.currentQuestion].question}</p>
                    </div>
                    <div className="option"> 
                        {cakeQuiz[props.currentQuestion].answerOption.map((answerOptions) => (
                        <div>
                        <label>
                        <input type="radio" name="option" value={answerOptions.options} className="option-pick" onChange={handleChange}/>
                        {answerOptions.options}
                        </label>
                        </div>
                        ))}
                    </div>
                    <div className="btn">
                        <div className="p-btn">
                        <button onClick={handlePreviousClick}>Previous</button>
                        </div>
                        <div className="n-btn">
                        <button onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                    <div>
                        {cakeQuiz.quizAnswer}
                    </div>
                </div>
            </div>
            </>
        )}
        </div>
    )
}

export default Cake