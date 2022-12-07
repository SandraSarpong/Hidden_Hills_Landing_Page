import React from 'react'
import "./Team.css"

function Team() {
  return (
    <div className="main">
        <div className="profile-card">
            <div className="img">
                <img src='https://avatars.githubusercontent.com/u/70075737?v=4'/>
            </div>
            <div className="caption">
                <h3>Philip Ladzaka</h3>
                <p>Junior Software Engineer</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div className="profile-card">
            <div className="img">
                <img src="https://avatars.githubusercontent.com/u/90385305?v=4"/>
            </div>
            <div className="caption">
                <h3>Sandra Sarpong</h3>
                <p>Software Engineer</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div className="profile-card">
            <div className="img">
                <img src="https://avatars.githubusercontent.com/u/99338048?v=4"/>
            </div>
            <div className="caption">
                <h3>Lawrence Adams</h3>
                <p>Software Engineer</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team