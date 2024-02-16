import React from "react";
import "./loader.css";
function Loader() {
    return (
        <div className='loader'>

            <div className='loader-dot'></div>
            <div className='loader-dot'></div>
            <div className='loader-dot'></div>
            <div className='loader-dot'></div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100"
                height="50"><rect fill="#FFF" width="100%" height="100%" /><linearGradient id="a11"><stop offset="0" stop-color="#FF156D" stop-opacity="0"></stop><stop offset="1" stop-color="#FF156D"></stop></linearGradient><circle fill="none" stroke="url(#a11)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg> */}
        </div>
    )
}

export default Loader;