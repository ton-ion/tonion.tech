import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Home/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Tag from "../components/Tag";
import HomepageSyntax from "../components/Home/HomepageSyntax";
import Head from "@docusaurus/Head";
import HomepageFeatures2 from "../components/Home/HomepageFeatures2";
import OurSponsors from "../components/Home/OurSponsors";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const handleClick = () => {
    navigator.clipboard.writeText(tag.title);
  };
  const tag = {
    svg: faCopy,
    title: "npm install -g tonion",
    onClick: handleClick,
  };
  return (
    <header className={clsx("", styles.heroBanner)}>
      <div className="container">
        <img src="img/duck.png" className="w-[120px]" alt="logo-ton" />
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
          <Tag {...tag} />

          <Link
            className="button button--lg bg-secondary-700 rounded-[20px] text-white hover:!text-gray-950"
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
    title: "Invest in time, enjoy faster development.",
    description:
      "The Tonion offers a set of pre-implemented, standard and tested implementation of commonly used contracts and traits ready for customize, so you can focus on main logic.",
    svg: faCopy,
    sampleCode: `
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
    }`,
  };

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Reusable smart contract library and toolkit for the TON and Tact language."
    >
      <Head>
        <title>TON Documentation - Reusable smart contract library</title>
        <meta
          property="og:title"
          content="TON Documentation  - Reusable smart contract library"
        ></meta>
        <meta
          property="og:image"
          content="https://tonion.tech/img/banner.png"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta name="smartContract" content="index, follow"></meta>
      </Head>
      <HomepageHeader />
      <main className="flex flex-col gap-10">
        <HomepageFeatures />
        <div className="my-[32px]">
           <HomepageSyntax {...syntaxData}  />
        </div>
       {/* <HomepageFeatures2/> */}
       <OurSponsors/>
      </main>
    </Layout>
  );
}
