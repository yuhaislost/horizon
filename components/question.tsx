import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState, useEffect } from "react";
import Link from "next/link";

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


            setNextButton(<Button variant="outline" onClick={() => nextPage()}>Next Questions</Button>)
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
            option.style.background = ''
            option.style.pointerEvents = "auto"
        }
    }, [currentQuestion])


    return (
        <div className="flex justify-center items-center wrap flex-col w-vw h-vh gap-10 m-10">
            <div className="text-5xl">{page}. {currentQuestion.question}</div>

            {currentQuestion.type === 'MCQ' ?
                <div className="flex flex-wrap ">
                    {currentQuestion ? currentQuestion.options.map((option: string, i = 0) => {
                        return (
                            <Button id={i} variant="outline" className="options max-w-1/2" onClick={(e) => checkResponse(e)}>{option}</Button>
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