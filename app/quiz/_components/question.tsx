import { Button } from "@/components/ui/button";

interface QuestionProps {
    questionId: number,
    question: string;
    options: string[];
    correctOption: number;
    disabled: boolean;
    onAnswer: (answerState : "Correct" | "Incorrect", id: number) => void;
};

export const Question = ({ questionId, question, options, correctOption, disabled, onAnswer } : QuestionProps) => {

    return (
        <div className="flex flex-col gap-16 w-full">
            <h1 className="text-3xl text-center font-semibold">{ question }</h1>
            <div className="grid grid-cols-2 lg:grid-cols-repeat-[auto-fit, minimax(0,1fr)] gap-x-20 gap-y-8">
                {
                    options.map((option, i) => (
                        <Button variant={'secondary'} key={i} className="h-20 !text-wrap active" onClick={() => onAnswer(i == correctOption ? "Correct" : "Incorrect", questionId)} disabled={disabled}>
                            { option }
                        </Button>
                    ))
                }
            </div>
        </div>
    );
}