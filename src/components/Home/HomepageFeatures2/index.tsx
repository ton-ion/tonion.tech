import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLock,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";

type FeatureItem = {
  title: string;
  Svg: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to use",
    Svg: faCode,
    description: (
      <>
        You don't need to be an expert to use Tonion toolkit. All fo our tools
        are readable and well documented.
      </>
    ),
  },
  {
    title: "Accessible from NPM (Soon)",
    Svg: faNpm,
    description: (
      <>
        Tonion offers a robust CLI tool for managing/building Tact and TON
        projects. Tonion CLI is accessible from NPM.
      </>
    ),
  },
  {
    title: "Secure",
    Svg: faLock,
    description: (
      <>All Tonion contract and tools are strongly tested on each change!</>
    ),
  },
  ,
  {
    title: "Secure",
    Svg: faLock,
    description: (
      <>All Tonion contract and tools are strongly tested on each change!</>
    ),
  },
  ,
  {
    title: "Secure",
    Svg: faLock,
    description: (
      <>All Tonion contract and tools are strongly tested on each change!</>
    ),
  },
  ,
  {
    title: "Secure",
    Svg: faLock,
    description: (
      <>All Tonion contract and tools are strongly tested on each change!</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text-center padding-horiz--md ">
        <div className="bg-secondary-100 rounded-full w-[50px] h-[50px] p-4 mb-5 ">
          <FontAwesomeIcon icon={Svg} className="ttext-secondary-600 dark:text-secondary-900 size-5" />
        </div>

        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures2(): JSX.Element {
  return (
    <section className={clsx(styles.features, "m-auto")}>
      <div className="container m-auto justify-center"> 
      <div className="md:max-w-[400px] w-full mx-auto justify-center">
            <h2 className="text-center "> How Tonion Team Can Help You?</h2>
          <p className="text-gray-500 text-center">
            A responsive documentation template built for everyone who wants to
            create a plugin.
          </p>
          </div>
        <div className="row">
         
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
