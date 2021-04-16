import React from 'react'
import { Link } from 'react-router-dom'
import HomeNavbar from './HomeNavbar'

const Home=()=> {
    return (
        <div>
            <HomeNavbar />
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
                flexWrap:"wrap",
            }}>
                <div className="card">
                    <Link to="/allNotices"><h1>Notice</h1></Link>
                </div>
                <div className="card">
                    <Link to="/allDatesheets"><h1>Datesheet</h1></Link>
                </div>
                <div className="card">
                    <Link to="/allSyllabus"><h1>Syllabus</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
