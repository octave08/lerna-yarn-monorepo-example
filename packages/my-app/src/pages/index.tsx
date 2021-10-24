import type { NextPage } from 'next'
import Head from 'next/head'

import styles from './home.module.css'

import { Button } from 'my-ui'

const Home: NextPage = () => {
  const hello = 0
  return (
    <div className={styles.container}>
      <Head>
        <title>lerna-nextjs-storybook</title>
      </Head>
      <div>lerna-nextjs-storybook</div>
      <Button onClick={() => alert('clicked')}>Hello World</Button>
    </div>
  )
}

export default Home
