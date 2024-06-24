import React from 'react'
import "./Box.css"

const Box3 = () => {
    return (
        <div className="container-ipad-mac">
            <div className="container-ipad-parent">
                <div className="container-ipad">
                    <span className="container-ipad-first-line">
                        iPad Pro
                    </span>
                    <span className="container-ipad-second-line">
                        Unbelievably thin. Incredibly&nbsp;powerful.
                    </span>
                    <div className="button-ipad">
                        <button>Learn More</button>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
            <div className="container-mac-parent">
                <div className="container-mac">
                    <span className="container-mac-first-line">
                        MacBook Air
                    </span>
                    <span className="container-mac-second-line">
                        Lean. Mean. M3 machine.
                    </span>
                    <div className="button-mac">
                        <button>Learn More</button>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box3
