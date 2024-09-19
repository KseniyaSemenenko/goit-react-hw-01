import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css"; 

export default function FriendList({ friends }) {
  return (<ul className={css.listAnimal}>
    {friends.map((friend) => {
       return <li className={css.listAnimalItem} key={friend.id}>
           <FriendListItem
               avatar={friend.avatar}
               name={friend.name}
               isOnline={friend.isOnline} />
        </li>
      
    })}
  </ul>);
}
