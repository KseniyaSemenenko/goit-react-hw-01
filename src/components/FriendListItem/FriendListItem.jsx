import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
    const colorStyle = {
        color: isOnline ? 'green' : 'red'
    };
    return (
    <div className={css.animalCardInfo}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.animalCardName}>{name}</p>
      <p style={colorStyle}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
