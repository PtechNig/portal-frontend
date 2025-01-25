import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Home.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { IoLocationSharp } from "react-icons/io5";
import { TbBrandPushbullet } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const jobPerPage = 5;
    const pageVisited = pageNumber * jobPerPage;

    const jobDisplay = data.slice(pageVisited, pageVisited + jobPerPage).map((job) => (
        <div key={job.id} className='home-card'>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p><TbBrandPushbullet className='card-icon' /> Company: {job.company}</p>
            <p><TbBrandPushbullet className='card-icon' /> Level: {job.level}</p>
            <p><TbBrandPushbullet className='card-icon' /> Job Type: {job.type}</p>
            <div>
                <p><IoLocationSharp className='card-icon' /> {job.location}</p>
                <Link to={'application'} > Apply Now</Link>
            </div>
        </div>
    ));

    const pageCount = Math.ceil(data.length / jobPerPage);

    const changePage = ({ selected }) => setPageNumber(selected);

    useEffect(() => {
        axios.get('https://portal-backend-n73h.onrender.com/allJobs')
            .then((res) => {
                setData(res.data.data.jobs);
                setOriginalData(res.data.data.jobs);
            })
            .catch((err) => console.error('Error:', err));
    }, []);

    const filter = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setData(originalData); 
        } else {
            const filteredJobs = originalData.filter(job => job.title.toLowerCase() === category.toLowerCase());
            setData(filteredJobs);
        }
        setPageNumber(0); 
    };

    const searchJobs = () => {
        const searchedJobs = originalData.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setData(searchedJobs);
        setPageNumber(0); 
    };

    return (
        <div>
            <Nav />
            <div className='home-container'></div>
            <div className='home-contents'>
                <div className='home-content-btn'>
                    <button
                        
                        onClick={() => filter('All')}>
                        All
                    </button>
                    {[ 'Frontend', 'Backend', 'Cyber Security', 'DevOps', 'UI/UX'].map(category => (
                        <button
                            key={category}
                            onClick={() => filter(category)}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className='home-content'>
                    { data.length > 0 ? jobDisplay : "Server Error"}
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
                </div>
                <div className='home-content-search'>
                    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit" onClick={searchJobs}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
