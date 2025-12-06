'use client'

import { useState } from "react";
import { usePipeRun } from "../hooks/usePipe";
import { getMemories } from "../service/langbase/memories";
import { useQuery } from "@tanstack/react-query";
import { getPipes } from "../service/langbase/pipes";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [pipeName, setPipeName] = useState<string>("");
  const [memoryName, setMemoryName] = useState<string>("");
  const { mutate, isPending, error, data } = usePipeRun();

  const { data: memories, isLoading: isLoadingMemories } = useQuery({
    queryKey: ["memories"],
    queryFn: getMemories
  });

  const { data: pipes, isLoading: isLoadingPipes } = useQuery({
    queryKey: ["pipes"],
    queryFn: getPipes
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    if (!memoryName || !pipeName) return;

    mutate({
      name: pipeName,
      messages: [
        {
          role: 'user',
          content: prompt,
        }
      ],
      memory: [
        {
          name: memoryName
        }
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
            <label htmlFor="pipeSelect">Pipes</label>
            {isLoadingPipes ? (
              <span>Carregando...</span>
            ) : (
              <select
                id="pipeSelect"
                disabled={isLoadingPipes || isPending}
                value={pipeName}
                onChange={(e) => setPipeName(e.target.value)}
              >
                <option value="">Selecione um pipe</option>
                {pipes?.map((pipe, index) => (
                  <option key={index} value={pipe.name}>
                    {pipe.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="prompt">Prompt</label>
          <input
            type="text"
            id="prompt"
            disabled={isPending}
            placeholder="Digite seu prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {error && <span style={{ color: 'red' }}>{error.message}</span>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        <button type="submit" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>


  );
}