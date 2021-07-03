import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as github from './api/github'
import {instanceOf} from "prop-types";
import {useEffect, useState} from "react";

declare type GithubUser = {
  login?: string
  avatarUrl?: string
  contributionsCollection?: {
    contributionCalendar?: {
      totalContributions: number
      weeks?: [{
        contributionDays?: [{
          date?: Date
          color?: string
          contributionCount?: number
        }]
      }]
    }
  }
}

const getCalendar = (user: GithubUser) => {
  console.log(user)
  const contributionCalendar = user.contributionsCollection.contributionCalendar
  const calendarComponent = contributionCalendar.weeks.map(w => {
    const td = w.contributionDays.map(d => {
      return (
        <td>
          <div style={{backgroundColor: d.color}}>
            {d.date}: {d.contributionCount}
          </div>

        </td>
      )
    })
    return (
      <tr>
        {td}
      </tr>
    )
  })
  return calendarComponent
}

export default function Sub() {
  const defaultGithubUser: GithubUser = {}
  const [user, setUser] = useState(defaultGithubUser)
  const [calendar, setCalendar] = useState((<div>default</div>))
  useEffect(() => {
    const getUser = async () => {
      const user = await github.githubUser()
      console.log(user)
      setUser(user)
    }
    getUser().then()

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>tossy_yukky vercel blog sub</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        sub page
        <div>
          <img src={user.avatarUrl} alt=""/>
          {user.login}
          {user.contributionsCollection.contributionCalendar.totalContributions}
          <table>
            {user.contributionsCollection.contributionCalendar.weeks.map(w => {
              return (
                <tr>
                  <td>{w.contributionDays.map(d => {
                    return (
                      <td>
                        <div style={{backgroundColor: d.color}}>
                          {d.date}
                        </div>

                      </td>
                    )
                  })}</td>
                </tr>
              )
          })}
          </table>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
        </a>
      </footer>
    </div>
  )
}
