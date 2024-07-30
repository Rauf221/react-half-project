import React, { useEffect, useState } from 'react';
import JobRow from '../Jobrow';
import ReactPaginate from 'react-paginate';


const JobTable = () => {
  const [jobs, setJobs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(response => response.json())
      .then(data => {
        setJobs(data);
        setPageCount(Math.ceil(data.length / jobsPerPage));
      });
  }, [jobsPerPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === '' || job.status === statusFilter) &&
    (typeFilter === '' || job.type === typeFilter)
  );

  const paginatedJobs = filteredJobs.slice(currentPage * jobsPerPage, (currentPage + 1) * jobsPerPage);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 space-x-4">
       
        <div>
          <select 
            onChange={(e) => setJobsPerPage(Number(e.target.value))} 
            value={jobsPerPage}
            className="px-3 py-2 rounded bg-gray-800 text-gray-200"
          >
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="50">Show 50</option>
          </select>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Search for ..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="px-4 py-2 rounded bg-gray-800 text-gray-200"
          />
        </div>
        <div>
          <select 
            onChange={(e) => setStatusFilter(e.target.value)} 
            value={statusFilter}
            className="px-3 py-2 rounded bg-gray-800 text-gray-200"
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="New">New</option>
            <option value="Close">Close</option>
          </select>
        </div>
        <div>
          <select 
            onChange={(e) => setTypeFilter(e.target.value)} 
            value={typeFilter}
            className="px-3 py-2 rounded bg-gray-800 text-gray-200"
          >
            <option value="">Select Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Select time" 
            className="px-4 py-2 rounded bg-gray-800 text-gray-200"
          />
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-700 text-gray-300">
            <th className="py-3 px-6">No</th>
            <th className="py-3 px-6">Job Title</th>
            <th className="py-3 px-6">Company Name</th>
            <th className="py-3 px-6">Location</th>
            <th className="py-3 px-6">Experience</th>
            <th className="py-3 px-6">Position</th>
            <th className="py-3 px-6">Type</th>
            <th className="py-3 px-6">Posted Date</th>
            <th className="py-3 px-6">Last Date</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedJobs.map((job, index) => (
            <JobRow key={job.id} job={job} index={index + 1 + (currentPage * jobsPerPage)} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex justify-center space-x-1'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link px-3 py-1 rounded bg-gray-700 text-gray-200'}
          previousLinkClassName={'page-link px-3 py-1 rounded bg-gray-700 text-gray-200'}
          nextLinkClassName={'page-link px-3 py-1 rounded bg-gray-700 text-gray-200'}
          activeClassName={'active'}
          activeLinkClassName={'bg-green-500 text-white'}
        />
      </div>
    </div>
  );
}

export default JobTable;
