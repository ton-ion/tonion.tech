import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Home/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import CodeDisplay from "../components/SyntaxHighlighter/CodeDisplay";
import Tag from "../components/Tag";
import HomepageSyntax from "../components/Home/HomepageSyntax";
import Head from "@docusaurus/Head";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("", styles.heroBanner)}>
      <div className="container">
        <img
          src="img/Ton-logo-red.png"
          className="rounded-full w-[65px]"
          alt="logo-ton"
        />
        <Heading
          as="h1"
          className="hero__title text-gray-700 max-w-[500px] mx-auto"
        >
          {siteConfig.title}
          <span className="text-secondary-700 ml-1">
            {siteConfig.customFields.title2}
          </span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={clsx("flex gap-7 my-auto items-center", styles.buttons)}
        >
          <Tag svg={faCopy} title="npm install -g ton" />

          <Link
            className="button button--lg bg-secondary-700 rounded-[20px] text-white hover:text-secondary-50"
            to="/docs/welcome"
          >
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const syntaxData = {
    title: 'Derive your API experience using efficient manner.',
    description:'You can use this section to introduce your plugin with a sample code block on the right side. This will be a minimal implementation step.',
    svg: faCopy,
    sampleCode:`import React from 'react';

    const HelloWorld = () => {
      return <div>Hello, World!</div>;
    };
    
    export default HelloWorld;`
  };

  

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tonion will go into a meta tag in <head />"
    >
       <Head>
        <meta property="og:image" content="https://tonion.tech/img/Ton-logo-red.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSyntax {...syntaxData} />
      </main>
    </Layout>
  );
}
