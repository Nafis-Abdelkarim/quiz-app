import React, { useState } from 'react';

export default function App() {
  //We having an array that contain all the questions and answers
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  //Create the hooks to deal with the state of question , score and showing the final score

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const handelAnswerQuestion = (isCorrect)=>{
    const nextQuestion = currentQuestion + 1
    if(isCorrect === true){
      setScore(score + 1);
      alert('Correct Answer')
    }
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true)
    }
  }

  //handling the the refresh of the page after finishing the quize game

  const handelRefreshThePageAndRestTheValues = () =>{
    window.location.reload();
  } 

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
          <button onClick={handelRefreshThePageAndRestTheValues}>Play Again</button>
        </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button onClick={()=>handelAnswerQuestion(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            ))}
					</div>
				</>
			)}
		</div>
	);
}