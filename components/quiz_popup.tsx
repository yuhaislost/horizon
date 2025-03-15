'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "./ui/textarea"
import { SidebarMenuButton } from "./ui/sidebar"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Quiz_Popup() {
    const router = useRouter()

    const createQuestions = () => {
        // fetches users input from text box 
        let input = document.querySelector('textarea').value;

        // Add backend stuff here
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
            <SidebarMenuButton>
                Quiz
            </SidebarMenuButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload text to start generating questions!</DialogTitle>
                    <DialogDescription>
                        <Textarea />
                        <div onClick={() => {
                            createQuestions()
                            router.push('/quiz')
                        }}>
                            Start Quiz!
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}