import styles from "./Slots.module.css";

export function IssuesSlots({ project }) {
  const issues = project.issues || [];

  if (!issues.length) return <p>No issues</p>;

  return (
    <ul className={styles.sections}>
      <li className={styles.section}>
        <ul className={styles.slots}>
          {issues.map(({ title, url }) => (
            <li className={styles.slot} key={url}>
              <a href={url} target="_blank" rel="noreferrer" className={styles.slot__link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
