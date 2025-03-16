import { getQuestions } from "@/action/aiActions";


export default async function pet() {

  const onClick = async () => {
    const questionData = await getQuestions();
    console.log(questionData);
  }

  onClick();

  return (
    <div>

    </div>
  );
}