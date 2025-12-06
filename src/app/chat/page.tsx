'use client'

import { usePipe } from 'langbase/react';

export default function ChatComponent() {
    const {
        stop,
        input,
        error,
        messages,
        threadId,
        isLoading,
        regenerate,
        setMessages,
        sendMessage,
        handleSubmit,
        handleInputChange,
    } = usePipe({
        stream: true,
        apiRoute: '/api/langbase',
        onResponse: (message) => {
            console.log('Nova resposta:', message);
        },
        onFinish: (messages) => {
            console.log('Conversa finalizada:', messages);
        },
        onError: (error) => {
            console.error('Erro no chat:', error);
        },
        initialMessages: [
            { role: 'assistant', content: 'Hello! How can I help you?' },
            { role: 'user', content: 'Who is an AI engineer?' },
        ],
    });

    return (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={{ minHeight: 300, border: '1px solid #ccc', padding: 10, overflowY: 'auto' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ margin: '8px 0' }}>
                        <strong>{msg.role === 'assistant' ? 'AI' : 'You'}:</strong> {msg.content}
                    </div>
                ))}
                {isLoading && <div><em>Typing...</em></div>}
            </div>

            {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                style={{ marginTop: 10, display: 'flex', gap: 5 }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    style={{ flex: 1, padding: 8 }}
                />
                <button type="submit" disabled={isLoading}>Send</button>
                <button type="button" onClick={stop} disabled={!isLoading}>Stop</button>
                <button type="button" onClick={regenerate} disabled={isLoading || messages.length === 0}>Regenerate</button>
            </form>
        </div>
    );
}