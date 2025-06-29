import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hook/useWindowSize";

const BASE_URL = 'https://opentdb.com';
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
function QuizBaseComponent() {
    const [quizData, setQuizData] = useState([])
    const [savedAns, setSavedAns] = useState([])
    const [quizIndex, setQuizIndex] = useState(0)
    const [score, setScore] = useState(0)
    const { windowSize } = useWindowSize()
    const fetchQuizQuestion = () => {
        fetch(`${BASE_URL}/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                //setQuizData(data.results)
                const newData = data.results.map(item => {
                    const newItems = item.incorrect_answers.concat(item.correct_answer);
                    return { ...item, all_answers: shuffleArray(newItems) };
                });
                setQuizData(newData)
            }).catch(error => {
                console.error('Error fetching quiz question:', error);
            })
    }
    function saveQuizAnswers(answer, question) {
        setSavedAns(prevSavedAns => {
            const updatedAnswers = [...prevSavedAns];
            const existingIndex = updatedAnswers.findIndex(item => item.question === question);
            if (existingIndex !== -1) {
                updatedAnswers[existingIndex].answer = answer; // Replace the answer for the existing question
            } else {
                updatedAnswers.push({ question, answer }); // Push new question and answer
            }
            return updatedAnswers;
        });
    }
    function onNextQuestion(index) {
        setQuizIndex(index + 1)
    }
    function calculateScore() {
        let totalScore = 0;
        savedAns.forEach(item => {
            const correctAnswer = quizData.find(q => q.question === item.question)?.correct_answer;
            if (item.answer === correctAnswer) {
                totalScore += 1; // Add 1 point for each correct answer
            }
        });
        setScore(totalScore); // Update the score state
    }
    return (
        <div>
            <h1>Quiz</h1>
            <h2>{windowSize.width} X {windowSize.height}</h2>
            <button onClick={fetchQuizQuestion}>Start Quiz</button>
            {
                quizData && quizData.map((item, index) => {
                    if (index === quizIndex) {
                        return (
                            <>
                                <p>{item?.question}</p>
                                {
                                    item.all_answers.map((answer, i) => {
                                        return (
                                            <>
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={answer}
                                                    onChange={() => saveQuizAnswers(answer, item.question)}
                                                />
                                                <label>{answer}</label>
                                            </>
                                        )
                                    })
                                }
                                {
                                    index === quizData.length - 1 ? (
                                        <button onClick={calculateScore}>Show Results</button>
                                    ) : (
                                        <button onClick={() => onNextQuestion(index)}>Next Question</button>
                                    )
                                }
                            </>
                        )
                    } else {
                        return null
                    }
                })
            }
            <h1>Your Score is : {score}</h1>
        </div>
    );
}

export default QuizBaseComponent;