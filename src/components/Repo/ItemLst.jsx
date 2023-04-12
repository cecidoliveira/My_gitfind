import { TitleRepo } from "./RepoStyles";
import { useUserStore } from "../../store/User";
import { useEffect, useState } from 'react';

function ItemList() {
    const { user } = useUserStore(state => state);
    
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchRepositories() {
            const response = await fetch(`https://api.github.com/users/${user}/repos`);
            const data = await response.json();
            setRepositories(data);
        }

        fetchRepositories();
    }, [user]);

    return (
        <>
            {repositories.map(repo => (
                <TitleRepo key={repo.id} href={repo.html_url} target="_blank">{repo.name}</TitleRepo>
            ))}
        </>
        
    )
}
  
export default ItemList;
  