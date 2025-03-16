/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import { getKnowledge } from '@/database/queries';
import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY
});

export const getQuestions = async () => {
    const assistantId = "asst_ohZzIQ7OhI0XLzL1px07ZhPq";

    const content = "Fish have been an important natural resource for humans since prehistoric times, especially as food. Commercial and subsistence fishers harvest fish in wild fisheries or farm them in ponds or in breeding cages in the ocean. Fish are caught for recreation, or raised by fishkeepers as ornaments for private and public exhibition in aquaria and garden ponds. Fish have had a role in human culture through the ages, serving as deities, religious symbols, and as the subjects of art, books and movies."
    const messageStructure = {
        "content": content,
    };

    const thread = await openai.beta.threads.create();
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: JSON.stringify(messageStructure)
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });

    // Poll for completion
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    // Get messages from the thread
    const messagesResponse = await openai.beta.threads.messages.list(thread.id);

    return messagesResponse;
}