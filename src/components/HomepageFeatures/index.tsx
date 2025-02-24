import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mobile App - Smart Incident Reporting',
    Svg: require('@site/static/img/illustrations/mobile.svg').default,
    description: (
      <>
        The app allows citizens to quickly report urban incidents taking a picture. AI suggests descriptions and users can track the status of their reports with real-time notifications.
      </>
    ),
  },
  {
    title: 'Web Dashboard - City Control & Management',
    Svg: require('@site/static/img/illustrations/website.svg').default,
    description: (
      <>
        The dashboard helps municipal operators manage and monitor incidents, filter by status, view them on a map, and access historical data for efficient response coordination.
      </>
    ),
  },
  {
    title: 'AI & ATCLL Integration',
    Svg: require('@site/static/img/illustrations/AI.svg').default,
    description: (
      <>
        The platform uses AI and computer vision to classify urban incidents with IoT sensors, cameras, and autonomous vehicles, and connects to Aveiro Tech City Living Lab for scalability and interoperability.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
