/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { question } from "@/database/schema";
import { Header } from "./header";
import { useState, useTransition } from "react";
import { Question } from "./question";
import { Button } from "@/components/ui/button";
import { addToGraveyard, completeQuestion } from "@/action/questionActions";
import { reduceHearts } from "@/action/heartActions";
import { useAuth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface QuizProps {
    expeditionId: number;
    initialPercentage: number;
    initialHearts: number;
    questions: typeof question.$inferSelect[];
};

export const Quiz = ({ expeditionId, initialPercentage, initialHearts, questions } : QuizProps) => {
    const { userId } = useAuth(); 

    if (!userId)
    {
        redirect('/study');
    }

    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);
    const [questionIndex, setQuestionIndex] = useState(() => {
        const questionIndex = questions.findIndex((question) => !question.completed);
        return questionIndex === -1 ? 0 : questionIndex;
    });
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isPending, startTransition] = useTransition();
    const question = questions[questionIndex];

    const dummyQuestion = {
        questionContent: "Who is the best male actor in Parasite?",
        options: ["James", "Lebron", "Jimmy", "Jacquline"],
        answer: 3,
        id: 4,
    }

    const onAnswer = (answerState : "Correct" | "Incorrect", id: number) => {
        if (answerState === "Correct")
        {
            setHasAnswered(true);
            startTransition(() => {
                completeQuestion(id).then(() => {}).catch((err) => {});
            });
        }
        else
        {
           setHasAnswered(false);
           startTransition(() => {
                reduceHearts(userId).then(() => {}).catch(() => {});
                addToGraveyard(id).then(() => {}).catch(() => {});
           });
        }
    }

    const onContinue = () => {
        if (hasAnswered)
        {
            setQuestionIndex(questionIndex + 1);
        }
    }
    

    return (
        <>
            <Header hearts={hearts} percentage={percentage}/>
            <div className="flex-1">
                <div className="flex justify-center h-full items-center flex-col">
                    <div className="lg:min-h-[350px] lg:w-[800px] w-full px-6 lg:px-0 flex flex-col gap-y-16 items-center">
                        <Question questionId={dummyQuestion.id} question={dummyQuestion.questionContent} options={dummyQuestion.options} correctOption={dummyQuestion.answer} onAnswer={onAnswer} disabled={isPending || hasAnswered} />
                        <div className="flex justify-end w-full">
                        <Button variant={hasAnswered ? 'primary' : 'disabled'} onClick={onContinue} disabled={isPending || !hasAnswered}>
                            Continue
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}