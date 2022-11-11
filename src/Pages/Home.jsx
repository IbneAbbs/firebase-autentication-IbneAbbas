import React from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  useEffect
    (() => {
      let authToken = sessionStorage.getItem("auth");
      if (authToken) {
        navigate("/");
      }
      if (!authToken) {
        navigate("/login");
      }
    },[navigate]);

  const logout=()=>{
    sessionStorage.removeItem("auth");
    navigate('/login');
  }
  return (
    <>
       <section className="signin-sec">
        
        <div className="pt-5">
          <h2 className="text-center fw-bold">Home</h2>
        </div>
        
        <div className="container">
          <div className="row form-row">
            <div className="col-md-3 form-colmn1">
              
            </div>
            <div className="col-md-6 form-colmn2 py-5">
            <Button onClick={logout}>Logout</Button>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;
