import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.containerTaskOne}>
      <div className={css.avatarMainInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.avatarName}>{name}</p>
        <p className={css.avatarText}>@{tag}</p>
        <p className={css.avatarText}>{location}</p>
      </div>

      <ul className={css.listActive}>
        <li className={css.listActiveItem}>
          <span className={css.activeName}>Followers</span>
          <span className={css.activeNumbers}>{stats.followers}</span>
        </li>
        <li className={css.listActiveItem}>
          <span className={css.activeName}>Views</span>
          <span className={css.activeNumbers}>{stats.views}</span>
        </li>
        <li className={css.listActiveItem}>
          <span className={css.activeName}>Likes</span>
          <span className={css.activeNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
