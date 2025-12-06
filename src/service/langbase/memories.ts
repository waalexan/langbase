'use server'

import { langbase } from '@/src/lib/langbase';
import { MemoryCreateOptions, MemoryUploadDocOptions } from 'langbase';

export const getMemories = async () => {
    return await langbase.memories.list();
}

export const createMemory = async ({ name, embedding_model }: MemoryCreateOptions) => {
    const result = await langbase.memories.create({
        name,
        embedding_model
    });
    return result;
}

export const createDocument = async ({ memoryName, documentName, document, contentType }: MemoryUploadDocOptions) => {
    const result = await langbase.memories.documents.upload({
        memoryName,
        documentName,
        document,
        contentType,
    });
    return result;
}

export const DeleteMemory = async ({ name }: { name: string }) => {
    const hasMemoryDeleted = await langbase.memories.delete({
        name: name
    });
    return hasMemoryDeleted;
}