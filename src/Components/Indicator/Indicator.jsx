import React, {useState, useEffect} from 'react';
import indicatorSvg from '../../images/indicator.svg'
import './Indicator.css'

const Indicator = ({answers}) => {

   const [percent, setPercent] = useState(0);
   const [levelDegree, setLevelDegree] = useState(0);
   const [level, setLevel] = useState(null);
   const [levelClass, setLevelClass] = useState('');
   const [percentTopPeople, setPercentTopPeople] = useState(0);

   useEffect(() => {
      findPercent();
      findLevelDegree();
      findPercentTopPeople();
   }, [percent, levelDegree, level, levelClass]);

   function findPercent() {
      const totalScore = Object.values(answers).length
      const yourScore = Object.values(answers).reduce((acc, curr) => curr.status === 'true' ? acc + 1 : acc, 0);
      setPercent(Math.round((yourScore * 100) / totalScore));
   }

   function findLevelDegree() {
      const totalDegree = 180;
      setLevelDegree(Math.floor((percent * totalDegree) / 100));

      if (levelDegree <= 40) {
         setLevel('Новичок')
         setLevelClass('quiz-result-indicator__level-junior');
      } else if (levelDegree > 40 && levelDegree < 90) {
         setLevel('Средний');
         setLevelClass('quiz-result-indicator__level-middle');
      } else {
         setLevel('Профи')
         setLevelClass('quiz-result-indicator__level-senior');
      }
   }

   function findPercentTopPeople() {
      // Nowhere save result, so let it  be random number from 1 to 100
      setPercentTopPeople(Math.floor(Math.random() * 100) + 1);
   }

   return (
      <div className="quiz-result__layout" id="quiz-result__layout">
         <div className="quiz-result__left">
            <dl className="quiz-percents">
               <dt className="quiz-percents__text">Ваш результат:</dt>
               <dd className="quiz-percents__percents">{percent}%</dd>
            </dl>
         </div>
         <div className="quiz-result__center">
            <div className="quiz-result-indicator">
               <div className="quiz-result-indicator__indicator" style={{backgroundImage: `url(${indicatorSvg})`}}>
                  <div className="quiz-result-indicator__arrow"
                       style={{transform: `rotate(${levelDegree}deg`}}>

                  </div>
               </div>
               <div className="quiz-result-indicator__text">
                  Ваш предположительный уровень — <span
                  className={`quiz-result-indicator__level ${levelClass}`}>{level}</span>
               </div>
            </div>
         </div>
         <div className="quiz-result__right">
            <dl className="quiz-percents">
               <dt className="quiz-percents__text">Вы прошли тест лучше, чем</dt>
               <dd>
                  <p className="quiz-percents__percents">{percentTopPeople}%</p>
                  <p className="quiz-percents__text">респондентов</p>
               </dd>
            </dl>
         </div>
      </div>
   );
};

export default Indicator;
