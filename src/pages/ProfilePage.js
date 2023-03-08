import React from "react";
import { Button } from "react-bootstrap";
// import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <span>Profile Page</span>
            <Button variant="success" className="mx-2">Success</Button>

            <button className="btn btn-secondary">Secondary</button>
        </div>
    );
};

export default ProfilePage;