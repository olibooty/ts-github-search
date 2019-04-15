import * as React from "react";
import axios from 'axios';
import { urlBuilder } from './util';
// import { useRequest } from "./hooks";

export function App() {
    const [input, setInput] = React.useState('');
    const [repos, setRepos] = React.useState([]);

    const handleClick = e => {
        e.preventDefault();

        axios.get(urlBuilder({ language: input }))
            .then(({ data: { items } }) => setRepos(items));
    }

    return (
        <>
            <div>Search github</div>
            <input type="text" onChange={e => setInput(e.target.value) } />
            <button type="button" onClick={handleClick}>Search</button>

            {repos[0] && <div>{repos[0].language}</div>}

            {repos.map((repo, i) => {
                const { language, git_url, stargazers_count, full_name, description, created_at } = repo;

                return (
                    <div key={`${language}-${i}`}>
                        <a href={git_url}>{full_name}</a>
                        <p>{description}</p>
                        <p>Created: {created_at}</p>
                        <p>Stars: {stargazers_count}</p>
                    </div>
                )
            })}
        </>
    )
}
