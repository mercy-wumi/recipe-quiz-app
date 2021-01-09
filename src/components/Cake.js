import React from 'react'

function Cake (props){
    return (
        <div>
            <div className="quiz-box">
                <div className="box">
                    <div className="question">
                    <p>{props.question}</p>
                    </div>
                    <div className="option">
                        <input type="radio" name="option" value="Rice" className="option-pick"/> {props.option_one} <br/>
                        <input type="radio" name="option" value="Rice" className="option-pick"/> {props.option_two} <br/>
                        <input type="radio" name="option" value="Rice" className="option-pick"/> {props.option_three} <br/>
                        <input type="radio" name="option" value="Rice" className="option-pick"/> {props.option_four} <br/>
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
            </div>
        </div>
    )
}

export default Cake