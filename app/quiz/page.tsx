/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCurrentExpedition, getHearts } from "@/database/queries";
import { Quiz } from "./_components/quiz";
import { redirect } from "next/navigation";

const QuizPage = async () => {

  // const expeditionDataPromise = getCurrentExpedition();
  // const userHeartsPromise = getHearts();

  // const [expeditionData, userHearts] = await Promise.all([expeditionDataPromise, userHeartsPromise]);

  // if (!expeditionData)
  // {
  //   return redirect('/study');
  // }

  // const percentageCompletion = expeditionData.completedCount / expeditionData.questionData.length * 100;

  return (
    <Quiz expeditionId={10} questions={[]} initialHearts={5} initialPercentage={70}/>
  );
}

export default QuizPage;