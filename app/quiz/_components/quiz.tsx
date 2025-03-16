/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { question } from "@/database/schema";
import { Header } from "./header";
import { useState } from "react";
import { Question } from "./question";

interface QuizProps {
    expeditionId: number;
    initialPercentage: number;
    initialHearts: number;
    questions: typeof question.$inferSelect[];
};

export const Quiz = ({ expeditionId, initialPercentage, initialHearts, questions } : QuizProps) => {
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);
    const [questionIndex, setQuestionIndex] = useState(() => {
        const questionIndex = questions.findIndex((question) => !question.completed);
        return questionIndex === -1 ? 0 : questionIndex;
    });
    const [selectedOption, setSelectedOption] = useState<"Correct" | "Incorrect" | "None">("None");
    const question = questions[questionIndex];

    const dummyQuestion = {
        questionContent: "Who is the best male actor in Parasite?",
        options: ["James", "Lebron", "Jimmy", "Jacquline"],
        answer: 3,
    }

    return (
        <>
            <Header hearts={hearts} percentage={percentage}/>
            <div className="h-full">
                <div className="flex justify-center">
                    <Question question={dummyQuestion.questionContent} options={dummyQuestion.options} correctOption={dummyQuestion.answer}/>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}