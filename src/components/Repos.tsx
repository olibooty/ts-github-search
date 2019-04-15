import * as React from 'react';
import { urlBuilder } from '../util';
import axios from 'axios';

// export const useReq = (): any => {
//     const [data, setData] = useState();


// }

interface LanguageTile {
    language: string
}

export function LanguageTile({language}: LanguageTile) {
    const [repos, setRepos] = React.useState();

    React.useEffect(() => {
        axios.get(urlBuilder({ language }))
            .then(({ data: { items } }) => setRepos(items));
        // (async () => {
        //     const { data } = await axios.get(urlBuilder({ language }));
        //     console.log('is it being set?')
        //     setData(data);
        // })();
    }, [language]);

    return <Repos repos={repos} />
}






interface Props {
    repos: Repos[]
}

interface Repos {
    language: string;
    git_url: string;
    stargazers_count: string;
    full_name: string;
    description: string;
    created_at: DateConstructor;
}

export function Repos({ repos }: Props) {
    return (
        <>
            {repos[0] && <div>{repos[0].language}</div>}

            {repos.map(repo => {
                const { git_url, stargazers_count, full_name, description, created_at } = repo;

                return (
                    <div>
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