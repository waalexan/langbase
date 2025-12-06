'use client'

import { useCreateDocument } from "@/src/hooks/useMemory";
import { getMemories } from "@/src/service/langbase/memories";
import { useQuery } from "@tanstack/react-query";
import { ContentType } from "langbase";
import { useState, useMemo } from "react";

export default function Home() {
    const [memoryName, setMemoryName] = useState<string>("");
    const [documentName, setDocumentName] = useState<string>("");
    const [documentContent, setDocumentContent] = useState<string>("");
    const [documentFile, setDocumentFile] = useState<File | null>(null);
    const [contentType, setContentType] = useState<ContentType>("text/plain");
    const { mutate, isPending, error, data } = useCreateDocument();

    const { data: memories, isLoading, error: memoriesErrors } = useQuery({
        queryKey: ["memories"],
        queryFn: () => getMemories()
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!memoryName.trim() || !documentName.trim()) return;

        let document;

        // Para tipos de texto (plain, markdown), criar File a partir do texto
        if (contentType === "text/plain" || contentType === "text/markdown") {
            if (!documentContent.trim()) return;

            const blob = new Blob([documentContent], { type: contentType });
            document = new File([blob], `${documentName}.${contentType === "text/markdown" ? 'md' : 'txt'}`, {
                type: contentType
            });
        } else {
            // Para arquivos (PDF, Excel, etc.)
            if (!documentFile) return;
            document = documentFile;
        }

        mutate({
            memoryName,
            documentName,
            document,
            contentType,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setDocumentFile(file);
            // Opcional: definir o contentType baseado no tipo do arquivo
            // setContentType(file.type as ContentType);
        }
    };

    const types: ContentType[] = [
        "application/pdf",
        "text/plain",
        "text/markdown",
        "text/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
    ];

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Nome da memória */}
                <div>
                    <label htmlFor="memoryName">Nome da memória</label>
                    {isLoading ? (<span>Carregando...</span>) : (
                        <select
                            id="memoryName"
                            disabled={isLoading || isPending}
                            value={memoryName}
                            onChange={(e) => {
                                setMemoryName(e.target.value);
                            }}
                        >
                            <option value="">Selecione uma memória</option>
                            {memories && memories.map((memory, index) => (
                                <option key={index} value={memory.name}>
                                    {memory.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                {/* Nome do documento */}
                <div>
                    <label htmlFor="documentName">Nome do documento</label>
                    <input
                        type="text"
                        id="documentName"
                        disabled={isPending}
                        placeholder="ex: meu-documento"
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
                    />
                </div>

                {/* Tipo do conteúdo */}
                <div>
                    <label htmlFor="contentType">Tipo do documento</label>
                    <select
                        id="contentType"
                        disabled={isPending}
                        value={contentType}
                        onChange={(e) => {
                            setContentType(e.target.value as ContentType);
                            // Limpar arquivo ao mudar o tipo
                            setDocumentFile(null);
                            setDocumentContent("");
                        }}
                    >
                        {types.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upload ou texto baseado no tipo */}
                {
                    (contentType === "text/plain" || contentType === "text/markdown") ? (
                        <div>
                            <label htmlFor="documentContent">Conteúdo do documento</label>
                            <textarea
                                id="documentContent"
                                disabled={isPending}
                                value={documentContent}
                                onChange={(e) => setDocumentContent(e.target.value)}
                                rows={10}
                                cols={50}
                            />
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="documentFile">Escolher arquivo</label>
                            <input
                                type="file"
                                id="documentFile"
                                disabled={isPending}
                                onChange={handleFileChange}
                                accept={
                                    contentType === "application/pdf" ? ".pdf" :
                                        contentType === "text/csv" ? ".csv" :
                                            contentType.includes("excel") ? ".xlsx,.xls" :
                                                "*"
                                }
                            />
                            {documentFile && (
                                <div>
                                    Arquivo selecionado: {documentFile.name}
                                </div>
                            )}
                        </div>
                    )
                }

                {/* Feedback */}
                {error && <span style={{ color: 'red' }}>Erro: {error.message}</span>}
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

                <button
                    type="submit"
                    disabled={isPending || !memoryName.trim() || !documentName.trim()}
                >
                    {isPending ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    );
}