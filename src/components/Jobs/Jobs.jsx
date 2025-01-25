import './Jobs.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import { BsJournalText } from "react-icons/bs";
import ReactPaginate from 'react-paginate';



const Jobs = () => {
  const [data, setData] = useState([])
  const [originalData, setOriginalData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

      const jobPerPage = 10;
      const pageVisited = pageNumber * jobPerPage;
  
      const jobDisplay = data.slice(pageVisited, pageVisited + jobPerPage).map((job) => (
          <tr key={job._id}>
            <td>{job._id}</td>
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.type}</td>
            <td>{job.level}</td>
            <td>{job.location}</td>
          </tr>
      ));

      const pageCount = Math.ceil(data.length / jobPerPage);

      const changePage = ({ selected }) => setPageNumber(selected);

  useEffect(() => {
    axios.get('https://portal-backend-n73h.onrender.com/allJobs')
    .then(res => {
      setData(res.data.data.jobs)
      setOriginalData(res.data.data.jobs)
      console.log(res.data.data.jobs)
    })
    .catch(err => console.error('Error:', err))
  }, [])

  const searchJobs = () => {
    const searchedJobs = originalData.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setData(searchedJobs);
    setPageNumber(0); 
};
  return (
    <div className='user-wrapper'>
      <div className='user-title'>
        <div>
        <h3>Jobs</h3>
        <BsJournalText className='user-icon'  />
        </div>
        <div className='job-content-search'>
                    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit" onClick={searchJobs}>Search</button>
                </div>
      </div>
      <div className='job-table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Company</th>
              <th>Type</th>
              <th>Level</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            
            {
              data.length > 0 ? jobDisplay : "Server Error"}
            
              <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  activeClassName="paginate-active"
                  previousLinkClassName="paginationBtns"
                  nextLinkClassName="nextBtn"
                  containerClassName='pagination'
              />
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Jobs
