import PropTypes from 'prop-types';
import React from "react";
import Feedback from "./Feedback.module.css";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return ( 
            <button className='click'
                type="button"
                onClick={() => onLeaveFeedback(option)}
                name={option}
                key={option}>{option}
            </button>
    )
        })
    }

FeedbackOptions.propTypes = {
    options:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions; 