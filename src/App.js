import React, {useState} from 'react';
import './App.css';
import {data} from "./Api/data";
import Results from "./Components/Results";
import TopBar from "./Components/TopBar";

function App() {

   const [currentQuiz, setCurrentQuiz] = useState(0);
   const [userAnswers, setUserAnswers] = useState({});
   const [disableButton, setDisableButton] = useState(true);
   const [showQuiz, setShowQuiz] = useState(true)

   function nextQuiz() {
      if ((currentQuiz + 1) < data.length) {
         setCurrentQuiz(currentQuiz + 1)
      } else {
         setShowQuiz(false)
      }

      setDisableButton(true)
   }

   function checkAnswer(event) {
      const id = event.target.name;
      setUserAnswers(
         {
            ...userAnswers,
            [id]: {status: event.target.dataset.answer, id: event.target.dataset.id}
         }
      );
      setDisableButton(false)
   }

   const answers = data[currentQuiz].answers.map(answer => {
      return <li key={answer.id} className="quiz-question__answer">
         <label className="quiz-question__label">
            <input
               onChange={checkAnswer}
               className="quiz-question__input"
               type="radio"
               name={data[currentQuiz].id}
               value={answer.value}
               data-answer={answer.status}
               data-id={answer.id}/>
            <span className="quiz-question__input-text">{answer.value}</span>
         </label>
      </li>
   })
   return (
      <>
         <main className="content">
            <header className="header">
               <h1 className="header__title">Язык JavaScript</h1>
            </header>

            {showQuiz ? <section className="quiz">
                  <TopBar data={data} currentElement={currentQuiz}/>

                  <form action="#" id="quiz-form" onSubmit={event => event.preventDefault()}>
                     <div className="quiz-question">
                        <div className="quiz-question__body quiz-question-body" id="quiz-body">
                           <p className="quiz-question-body__title">{data[currentQuiz].question}</p>
                           <ul className="quiz-question__answers">{answers}</ul>
                        </div>
                        <div className="quiz-question__submit">
                           <button
                              onClick={nextQuiz}
                              className="button"
                              id="nextBtn"
                              type="submit"
                              disabled={disableButton}
                           >Продолжить
                           </button>
                        </div>
                     </div>
                  </form>
               </section>
               : <Results answers={userAnswers} data={data}/>}
         </main>
      </>
   );
}

export default App;
