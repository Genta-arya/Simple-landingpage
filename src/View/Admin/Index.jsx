import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Component/SideBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const token = localStorage.getItem("token");


    if (!token) {
      navigate("/login-admin");
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      navigate("/akses-ditolak");
    }
  }, [isMobile, navigate]);

  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
};

export default Dashboard;