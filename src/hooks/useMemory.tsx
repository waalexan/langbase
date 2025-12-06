'use client'

import { useMutation } from '@tanstack/react-query';
import { createDocument, createMemory } from '../service/langbase/memories';
import { MemoryCreateOptions, MemoryUploadDocOptions } from 'langbase';

export const useCreateMemory = () => {
    return useMutation({
        mutationFn: async ({ name, embedding_model }: MemoryCreateOptions) => {
            if (!name) return;
            const res = createMemory({ name, embedding_model });
            return res;
        }
    })
}

export const useCreateDocument = () => {
    return useMutation({
        mutationFn: async ({ memoryName, documentName, document, contentType }: MemoryUploadDocOptions) => {
            const res = createDocument({ memoryName, documentName, document, contentType });
            return res;
        }
    })
}