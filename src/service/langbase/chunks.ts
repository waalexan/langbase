'use server'

import { langbase } from "@/src/lib/langbase";

export const createChunker = async ({content}: {content: string}) => {
    const chunks = await langbase.chunker({
		content,
		chunkMaxLength: 1024,
		chunkOverlap: 256
	});
    return chunks
}