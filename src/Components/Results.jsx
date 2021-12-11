import React from 'react';
import Indicator from "./Indicator";
import ResultQuestions from "./ResultQuestions";

const Results = ({answers, data}) => {

   return (
      <section className="result">
         <div className="quiz-result">
            <Indicator answers={answers}/>
            <div className="quiz-result__buttons ">
               <form action="" className="quiz-result__retry-form">
                  <button
                     type="submit"
                     className="quiz-result-button quiz-result__retry-button">
                     Пройти заново
                  </button>
               </form>
               <form action="" className="quiz-result__save-form"
                     onSubmit={event => event.preventDefault()}
                     onClick={event => alert('Данная опция пока не работает')}>
                  <button
                     type="submit"
                     className="quiz-result-button quiz-result__save-button">
                     Опубликовать результат в профиле
                  </button>
               </form>
            </div>
         </div>
         {data.map((question, index) => {
            const id = index + 1;
            const userCorrect = answers[id].status;
            const userAnswerVariant = +answers[id].id;

            return <ResultQuestions
               key={question.id}
               question={question}
               userCorrect={userCorrect}
               userAnswerVariant={userAnswerVariant}/>
         })}
      </section>
   );
};

export default Results;
