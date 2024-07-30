import React, { useEffect, useState } from 'react';
import JobRow from './JobRow';

const JobTable = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);
}
  return 
