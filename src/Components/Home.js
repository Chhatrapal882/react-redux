import React from 'react'

function Home(props) {
    
    console.log("props",props);
    return (
        <div>
            
            <h1>Home component</h1>
            <div className="container" id="cont">
                <div className="imageWrapper">
                    <img src="https://images.macrumors.com/article-new/2017/09/iphonexdesign-800x669.jpg" />
                </div>
                <div className="textWrapper">
                    <span>I-phone</span>
                    <span>price:$1000</span>
                </div>
                <div className="btn">
                    <button onClick={(e)=>props.addToCartHandler({Name:"chahtrapal",sirName:"Tanwar"})}>Add</button>
                    <button onClick={()=>props.removeToCartHandler()}>Remove</button>
                </div>
            </div>

        </div>
    )
}
export default Home



