import projectsConfig from "../projects.config";
import getRepoStats from "./get-repo-stats";
import getIssues from "./get-repo-issues";
import getPulls from "./get-repo-pulls";
import getRepoBranches from "./get-repo-branches";

export default async function getAllRepoStats() {
  return await Promise.all(
    projectsConfig.projects.map(async (project) => {
      const [stats, issues, pulls, branches] = await Promise.all([
        getRepoStats(project.git),
        getIssues(project.git),
        getPulls(project.git),
        project.vercel ? getRepoBranches(project.git, project.vercel) : Promise.resolve([])
      ]);

      return {
        ...project,
        stats,
        issues: issues || [],
        pulls: pulls || [],
        branches: branches || []
      };
    })
  );
}
