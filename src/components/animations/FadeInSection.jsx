import {motion} from "motion/react";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({children,className="",initial,animate}){
    const {ref,inView} = useInView({
        threshold:0.1,
        triggerOnce:true,
    });

    return(
        <motion.div
        ref={ref}
        initial={initial}
        animate={inView ? animate : initial}
        transition={{duration:0.6,ease:"easeInOut"}}
        className={className}
        >
            {children}
        </motion.div>
    );
}