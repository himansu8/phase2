import { useParams } from "react-router-dom"
function UserName() {
    let { username } = useParams();
    // `https://api.github.com/users/${username}`
    return (
        <>
            <h1>{username}</h1>
            <h2>{`https://api.github.com/users/${username}`}</h2>
        </>
    )
}

export default UserName