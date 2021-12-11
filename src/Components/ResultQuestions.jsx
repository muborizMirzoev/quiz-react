import React from 'react';

const ResultQuestions = ({question, userCorrect, userAnswerVariant}) => {

   return (
      <div className="result__quiz">
         <div className={`result__question quiz-question-body
               ${userCorrect === 'true' ? 'quiz-question__correct' : 'quiz-question__incorrect'}`}>
            <p className="quiz-question-body__title">{question.question}</p>
            <ul className="quiz-question__answer">
               {question.answers.map((answer, index) => {
                  return <li key={answer.id} className="quiz-question__answer">
                     <label
                        className={`quiz-question__label
                           ${(answer.status === true && answer.id === userAnswerVariant) ? 'quiz-answer-correct' : ''}
                           ${(answer.status === false && answer.id === userAnswerVariant) ? 'quiz-answer-incorrect' : ''}
                           ${answer.status === true ? 'quiz-answer-correct' : ''}`
                        }>
                        <input className={`quiz-question__input`}
                               checked={userAnswerVariant === answer.id}  // TODO does not always work correctly ???
                               type="radio"
                               disabled="disabled"
                               name={answer.id}
                               value={answer.value}
                               data-answer={answer.status}
                               data-id={answer.id}/>
                        <span className="quiz-question__input-text">{answer.value}</span>
                     </label>
                  </li>
               })}
            </ul>
         </div>
      </div>
   );
};

export default ResultQuestions;
