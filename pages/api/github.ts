import { graphql } from '@octokit/graphql'

export const githubApi = () => {
  const endpoint = 'https://api.github.com/graphql'
  const token = process.env.GIT_KEY ?? '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'

  return graphql.defaults({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export const githubUser = async () => {
  const graphql = githubApi()

  const {
    viewer: {
      login,
      avatarUrl,
      contributionsCollection
    }
  } = await graphql(`{
    viewer {
      login
      avatarUrl
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              color
              contributionCount
            }
          }
        }
      }
    }
  }`)
  console.log(login)

  return { login, avatarUrl, contributionsCollection }
}