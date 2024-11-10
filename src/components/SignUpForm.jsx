import { useEffect, useState } from "react";



export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        // console.log("Hello");

        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({ username, password })
                }
            );
            // if(!response.ok){
            //     throw new Error("Failed to sign up")
            // }
            const result = await response.json();
            setToken(result.token)
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label className="useName">
                    Username:{" "}
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </label>

                <br />
                <label className="password">
                    Password:{" "}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <br />

                <button className="button">Submit</button>
            </form>

        </>
    );
}