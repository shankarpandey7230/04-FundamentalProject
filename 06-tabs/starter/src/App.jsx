import React, { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // Current Item
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  // console.log(jobs);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer jobs={jobs} />
      {/* jobs info*/}
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
