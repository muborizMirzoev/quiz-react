import React, {useState} from 'react';
import './Quiz.css';
import {data} from "../../Api/data";
import Results from "../Results/Results";
import TopBar from "../TopBar/TopBar";
import {useDispatch, useSelector} from "react-redux";
import {ADD_ANSWER, CHECK_ANSWER} from "../../Redux/types";
import {addAnswer} from "../../Redux/actions";

function Quiz() {
   const dispatch = useDispatch();
   const userAnswers = useSelector(state => state.userAnswers);

   const [currentQuiz, setCurrentQuiz] = useState(0);
   const [disableButton, setDisableButton] = useState(true);
   const [showQuiz, setShowQuiz] = useState(true);

   function nextQuiz() {
      if ((currentQuiz + 1) < data.length) {
         setCurrentQuiz(currentQuiz + 1)
      } else {
         setShowQuiz(false)
      }

      setDisableButton(true)
   }

   function checkAnswer(event) {
      dispatch(addAnswer(event));
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

export default Quiz;
