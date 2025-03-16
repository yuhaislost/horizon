import { Button } from "@/components/ui/button";

interface QuestionProps {
    question: string;
    options: string[];
    correctOption: number;
};

export const Question = ({ question, options, correctOption } : QuestionProps) => {
    return (
        <div className="flex flex-col ">
            <h1>{ question }</h1>
            <div className="flex flex-row flex-wrap">
                {
                    options.map((option, i) => (
                        <div key={i}>
                            {option}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}