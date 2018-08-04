import React from "react";
import {Link} from "react-router-dom";

const HomePage = ()=>(
    <div className="jumbotron center">
        <h1 className="lead">Welcome to Media Search</h1>
        <div>
            <Link to="search">
                <button className="btn btn-lg btn-primary"> Go Search</button>
            </Link>
        </div>
    </div>
);

export default HomePage;