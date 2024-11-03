export default function UserCart({user, toggleFollow}){
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <button onClick={() => toggleFollow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
    )
}