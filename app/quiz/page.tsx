"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import Question from "@/components/question";

// Placeholder Questions
const question1 = {
  question: "1+1",
  type: "multiple choice",
  answer: "2",
  options: ["2", "1", "3", "4"]
}

const question2 = {
  question: "1+2",
  type: "multiple choice",
  answer: "3",
  options: ["2", "1", "3", "4"]
}

const question3 = {
  question: "1+3",
  type: "multiple choice",
  answer: "4",
  options: ["2", "1", "3", "4"]
}

export default function quiz() {
  const [questions, SetQuestions] = useState([question1, question2, question3])
  const [page, setPage] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)

  const nextPage = () => {
    const nextPage = page + 1
    setPage(nextPage)
  }

  return (
    <div >
      {page === 0 ?
        <Button variant="outline" onClick={() => nextPage()}>Start Quiz</Button>
        : page > 0 && page < questions.length + 1?
          <div>
            <Question questions={questions} page={page} nextPage={nextPage} correctCount={correctCount} setCorrectCount={setCorrectCount}></Question>
          </div>
          :
          <div>Total: {correctCount}</div>
      }

    </div>
  );
}