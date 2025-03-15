export default function MCQ_Questions() {

    // Placeholder Questions
    const question1 = {
        question: "1+1",
        type: "MCQ",
        answer: "2",
        options: ["2", "1", "3", "4"]
    }

    const question2 = {
        question: "1+2",
        type: "MCQ",
        answer: "3",
        options: ["2", "1", "3", "4"]
    }

    const question3 = {
        question: "1+3",
        type: "MCQ",
        answer: "4",
        options: ["2", "1", "3", "4"]
    }

    const question4 = {
        question: "1+5",
        type: "MCQ",
        answer: "6",
        options: ["6", "1", "3", "4"]
    }

    const question5 = {
        question: "1+6",
        type: "MCQ",
        answer: "7",
        options: ["6", "1", "7", "4"]
    }

    return (
        [question1, question2, question3, question4]
    )
}