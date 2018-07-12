import React from "react";
import {Link} from "react-router-dom";

const HomePage = ()=>(
    <div className="jumbotron center">
        <h1 className="lead">Welcome to Media Lib</h1>
        <div>
            <Link to="library">
                <button className="btn btn-lg btn-primary"> Visit Library</button>
            </Link>
        </div>
    </div>
);

export default HomePage;