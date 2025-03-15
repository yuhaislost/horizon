import { Button } from "@/components/ui/button"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Question(props: { questions: any; page: number; nextPage: any; setCorrectCount: any; correctCount: any }) {
    const { questions, page, nextPage, correctCount, setCorrectCount } = props
    const currentQuestion = questions[page - 1]

    // Placeholder Value 
    const hearts = 3

    // Check choice against question answer
    const checkResponse = (response: string) => {
        if (response === currentQuestion.answer) {
            setCorrectCount(correctCount + 1)
            nextPage()
        } else {
            
        }
    }

    return (
        <div className="flex justify-center items-center wrap flex-col">
            <div>Question Page</div>
            <div>Question {page}: {currentQuestion.question}</div>
            <div className="flex justify-center items-center wrap flex-col">
                {currentQuestion ? currentQuestion.options.map((option: string ) => {
                    return (
                        <Button variant="outline" onClick={() => checkResponse(option)}>{option}</Button>
                    )
                }) : <></>}
            </div>
        </div>
    );
}