import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faChartLine,faCube, IconDefinition } from '@fortawesome/free-solid-svg-icons';


type FeatureItem = {
  title: string;
  Svg: IconDefinition;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Expressive API',
    Svg: faCode,
    description: (
      <>
       You don't need to be an expert to use our plugin. Our expressive API is readable and well documented.
      </>
    ),
  },
  {
    title: 'Highly performant',
    Svg: faChartLine,
    description: (
      <>
      You can make sure your website or app is highly performant with a <code>built-in</code>  system to help you optimize.
      </>
    ),
  },
  {
    title: 'No dependencies',
    Svg: faCube,
    description: (
      <>
       Our plugins do not have any external dependencies so our plugin has the minimal footprint possible.
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
