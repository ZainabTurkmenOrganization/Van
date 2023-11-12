import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans. So let's go to the travel around the world and, see amazing things with our families and friends.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip. So let's joing us.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};