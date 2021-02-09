import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App (){

  // const[question, setQuestion] = useState([])
  // const[score, setScore] = useState(0)
  // const[currentQuestion, setCurrentQuestion] = useState(0)

  return(
    <div>
    <Header/>
    <MainContent/>
    {/* <Footer/> */}
    </div>
  )

}
export default App