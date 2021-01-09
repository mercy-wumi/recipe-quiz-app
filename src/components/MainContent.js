import React from 'react'
import Cake from './Cake'
import cakeQuiz from '../cakeQuiz'

function MainContent (){

    const questions = cakeQuiz.map((question)=> 
    <Cake
    key = {question.id}
    question = {question.question}
    option_one = {question.option_one}
    option_two = {question.option_two}
    option_three = {question.option_three}
    option_four = {question.option_four}
    />)
    return(
        <main>
            {questions}
            {/* <div className="quiz-box">
                <div className="box">
                    <div className="question">
                    <p>Which of the following is not an ingredient of Jollof Rice?</p>
                    </div>
                    <div className="option">
                        <input type="radio" name="option" value="Rice" className="option-pick"/> Rice <br/>
                        <input type="radio" name="option" value="Rice" className="option-pick"/> Pepper <br/>
                        <input type="radio" name="option" value="Rice" className="option-pick"/> Flour <br/>
                        <input type="radio" name="option" value="Rice" className="option-pick"/> Oil <br/>
                    </div>
                    <div className="btn">
                        <div className="p-btn">
                        <input type="button" value="Previous"/>
                        </div>
                        <div className="n-btn">
                        <input type="button" value="Next"/>
                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    )
}

export default MainContent