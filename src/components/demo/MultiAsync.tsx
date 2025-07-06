import React, { useEffect, useState } from "react";

function MultiAsync() {
    const [responses, setResponses] = useState({ data1: null, data2: null, data3: null });
    const [error, setError] = useState(false);

    useEffect(() => {
        multipleAsyncCalls();
    }, []);

    const multipleAsyncCalls = async () => {
        try {
            const results = await Promise.allSettled([
                fetch("https://jsonplaceholder.typicode.com/todos/1"),
                fetch("https://jsonplaceholderrrrr.typicode.com/todos/2"), // Typo in URL
                fetch("https://jsonplaceholder.typicode.com/todos/3"),
            ]);

            const data1 = results[0].status === "fulfilled" ? await results[0].value.json() : results[0].reason.toString();
            const data2 = results[1].status === "fulfilled" ? await results[1].value.json() : results[1].reason.toString();
            const data3 = results[2].status === "fulfilled" ? await results[2].value.json() : results[2].reason.toString();

            setResponses({ data1, data2, data3 });

            // Set error flag if any API fails
            if (results.some((result) => result.status === "rejected")) {
                setError(true);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <>
            <h1>Multiple async calls</h1>
            {error && <p>Some API calls failed. Showing available data:</p>}
            <div>
                <h2>Response 1:</h2>
                <pre>{JSON.stringify(responses.data1)}</pre>
            </div>
            <div>
                <h2>Response 2:</h2>
                <pre>{JSON.stringify(responses.data2)}</pre>
            </div>
            <div>
                <h2>Response 3:</h2>
                <pre>{JSON.stringify(responses.data3)}</pre>
            </div>
        </>
    );
}

export default MultiAsync;