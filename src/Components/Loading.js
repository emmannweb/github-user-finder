import React from 'react'
import loader from "../images/loader.gif";
const Loading = () => {
    return (
        <>
            <div className="loaderstyle">
                <div>
                    <img
                        src={loader}
                        alt="loading..."
                        style={{
                            position: "relative",
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            marginTop: "30px"
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Loading