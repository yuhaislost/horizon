import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";

export default function Question(props: { questions: any; page: number; nextPage: any; setCorrectCount: any; correctCount: any; hearts: number; setHearts: any }) {
    const { questions, page, nextPage, correctCount, setCorrectCount, hearts, setHearts } = props
    const currentQuestion = questions[page - 2]

    // Check choice against question answer
    const checkResponse = (response: string) => {
        if (response === currentQuestion.answer) {
            setCorrectCount(correctCount + 1)
        } else {
            setHearts(hearts - 1)
        }
        nextPage()
    }

    return (
        <div className="flex justify-center items-center wrap flex-col">
            <div>Question Page</div>
            <div>Question {page}: {currentQuestion.question}</div>

            {currentQuestion.type === 'MCQ' ?
                <div className="flex justify-center items-center wrap flex-col">
                    {currentQuestion ? currentQuestion.options.map((option: string) => {
                        return (
                            <Button variant="outline" onClick={() => checkResponse(option)}>{option}</Button>
                        )
                    }) : <></>}
                </div>
                : 
                <div>
                    <Textarea />
                </div>
            }
        </div>
    );
}