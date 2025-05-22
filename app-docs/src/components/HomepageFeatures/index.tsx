import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FaDownload } from 'react-icons/fa';

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
        The app enables citizens to quickly report urban incidents by taking a photo. AI automatically analyzes the image to classify the incident, generate a detailed description, and assess its severity. Users can then track the status of their reports with real-time notifications.
      </>
    ),
  },
  {
    title: 'Web Dashboard - City Control',
    Svg: require('@site/static/img/illustrations/website.svg').default,
    description: (
      <>
        The dashboard enables municipal operators to efficiently manage and monitor incidents by filtering reports by status and category, viewing them on a map, and accessing historical data. It incorporates geospatial indexing and AI-powered similarity analysis to group related reports, minimizing redundancy and improving response coordination.
      </>
    ),
  },
  {
    title: 'ATCLL Integration',
    Svg: require('@site/static/img/illustrations/AI.svg').default,
    description: (
      <>
        The platform’s capabilities were validated within the Aveiro Tech City Living Lab, leveraging the PIXKIT vehicle—equipped with cameras and sensors—to collect real-world data.
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

const deliverables = [
  {
    name: "M1 Presentation - Inception",
    date: "2025-02-25",
    file: "deliverables/M1-Inception.pdf",
  },
  {
    name: "M2 Presentation - Architecture",
    date: "2025-03-11",
    file: "deliverables/M2-Architecture.pdf",
  },
  {
    name: "Checkpoint I",
    date: "2025-03-25",
    file: "deliverables/Checkpoint I.pdf",
  },
  {
    name: "M3 Presentation - Prototype",
    date: "2025-04-15",
    file: "deliverables/M3-Prototype.pdf",
  },
  {
    name: "Checkpoint II",
    date: "2025-05-06",
    file: "deliverables/Checkpoint II.pdf",
  },
  {
    name: "Checkpoint III",
    date: "2025-05-20",
    file: "deliverables/Checkpoint III.pdf",
  },

];

const minutes = [
  {
    name: "Geospatial Problem",
    date: "2025-02-27",
    file: "minutes/1-Geospatial-Problem.pdf",
  },
  {
    name: "Submit Occurrence - Initial Diagram",
    date: "2025-03-06",
    file: "minutes/2-Submit-Occurrence-Initial-Diagram.pdf",
  },
  {
    name: "H3 Index Solution",
    date: "2025-03-13",
    file: "minutes/3-H3-Index-Solution.pdf",
  },
  {
    name: "Data Access Solution",
    date: "2025-03-13",
    file: "minutes/4-Data-Access-Solution.pdf",
  },
  {
    name: "First Meeting CMA",
    date: "2025-03-14",
    file: "minutes/5-First-Meeting-CMA.pdf"
  },
  {
    name: "MVP Completed",
    date: "2025-03-20",
    file: "minutes/6-MVP-Completed.pdf"
  },
  {
    name: "Kubernetes, Clustering and Real-Time Detection",
    date: "2025-04-17",
    file: "minutes/7-Kubernetes-Clustering-RealTime.pdf"
  },
  {
    name: "PIXKIT Integration",
    date: "2025-04-24",
    file: "minutes/8-H3-PIXKIT.pdf"
  },
  {
    name: "Second Meeting CMA",
    date: "2025-05-09",
    file: "minutes/9-Second-Meeting-CMA.pdf"
  },
  {
    name: "Kubernetes and Automatic Resolution",
    date: "2025-05-15",
    file: "minutes/10-Kubernetes-AutomaticResolution.pdf"
  }
];



function DeliverablesTable() {
  return (
    <section style={{ marginTop: '3rem' }}>
      <Heading as="h2">Deliverables</Heading>
      <table className="table" style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Name of the deliverable</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Date</th>
            <th style={{ textAlign: 'center', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Download</th>
          </tr>
        </thead>
        <tbody>
          {deliverables.map(({ name, date, file }, idx) => (
            <tr key={idx}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{name}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{date}</td>
              <td style={{ textAlign: 'center', padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${name} in new tab`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <FaDownload size={20} />
                </a>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function MinutesTable() {
  return (
    <section style={{ marginTop: '3rem' }}>
      <Heading as="h2">Minutes</Heading>
      <table className="table" style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Name of the minute</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Date</th>
            <th style={{ textAlign: 'center', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Download</th>
          </tr>
        </thead>
        <tbody>
          {minutes.map(({ name, date, file }, idx) => (
            <tr key={idx}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{name}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{date}</td>
              <td style={{ textAlign: 'center', padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${name} in new tab`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <FaDownload size={20} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <div
  className="container"
  style={{
    display: 'flex',
    gap: '4rem',
    marginTop: '3rem',
    justifyContent: 'center',   // centers horizontally
    maxWidth: '1000px',         // max width for the two tables together
    marginLeft: 'auto',         // center container horizontally
    marginRight: 'auto',
  }}
>
  <div style={{ flex: 1, minWidth: 0,  }}>
    <DeliverablesTable />
  </div>
  <div style={{ flex: 1, minWidth: 0 }}>
    <MinutesTable />
  </div>
</div>

    </>
  );
}
