import React from 'react';
import './TopBar.css'

const TopBar = ({data, currentElement}) => {
   return (
      <>
         <div className="quiz-topbar" id="quiz-topbar">
            {data.map((item, index) => <span
               key={item.id}
               className={`quiz-topbar__item ${currentElement === index ? 'quiz-topbar__item-current' : ''}`}>
               {index + 1}</span>)}
         </div>

         <div className="quiz-topbar-tablet" id="quiz-topbar-tablet">
            <h2 className="quiz-topbar-tablet__title">Вопрос
               <strong className="quiz-topbar-tablet__current">{currentElement + 1}</strong>
               из<strong className="quiz-topbar-tablet__length">{data.length}</strong></h2>
         </div>
      </>
   );
};

export default TopBar;
