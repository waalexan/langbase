'use client'

import { useCreateMemory } from "@/src/hooks/useMemory";
import { modelsList } from "@/src/struct/structs";
import { EmbeddingModels } from "langbase";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [embeddingModel, setEmbeddingModel] = useState<EmbeddingModels>("openai:text-embedding-3-large");
  const { mutate, isPending, error, data } = useCreateMemory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    mutate({
      name,
      embedding_model: embeddingModel,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome da memória</label>
          <input
            type="text"
            id="name"
            disabled={isPending}
            placeholder="ex: bobolo-memory"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="model">Modelo de Embedding</label>
          <select
            id="model"
            disabled={isPending}
            value={embeddingModel}
            onChange={(e: any) => setEmbeddingModel(e.target.value)}
          >
            {modelsList.map((model, index) => (
              <option key={index} value={model.value}>{model.name}</option>
            ))}
          </select>
        </div>

        {error && <span>{error.message}</span>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        <button type="submit" disabled={isPending}>
          {isPending ? "Criando memória..." : "Criar memória"}
        </button>
      </form>
    </div>
  );
}