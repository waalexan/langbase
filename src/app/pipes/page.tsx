'use client'

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMemories } from "@/src/service/langbase/memories";
import { useCreatePipe } from "@/src/hooks/usePipe";
import { modelsLangbaseList } from "@/src/struct/structs";

export default function Home() {
  const [systemInstruction, setSystemInstruction] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [pipeName, setPipeName] = useState<string>("");
  const [memoryName, setMemoryName] = useState<string>("");
  const { mutate, isPending, error, data } = useCreatePipe();

  const { data: memories, isLoading: isLoadingMemories } = useQuery({
    queryKey: ["memories"],
    queryFn: getMemories
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!systemInstruction.trim()) return;
    if (!memoryName || !pipeName) return;

    mutate({
      name: pipeName,
      model: model,
      messages: [
        {
          role: 'system',
          content: systemInstruction
        }
      ],
      memory: [
        { name: memoryName }
      ]
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="memorySelect">Memórias</label>
            {isLoadingMemories ? (
              <span>Carregando...</span>
            ) : (
              <select
                id="memorySelect"
                disabled={isLoadingMemories || isPending}
                value={memoryName}
                onChange={(e) => setMemoryName(e.target.value)}
              >
                <option value="">Selecione uma memória</option>
                {memories?.map((memory, index) => (
                  <option key={index} value={memory.name}>
                    {memory.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label htmlFor="pipeName">Nome do Pipe</label>
            <input
              type="text"
              id="pipeName"
              disabled={isPending}
              placeholder="Digite o nome do pipe"
              value={pipeName}
              onChange={(e) => setPipeName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="model">Modelo de Embedding</label>
            <select
              id="model"
              disabled={isPending}
              value={model}
              onChange={(e) => setModel(e.target.value as string)}
            >
              {modelsLangbaseList.map((model, index) => (
                <option key={index} value={model.value}>{model.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="prompt">system Instruction</label>
            <input
              type="text"
              id="prompt"
              disabled={isPending}
              placeholder="Digite seu prompt"
              value={systemInstruction}
              onChange={(e) => setSystemInstruction(e.target.value)}
            />
          </div>

          {error && <span style={{ color: 'red' }}>{error.message}</span>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

          <button type="submit" disabled={isPending}>
            {isPending ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}