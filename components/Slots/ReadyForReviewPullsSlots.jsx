import styles from "./Slots.module.css";

export function ReadyForReviewPullsSlots({ project }) {
  const pulls = project.pulls || [];
  const readyForReview = pulls.filter((p) => p.reviewers && p.reviewers.length > 0);

  if (!readyForReview.length) return <p>No requests for review</p>;

  return (
    <ul className={styles.slots}>
      {readyForReview.map(({ title, url }) => (
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
