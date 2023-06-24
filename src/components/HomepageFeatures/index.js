import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '前端技能樹',
    Svg: require('@site/static/img/homepage/frontend_illustrator.svg').default,
    description: (
      <>
        HTML / CSS / JS
        <br />
        TypeScript
        <br />
        React
        <br />
        Material-UI
        <br />
        React Query
        <br />
        Apollo Client
      </>
    ),
  },
  {
    title: '後端技能樹',
    Svg: require('@site/static/img/homepage/backend_illustrator.svg').default,
    description: (
      <>
        Node.js
        <br />
        Express
        <br />
        Socket.IO
        <br />
        GraphQL
        <br />
        SQL / MongoDB
        <br />
        ORM( Prisma,Sequelize,Mongoose )
        <br />
        Crawler( puppeteer,cheerio.io )
        <br />
        Swagger
      </>
    ),
  },
  {
    title: '其他',
    Svg: require('@site/static/img/homepage/other_illustrator.svg').default,
    description: (
      <>
        Git / Git Flow
        <br />
        GitHub Actions
        <br />
        Docker
        <br />
        Continuous Deployment
        <br />
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
