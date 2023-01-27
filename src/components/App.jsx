import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import css from "components/App.module.css";
import { useState} from "react";


export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0})


 const addFeedback = option => {
    setState({...state, [option]: state[option] + 1})
  };
  
 const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  
  
  return( 
    
     <div className={css.section}>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys(state)}
          onLeaveFeedback={addFeedback}
        />
      </Section>

       <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            state={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>

    </div>
  )
};
