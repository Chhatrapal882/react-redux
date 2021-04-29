import React from 'react'

function Header(props) {
    
    return (
        <div>
            <div className="addcart">
                <p className="addcartItem">{props.data.length}</p>
                <img src="https://www.pngkit.com/png/detail/525-5250945_supermarket-cctv-icon-supermarket-icon.png" alt="gd"></img>
                </div>
        </div>
    )
}
export default Header




