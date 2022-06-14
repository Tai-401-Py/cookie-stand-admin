import {useRouter} from 'next/router';
import { useResource } from '../hooks/useResource';

export default function StandDetail() {

    const router = useRouter()
    const id = parseInt(router.query.id)

    const {resources, error } = useResource()
    
    if (!resources || error) {
        return (
            <h1>An error has occoured, either resource doesn't exist or an error has been caught</h1>
        )
    }   else {
        const resource =resources.find(item => item.id === id)
        return <p>{JSON.stringify(resource)}</p>
    }

}