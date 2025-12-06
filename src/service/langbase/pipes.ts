'use server'

import { langbase } from "@/src/lib/langbase";
import { PipeCreateOptions, RunOptions } from "langbase";

export const getPipes = async () =>  {
    return await langbase.pipes.list();
}

export const createPipe = async ({ name, model, messages, memory, variables }: PipeCreateOptions) => {
    return await langbase.pipes.create({
        name,
        model,
        messages,
        memory,
        variables
    });
}

export const runPipe = async ({ name, messages, memory }: RunOptions) => {
    if (name) {
        const result = await langbase.pipes.run({
            name,
            messages,
            memory
        });
        return result;
    }
    return;
}
