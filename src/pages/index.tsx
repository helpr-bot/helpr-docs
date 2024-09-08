import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <div className={styles.main}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
      </div>
      <div className={styles.sub}>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs">
          Jump to Docs
        </Link>
      </div>
    </Layout>
  );
}
