import styles from "./Slots.module.css";
import TimeAgo from "../TimeAgo";
import { isDeadBranch } from "../usecases/metrics";

export function DeadBranchesSlots({ project }) {
  const branches = (project.branches || []).filter((item) => isDeadBranch(item.date));

  if (!branches.length) return <p>No dead branches</p>;

  return (
    <ul className={styles.slots}>
      {branches.map(
        ({
          branch,
          slotUrl,
          date,
          commitMessage,
          commitUrl,
          commitAuthor,
          commitAuthorAvatar,
        }) => (
          <li className={styles.slot} key={commitUrl}>
            <a
              href={commitUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.slot__link}
            >
              {branch}, <TimeAgo date={date} />
            </a>

            {slotUrl && (
              <a 
                href={slotUrl} 
                target="_blank" 
                rel="noreferrer" 
                className={styles.slot__preview} 
                aria-label="Branch preview"
              ></a>
            )}

            <div className={styles.slot__info}>
              {commitAuthor && (
                <>
                  <a
                    href={`https://github.com/${commitAuthor}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={commitAuthorAvatar}
                      className={styles.slot__avatar}
                      alt=""
                    />
                    {commitAuthor}
                  </a>
                  :
                </>
              )}{" "}
              <i>{commitMessage}</i>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
