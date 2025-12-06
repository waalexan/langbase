'use client'

import { useMutation } from '@tanstack/react-query';
import { createPipe, runPipe } from '../service/langbase/pipes';
import { PipeCreateOptions, RunOptions } from 'langbase';

export const usePipeRun = () => {
    return useMutation({
        mutationFn: async ({ name, messages, memory }: RunOptions) => {
            if (!name) return;
            const res = runPipe({ name, messages, memory });
            return res;
        }
    })
}

export const useCreatePipe = () => {
    return useMutation({
        mutationFn: async ({ name, model, messages, memory, variables }: PipeCreateOptions) => {
            const res = createPipe({ name, model, messages, memory, variables });
            return res;
        }
    })
}