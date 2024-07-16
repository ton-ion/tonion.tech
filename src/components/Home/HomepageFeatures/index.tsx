import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faChartLine,faCube, IconDefinition, faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/fontawesome-free-solid';
import { faNpm } from '@fortawesome/free-brands-svg-icons';


type FeatureItem = {
  title: string;
  Svg: IconDefinition;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to use',
    Svg: faCode,
    description: (
      <>
       You don't need to be an expert to use Tonion toolkit. All fo our tools are readable and well documented.
      </>
    ),
  },
  {
    title: 'Accessible from NPM (Soon)',
    Svg: faNpm,
    description: (
      <>
      Tonion offers a robust CLI tool for managing/building Tact and TON projects. Tonion CLI is accessible from NPM.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: faLock,
    description: (
      <>
       All Tonion contract and tools are strongly tested on each change!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <div className='bg-secondary-100 rounded-full w-[50px] h-[50px] p-4 mb-5'>
           <FontAwesomeIcon icon={Svg} className='text-secondary-600 size-5 '/>
        </div>
     
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
