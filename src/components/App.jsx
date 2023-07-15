import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = event => {
    const value = event.target.textContent;
    setState(prevState => {
      return { ...prevState, [value]: prevState[value] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const feedbackValues = Object.values(state);
    const total = feedbackValues.reduce((prev, elem) => prev + elem, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total !== 0) {
      const positive = Math.round((state.good / total) * 100);
      return positive;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            stateValues={state}
            total={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// the code below just for training "useState" functional on this task

// import React, { useEffect, useState } from 'react';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   let [total, setTotal] = useState(0);
//   let [positive, setPositive] = useState(0);

//   useEffect(() => {
//     total = good + neutral + bad;
//     console.log(`total - `, total)
//     // positive = Math.round((good / total) * 100);
//     //     if (total !== 0) {
//     //       positive = Math.round((good / total) * 100);
//     // } else positive = 0;
//     console.log(`positive - `, positive)
//   }, [good, neutral, bad, total, positive])

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <div>
//         Good: {good}
//           <button type="button" onClick={() => {setGood(good + 1); setTotal(total + 1); setPositive(positive = Math.round((good / total) * 100))}}>
//         good
//           </button>
//         </div>
//         <div>
//         Neutral: {neutral}
//           <button type="button" onClick={() => {setNeutral(neutral + 1); setTotal(total + 1); setPositive(positive = Math.round((good / total) * 100))}}>
//         neutral
//           </button>
//         </div>
//         <div>
//         Bad: {bad}
//           <button type="button" onClick={() => {setBad(bad + 1); setTotal(total + 1); setPositive(positive = Math.round((good / total) * 100))}}>
//             bad
//           </button>
//         </div>
//         <div>
//         <p>
//           Total: {total}
//         </p>
//         </div>
//         <div>
//         <p>
//           Positive: {positive}%
//         </p>
//         </div>
//       </Section>
//     </>
//   );
// };
