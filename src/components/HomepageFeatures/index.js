import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "소개",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>안녕하세요? 컴퓨터공학부 3학년 재학 중인 학생입니다!</>,
  },
  {
    title: "연락처",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Email: kwonjh0406@gmail.com</>,
  },
  {
    title: "관심 기술",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Spring Boot, RDBMS(ORACLE, MySQL), Nextjs, JAVA, REACT, NginX, Docker</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
