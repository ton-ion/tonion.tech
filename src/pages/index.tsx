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
          src="img/duck.png"
          className="w-[200px]"
          alt="logo-ton"
        />
        <Heading
          as="h1"
          className="hero__title text-secondary-700 max-w-[500px] mx-auto"
        >
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={clsx("flex gap-7 my-auto items-center", styles.buttons)}
        >
          <Tag svg={faCopy} title="npm install -g tonion" />

          <Link
            className="button button--lg bg-secondary-700 rounded-[20px] text-white hover:text-secondary-50"
            to="/docs"
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
    title: 'Invest in time, enjoy faster development.',
    description:'The Tonion offers a set of pre-implemented, standard and tested implementation of commonly used contracts and traits ready for customize, so you can focus on main logic.',
    svg: faCopy,
    sampleCode:`
    import "../imports/tonion/JettonMaster.tact";
    import "../imports/tonion/JettonWallet.tact";
    
    contract TonionJettonMaster with JettonMaster {
        total_supply: Int as coins;
        owner: Address;
        jetton_content: Cell;
        mintable: Bool;
        
        init(owner: Address, content: Cell){
            self.total_supply = 1000000;
            self.owner = owner;
            self.mintable = true;
            self.jetton_content = content;
        }
    
        override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
            return initOf TonionJettonWallet(owner_address, myAddress());
        }
    }`
  };

  

  return (
    <Layout
        title={`${siteConfig.title}`}
        description="Tonion will go into a meta tag in <head />"
      >
        <Head>
          <meta property="og:image" content="https://tonion.tech/img/banner.png" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <link rel="icon" href="https://tonion.tech/img/docusaurus.png" sizes="20" />
        </Head>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <HomepageSyntax {...syntaxData} />
        </main>
      </Layout>
  );
}
