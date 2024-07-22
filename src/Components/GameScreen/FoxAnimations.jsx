
import { useSpring, animated } from '@react-spring/web';
import {useState} from "react";

const FoxAnimation = () => {
    const [playAnimation, setPlayAnimation] = useState(true);

    const styles = useSpring({
        from: { transform: 'translateX(0px)' },
        to: async (next) => {
            if (playAnimation) {
                await next({ transform: 'translateX(-1000px)', config: { mass: 1, tension: 80, friction: 13  } });
                await new Promise((resolve) => setTimeout(resolve, 25000));
                await next({ transform: 'translateX(1000px)', config: { mass: 10, tension: 80, friction: 43  } });

                setPlayAnimation(false);
            }
        },
        reset: playAnimation,
    });
    return <animated.div  className={"fox2"}  style={styles}><img src={"/src/assets/edurino-fox-transparent.png"} /></animated.div>;
};

export default FoxAnimation;