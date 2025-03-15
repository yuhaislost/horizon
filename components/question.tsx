import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";

export default function Question(props: { questions: any; page: number; nextPage: any; setCorrectCount: any; correctCount: any; hearts: number; setHearts: any }) {
    const { questions, page, nextPage, correctCount, setCorrectCount, hearts, setHearts } = props
    const currentQuestion = questions[page - 1]

    // Check choice against question answer
    const checkResponse = (response: string | undefined) => {

        // If question time is multiple choice
        if (currentQuestion.type === 'MCQ') {
            if (response === currentQuestion.answer) {
                setCorrectCount(correctCount + 1)
            } else {
                setHearts(hearts - 1)
            }
            nextPage()
        } 
        
        // If question type is fill in the blanks or short answer (unfinished)
        else {
            let input = document.querySelector('textarea').value;
            alert(input)
        }
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
                    <Textarea className="w-50" />
                    <Button variant="outline" onClick={() => checkResponse(undefined)}>Submit</Button>
                </div>
            }
        </div>
    );
}