'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "./ui/textarea"
import { SidebarMenuButton } from "./ui/sidebar"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"

export default function MakeQuiz() {
    const router = useRouter()

    const createQuestions = () => {
        // fetches users input from text box 
        let input = document.querySelector('textarea').value;

        // Add backend stuff here
    }


    return (
        <Dialog>
            <DialogTrigger>
                <img src={'/planets/0.svg'} height={500} width={500} alt="locked" className="hover:scale-115 w-[100px]" />
            </DialogTrigger>
            <DialogContent className="text-white">
                <DialogTitle>Upload text to start generating questions!</DialogTitle>
                <DialogDescription>
                    <Textarea />

                </DialogDescription>
                <DialogFooter>
                    <Button variant="secondary" className="text-white" onClick={() => {
                        createQuestions()
                        router.push('/quiz')
                    }}>
                        Start Quiz!
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}