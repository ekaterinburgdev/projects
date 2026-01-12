import { Octokit } from "octokit";
import projectsConfig from "../projects.config";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

export default async function getRepoStats(repo) {
  const owner = projectsConfig.organization;

  try {
    const repoData = await octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo,
    });

    const activityData = await octokit.request(
      "GET /repos/{owner}/{repo}/stats/commit_activity",
      {
        owner,
        repo,
      }
    );

    const contributorsData = await octokit.request(
      "GET /repos/{owner}/{repo}/contributors",
      {
        owner,
        repo,
      }
    );

    return {
      activity: (activityData.data || []).map(week => ({
        total: week.total,
        week: week.week,
        days: week.days
      })),
      contributors: (contributorsData.data || []).map(c => ({
        login: c.login,
        contributions: c.contributions,
        avatar_url: c.avatar_url,
        html_url: c.html_url
      })),
      repository: {
        name: repoData.data.name,
        stargazers_count: repoData.data.stargazers_count,
        forks_count: repoData.data.forks_count,
        description: repoData.data.description,
        html_url: repoData.data.html_url
      },
    };
  } catch (e) {
    return { activity: [], contributors: [], repository: {} };
  }
}