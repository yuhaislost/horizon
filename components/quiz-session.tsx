import React, {useEffect, useState} from "react";
import { Button } from "@/components/ui/button"



export default function quiz_session() {
    const [questions, setQuestions] = useState([])

    return (
      <div>
        <Button variant="outline">Start Quiz</Button>
      </div>
    );
  }