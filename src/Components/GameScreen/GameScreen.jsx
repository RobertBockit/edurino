import './GameScreen.css'
import FoxAnimation from './FoxAnimations.jsx'
import CloudAnimation from './CloudAnimations.jsx'
import ProfessorAnimation from "./ProfessorAnimation.jsx";
import {useCallback, useEffect, useState} from "react";
import {useLocation} from "wouter";

function GameScreen(){
    const [location, setLocation] = useLocation();
    const [startAnimation, setStartAnimation] = useState(false);
    const [profDisplay, setProfDisplay] = useState("block");

    let overallScore = 0

    useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true);
        }, 52000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setProfDisplay("none");
        }, 52000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLocation("/end")
        }, 60000);
    }, []);

    const Square = () => {
        const [isDragging, setIsDragging] = useState(false);
        const [offsetX, setOffsetX] = useState(0);
        const [offsetY, setOffsetY] = useState(0);
        const [position, setPosition] = useState({ top: 1500, left: 500 });

        const handleMouseDown = (e) => {
            setIsDragging(true);
            console.log("client x", e.clientX)
            console.log("pos left", position.left)

            setOffsetX(e.clientX - position.left);
            setOffsetY(e.clientY - position.top);

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        const handleMouseMove = (e) =>
        {

            console.log("dragging")
            console.log("setting left to: ", e.clientX - offsetX)
            setPosition({
                left: e.clientX - offsetX,
                top: e.clientY - offsetY,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);

            if(position.left >= 1){
                score += 1
            }
        };

        return (
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "red",
                    zIndex: "10",
                    position: "absolute",
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    cursor: "grab",
                }}
                onMouseDown={handleMouseDown}
            >

            </div>
        );
    };
    const Diamond = () => {
        const [isDragging, setIsDragging] = useState(false);
        const [offsetX, setOffsetX] = useState(0);
        const [offsetY, setOffsetY] = useState(0);
        const [position, setPosition] = useState({ top: 1300, left: 350 });

        const handleMouseDown = (e) => {
            setIsDragging(true);
            console.log("client x", e.clientX)
            console.log("pos left", position.left)

            setOffsetX(e.clientX - position.left);
            setOffsetY(e.clientY - position.top);

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        const handleMouseMove = (e) =>
        {

            console.log("dragging")
            console.log("setting left to: ", e.clientX - offsetX)
            setPosition({
                left: e.clientX - offsetX,
                top: e.clientY - offsetY,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        return (
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "yellow",
                    zIndex: "10",
                    transform: "rotate(45deg)",
                    position: "absolute",
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    cursor: "grab",
                }}
                onMouseDown={handleMouseDown}
            >

            </div>
        );
    };

    const Circle = () => {
        const [isDragging, setIsDragging] = useState(false);
        const [offsetX, setOffsetX] = useState(0);
        const [offsetY, setOffsetY] = useState(0);
        const [position, setPosition] = useState({ top: 1300, left: 600 });

        const handleMouseDown = (e) => {
            setIsDragging(true);
            console.log("client x", e.clientX)
            console.log("pos left", position.left)

            setOffsetX(e.clientX - position.left);
            setOffsetY(e.clientY - position.top);

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        const handleMouseMove = (e) =>
        {

            console.log("dragging")
            console.log("setting left to: ", e.clientX - offsetX)
            setPosition({
                left: e.clientX - offsetX,
                top: e.clientY - offsetY,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        return (
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "green",
                    zIndex: "10",
                    borderRadius: "100px",
                    position: "absolute",
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    cursor: "grab",
                }}
                onMouseDown={handleMouseDown}
            >

            </div>
        );
    };



    return <div className={"root1"}>
            <p id="play-game" className={startAnimation ? 'fade-in' : ''}>
                Match the Shapes
            </p>
        <Square/>
        <Circle/>
        <Diamond/>
        <div className={"pic"}>
            <div id={"square-form"}>

            </div>
            <div id={"circle-form"}>

            </div>
            <div id={"diamond-form"}>

            </div>
            <img className={"svg2"} src={"/src/assets/game-bg.svg"}/>
        </div>

        <FoxAnimation/>
        <CloudAnimation/>
        <ProfessorAnimation customcss={profDisplay}/>

    </div>
}


export default GameScreen