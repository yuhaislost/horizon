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
import { Button } from "./ui/button"

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
            <DialogContent className="text-white">
                <DialogHeader>
                    <DialogTitle>Upload text to start generating questions!</DialogTitle>
                    <DialogDescription>
                        <Textarea />
                        <Button variant="outline" className="text-white" onClick={() => {
                            createQuestions()
                            router.push('/quiz')
                        }}>
                            Start Quiz!
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}