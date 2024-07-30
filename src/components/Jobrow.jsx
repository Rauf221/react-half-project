import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const JobRow = ({ job, index }) => {
  return (
    <tr className="bg-gray-800 text-gray-200 border-b border-gray-700">
      <td className="py-3 px-6">{index}</td>
      <td className="py-3 px-6">{job?.title}</td>
      <td className="py-3 px-6">{job?.company}</td>
      <td className="py-3 px-6">{job?.location}</td>
      <td className="py-3 px-6">{job?.experience}</td>
      <td className="py-3 px-6">{job?.position}</td>
      <td className="py-3 px-6">
        <span className={`px-2 py-1 rounded ${job?.type === 'Full Time' ? 'bg-green-500' : job?.type === 'Part Time' ? 'bg-yellow-500' : job?.type === 'Freelance' ? 'bg-blue-500' : 'bg-purple-500'}`}>
          {job?.type}
        </span>
      </td>
      <td className="py-3 px-6">{job?.postedDate}</td>
      <td className="py-3 px-6">{job?.lastDate}</td>
      <td className="py-3 px-6">
        <span className={`px-2 py-1 rounded ${job?.status === 'Active' ? 'bg-green-500' : job?.status === 'New' ? 'bg-blue-500' : 'bg-red-500'}`}>
          {job?.status}
        </span>
      </td>
      <td className="py-3 px-6 flex justify-around">
        <button className="text-blue-500 hover:text-blue-300"><FaEye /></button>
        <button className="text-yellow-500 hover:text-yellow-300"><FaEdit /></button>
        <button className="text-red-500 hover:text-red-300"><FaTrash /></button>
      </td>
    </tr>
  );
}

export default JobRow;
