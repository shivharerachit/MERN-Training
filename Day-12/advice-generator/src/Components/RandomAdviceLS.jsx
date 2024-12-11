import React from "react";

const advices = [
    "Don't be afraid to give up the good to go for the great.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The only way to achieve the impossible is to believe it is possible.",
    "The only way to do great work is to love what you do.",
]

const RandomAdviceLS = ({onSelectAdvice}) => {
    const getRandomAdvice = () => {
        const randomIndex = Math.floor(Math.random() * advices.length);
        return advices[randomIndex];
    }
    
    const handelClick = () => {
        const advice = getRandomAdvice();
        onSelectAdvice(advice);
    }
    return(
        <div>
            <button onClick={handelClick}>Generate Advice</button>
        </div>
    )
}

export default RandomAdviceLS;