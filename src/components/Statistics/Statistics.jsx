import PropTypes from 'prop-types';


export function Statistics({state, total, positivePercentage}) {
    return (
        <>            
            <ul>
                <li>Good:{state.good}</li>
                <li>Neutral:{state.neutral}</li>
                <li>Bad:{state.bad}</li>
                <li>Total:{total}</li>
                <li>Positive feedback: {positivePercentage} %</li>
            </ul>
        </>
    
    )
};

Statistics.propTypes = {
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
  }).isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}