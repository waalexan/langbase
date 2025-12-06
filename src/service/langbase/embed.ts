'use server'

import { langbase } from "@/src/lib/langbase";
import { EmbeddingModels } from "langbase";

export const createEmbeddings = async ({ textChunks, embeddingModel }: { textChunks: string[], embeddingModel: EmbeddingModels | undefined }) => {
    const embeddings = await langbase.embed({
        chunks: textChunks,
        embeddingModel,
    });
    return embeddings;
}