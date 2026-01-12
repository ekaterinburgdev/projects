import styles from "./Slots.module.css";

export function PullsSlots({ project }) {
  const pulls = project.pulls || [];

  if (!pulls.length) return <p>No pull requests found</p>;

  return (
    <ul className={styles.slots}>
      {pulls.map(({ title, url }) => (
        <li className={styles.slot} key={url}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.slot__link}
          >
            {title}
          </a>
          <div className={styles.slot__info}>{project.stats?.repository?.language}</div>
        </li>
      ))}
    </ul>
  );
}
