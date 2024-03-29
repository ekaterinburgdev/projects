# Projects

List of Ekaterinburg Code projects updated in real-time.

**[projects.ekaterinburg.dev](https://projects.ekaterinburg.dev)**

## Content

The project data is edited in the [projects.config.js](https://github.com/ekaterinburgdev/projects/edit/main/projects.config.js)

```js
{
    organization: 'ekaterinburgdev',
    projects: [
        {
            title: 'Project name',
            url: 'https://link.ekaterinburg.dev',
            icon: 'icon.svg',
            git: ['repo-name'], // Repositories groups (front-end, back-end, etc)
            vercel: 'vercel-deployment-domain',
            links: [
                {
                    'name': 'Figma',
                    'url': 'https://figma.com/link-to-design'
                },
                ...
            ]
        },
        ...
    ]
}
```

## Development

1. Add `.env.local` with [GitHub Access Token](https://github.com/settings/tokens) for GitHub with `scope` with access to `repo` permission

```
GITHUB_TOKEN=<github-access-token>
```

2. Install [Node.js](https://nodejs.org/en/download/) and [pnpm](https://www.npmjs.com/package/pnpm#user-content-install)

3. Install dependencies

```
pnpm i
```

4. Run local server

```
pnpm dev
```

## Tools

- [Next.js](https://nextjs.org/)
- [Vercel Serverless](https://vercel.com/)
- [Oktokit](https://www.npmjs.com/package/octokit)
