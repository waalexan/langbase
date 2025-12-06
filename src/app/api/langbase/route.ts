import {Langbase, RunResponse} from 'langbase';
import {NextRequest} from 'next/server';

export async function POST(req: NextRequest)
{
    const options = await req.json();

    // 1. Initiate the Pipe.
    const langbase = new Langbase({
        apiKey: process.env.LANGBASE_API_KEY!,
    });

    if (options.stream) {
        const {stream, threadId} = await langbase.pipes.run({
            ...options,
            stream: true,
            name: 'langbase-teste',
        });

        return new Response(stream, {
            status: 200,
            headers: {
                'langbase-thread-id': threadId ?? '',
            },
        });
    } else {
        const response = (await langbase.pipes.run({
            ...options,
            stream: false,
            name: 'langbase-teste',
        })) as unknown as RunResponse;

        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                'langbase-thread-id': response.threadId ?? '',
            },
        });
    }
}
