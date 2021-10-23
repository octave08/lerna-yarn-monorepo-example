import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Button } from "my-ui";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>lerna-nextjs-storybook</title>
      </Head>
      <div>lerna-nextjs-storybook</div>
      <Button>Hello World</Button>
    </div>
  );
};

export default Home;
