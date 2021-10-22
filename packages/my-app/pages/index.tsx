import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import myUi from 'my-ui'

const Home: NextPage = () => {
  myUi()
  return (
    <div className={styles.container}>
      <Head>
        <title>lerna-nextjs-storybook</title>
      </Head>
      <div>lerna-nextjs-storybook</div>
    </div>
  )
}

export default Home
