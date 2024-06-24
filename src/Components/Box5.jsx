import React from 'react'
import "./Box.css"


const Box5 = () => {
    return (
        <div className="container-card-trade">
            <div className="container-card-parent">
                <div className="container-card">
                    <span className="container-card-first-line">
                        Apple Card
                    </span>
                    <span className="container-card-second-line">
                        Get up to 3% Daily Cash back with every purchase.
                    </span>
                    <div className="button-card">
                        <button>Learn More</button>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
            <div className="container-trade-parent">
                <div className="container-trade">
                    <span className="container-trade-first-line">
                        Apple Trade In
                    </span>
                    <span className="container-trade-second-line">
                        Get $170-$630 in credit when you trade in iPhone 11 or higher.
                    </span>
                    <div className="button-trade">
                        <button>Get your estimate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box5
