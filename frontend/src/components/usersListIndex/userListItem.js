export default function UsersListItem(props) {
    const user = props.user;
    return (
        <p className="user-details" onClick={() => props.onClick(user.id)}>
            <img src={user.avatar} alt={user.id} />
            {user.firstName} {user.lastName}
        </p>);
}