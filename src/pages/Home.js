import { useContext } from "react";
import styles from "./Home.module.css";
import Header from "../components/header/Header";
import { MyContext } from "../Context";
import Card from "../components/card/Card";

const Home = () => {
  const { jobs } = useContext(MyContext);
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.jobsContainer}>
        {jobs.map((job) => (
          <Card job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
