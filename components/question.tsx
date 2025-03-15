import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState, useEffect } from "react";

export default function Question(props: { questions: any; page: number; nextPage: any; setCorrectCount: any, correctCount: any; hearts: number; setHearts: any }) {
    const { questions, page, nextPage, correctCount, setCorrectCount, hearts, setHearts } = props
    const currentQuestion = questions[page - 1]
    const [nextButton, setNextButton] = useState(<div></div>)

    // Check choice against question answer
    const checkResponse = (e: any) => {
        const response = e.target.innerText

        // If question time is multiple choice
        if (currentQuestion.type === 'MCQ') {
            if (response === currentQuestion.answer) {
                e.target.style.background = 'green'
                setCorrectCount(correctCount + 1)
            } else {
                e.target.style.background = 'red'
                setHearts(hearts - 1)
            }

            const options = document.getElementsByClassName('options')
            for (let option of options) {
                option.style.pointerEvents = "none"
            }


            setNextButton(<div onClick={() => nextPage()}>Next Questions</div>)
        }

        // If question type is fill in the blanks or short answer (unfinished)
        else {
            let input = document.querySelector('textarea').value;
            alert(input)
        }
    }

    useEffect(() => {
        setNextButton(<div></div>)

        const options = document.getElementsByClassName('options')
        for (let option of options) {
            option.style.background = 'white'
            option.style.pointerEvents = "auto"
        }
    }, [currentQuestion])


    return (
        <div className="flex justify-center items-center wrap flex-col">
            <div>Question Page</div>
            <div>Question {page}: {currentQuestion.question}</div>

            {currentQuestion.type === 'MCQ' ?
                <div className="flex justify-center items-center wrap flex-col">
                    {currentQuestion ? currentQuestion.options.map((option: string) => {
                        return (
                            <Button className="options" variant="outline" onClick={(e) => checkResponse(e)}>{option}</Button>
                        )
                    }) : <></>}
                </div>
                :
                <div>
                    <Textarea className="w-50" />
                    <Button variant="outline" onClick={(e) => checkResponse(e)}>Submit</Button>
                </div>
            }
            {nextButton}
        </div>
    );
}