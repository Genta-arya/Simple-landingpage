import React, { useState, useEffect } from "react";
import axios from "axios";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Home/Component/Footer";
import HeaderJob from "./Component/Header";
import { FaShare } from "react-icons/fa";
import "../../../src/Style/JobList.css";

function getRandomImageURL(width, height) {
  const imageId = Math.floor(Math.random() * 1084) + 1;
  return `https://picsum.photos/id/${imageId}/${width}/${height}`;
}

function formatPostDate(dateString) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
}

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [shareURL, setShareURL] = useState("");
  const [jobsFound, setJobsFound] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      const options = {
        method: "GET",
        url: "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest",
        headers: {
          "X-RapidAPI-Key":
            "21e1329a04msh1832a7cd198a847p13af6fjsn4f624b3ba71b",
          "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.status === 200) {
          const formattedJobs = response.data.data.map((job) => ({
            ...job,
            postDate: formatPostDate(job.postDate),
          }));
          setJobs(formattedJobs);
          setJobsFound(filteredJobs.length > 0);
          setLoading(false);
        } else {
          setError(`Error: ${response.status}`);
          setLoading(false);
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShare = (url) => {
    setShareURL(url);
    if (navigator.share) {
      navigator
        .share({
          title: "Share this job",
          text: "Check out this job opportunity!",
          url: url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Share failed:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div>
      <HeaderJob />

      <div className="mx-4 my-8 bg-gray-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-300 ">
          <h2 className="text-3xl font-bold job-list-heading">Job List</h2>
        </div>
        <div className="custom-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          {loading ? (
            <div className="loader-container ">
              <div className="custom-loader">
                <div className="loader" />
              </div>
            </div>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-red-600 col-span-3 text-center no-matching-jobs-message">
              No jobs match your search.
            </p>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="custom-card">
                <div className="card-inner ">
                  <div className="card-face">
                    <img
                      src={getRandomImageURL(300, 300)}
                      alt="Job Image"
                      className="w-24 h-24 rounded-full mb-4 mx-auto"
                    />
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-500 text-center">{job.company}</p>
                    <p className="text-gray-400 text-center text-xs mt-2">
                      Posted: {job.postDate}
                    </p>
                  </div>
                  <div className="card-face card-back ">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gray-700 text-white py-2 rounded hover:bg-gray-800 "
                    >
                      Apply
                    </a>
                  </div>
                  <div className="relative">
                    <FaShare
                      className="absolute  text-gray-600 cursor-pointer hover:text-gray-800 "
                      title="Share"
                      onClick={() => handleShare(job.url)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
      {showScrollButton && (
        <button
          className="fixed bottom-12 right-10 w-14 h-14 bg-gray-700 text-white flex items-center justify-center  rounded-full cursor-pointer hover:bg-gray-500"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default JobList;
