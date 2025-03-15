"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import Question from "@/components/question";
import { MCQ_Questions, FITB_Questions } from "@/components/placeholder_data";


export default function quiz() {
  // Page 0 - Fail Page
  // Page 1 - Start Page
  // Page 2 to <Question Length> - Question Page
  const [page, setPage] = useState(1)
  const [correctCount, setCorrectCount] = useState(0)

  // Placeholder Values
  //const [questions, SetQuestions] = useState(MCQ_Questions)
  const [questions, SetQuestions] = useState(FITB_Questions)
  const [hearts, setHearts] = useState(3)

  const nextPage = () => {
    const nextPage = page + 1
    setPage(nextPage)
  }

  useEffect(() => {
    if (hearts <= 0) {
      setPage(0)
    }
  }, [hearts])

  return (
    <div >
      {page === 0 ?
        <div>Fail! You ran out of hearts</div>
        : page === 1 ? 
        <Button variant="outline" onClick={() => nextPage()}>Start Quiz</Button>
        : page > 1 && page < questions.length + 2?
          <div>
            <Question questions={questions} page={page} nextPage={nextPage} correctCount={correctCount} setCorrectCount={setCorrectCount} hearts={hearts} setHearts={setHearts}></Question>
          </div>
          :
          <div>Total: {correctCount}, Hearts: {hearts}</div>
      }

    </div>
  );
}