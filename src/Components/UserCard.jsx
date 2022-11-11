// Your code goes here
// do a default export
const UserCard = ({ name, avatar, posts, followers, address }) => {
  return (
    <div>
      <img src={avatar} alternate={name} />
    </div>
  );
};
export default UserCard;
