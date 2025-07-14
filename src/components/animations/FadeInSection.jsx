import {motion} from "motion/react";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({children,className=""}){
    const {ref,inView} = useInView({
        threshold:0.1,
        triggerOnce:true,
    });

    return(
        <motion.div
        ref={ref}
        initial={{opacity:0,y:100}}
        animate={inView?{opacity:1,y:0}:{}}
        transition={{duration:0.6,ease:"easeInOut"}}
        className={className}
        >
            {children}
        </motion.div>
    );
}