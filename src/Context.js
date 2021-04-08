import { createContext, useState } from "react";

export const MyContext = createContext();
const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(2);
  const [searchURL, setSearchURL] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  /**
   * Fetch an object with Github jobs stored on it in object notation.
   */
  const fetchJobs = async () => {
    const results = await fetch(
      `https://cors.bridged.cc/https://jobs.github.com/positions.json?description=${description.replace(
        /[ \t]+/g,
        "+"
      )}&location=${location.replace(/[ \t]+/g, "+")}&full_time=${fullTime}`
    );
    const data = await results.json();
    setJobs(data);
  };

  const initialValues = {
    fetchJobs,
    jobs,
    setJobs,
    page,
    setPage,
    searchURL,
    setSearchURL,
    location,
    setLocation,
    description,
    setDescription,
    fullTime,
    setFullTime,
  };

  return (
    <MyContext.Provider value={initialValues}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
