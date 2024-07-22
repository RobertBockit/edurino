import './EndScreen.css'

function EndScreen(){

    return <>
        <div className="pos-section">
            <img src="src/assets/box1.png" alt=""/>
            <img src="src/assets/box2.png" alt=""/>
            <img src="src/assets/box3.png" alt=""/>

        </div>
        <img className={"bottom-cover"} src="src/assets/bottom.svg" alt=""/>
        <img src="src/assets/edurino-fox-transparent.png" alt="" className="fox-end"/>
        <input type="text" className="end-input" placeholder={"email@example.com"}/>
        <a href="" className="end-button">Receive 15% Discount</a>
    </>

}


export default EndScreen