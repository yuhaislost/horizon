export function MCQ_Questions() {

    // Placeholder Questions
    const question1 = {
        id: 1,
        question: "1+1",
        type: "MCQ",
        answer: "2",
        options: ["2", "1", "3", "4"]
    }

    const question2 = {
        id: 2,
        question: "1+2",
        type: "MCQ",
        answer: "3",
        options: ["2", "1", "3", "4"]
    }

    const question3 = {
        id: 3,
        question: "1+3",
        type: "MCQ",
        answer: "4",
        options: ["2", "1", "3", "4"]
    }

    const question4 = {
        id: 4,
        question: "1+5",
        type: "MCQ",
        answer: "6",
        options: ["6", "1", "3", "4"]
    }

    const question5 = {
        id: 5,
        question: "1+6",
        type: "MCQ",
        answer: "7",
        options: ["6", "1", "7", "4"]
    }

    return (
        [question1, question2, question3, question4]
    )
}

export function FITB_Questions() {
    const question1 = {
        id: 1,
        question: "1+1 is ___ and 2+2 is ____",
        type: "FITB", //Fill in the Blanks (Can change type name later)
        answer: ["2", "4"],
        options: null
      }

      const question2 = {
        id: 2,
        question: "1+2 is ___ and 2+3 is ____",
        type: "FITB", //Fill in the Blanks (Can change type name later)
        answer: ["3", "5"],
        options: null
      }

    return (
        [question1, question2]
    )
    
}