
import { useSpring, animated } from '@react-spring/web';
import {useState} from "react";

const ProfessorAnimation = ({customcss}) => {
    const [playAnimation, setPlayAnimation] = useState(true);

    const styles = useSpring({
        from: { transform: 'translateX(0px)' },
        to: async (next) => {
            if (playAnimation) {
                await new Promise((resolve) => setTimeout(resolve, 26000));
                await next({ transform: 'translateX(-1000px)', config: { mass: 1, tension: 80, friction: 13  } });
                await new Promise((resolve) => setTimeout(resolve, 26000));
                await next({ transform: 'translateX(1000px)', config: { mass: 10, tension: 80, friction: 43  } });

                setPlayAnimation(false);            }
        },
        reset: playAnimation,
    });
    return <div style={{display: customcss}}> <animated.div  className={"professor"}  style={styles}><img src={"/src/assets/professor.svg"} /></animated.div></div>;
};

export default ProfessorAnimation;