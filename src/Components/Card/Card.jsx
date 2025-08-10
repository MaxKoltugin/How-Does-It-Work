import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./card.css";

const Card = ({ isVisible = true, delay = 0, img, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        height: isVisible ? "auto" : 0,
        transition: {
          delay: isVisible ? delay : 0,
          duration: 0.2,
        },
      });
    }
  }, [isVisible, isInView, delay, controls]);
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        height: isVisible ? "auto" : 0,
        y: isVisible ? 0 : 20,
        marginBottom: isVisible ? "20px" : 0,
        transition: {
          duration: 0.3,
          delay: isVisible ? delay : 0,
        },
      }}
      className="card"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="card-content">
        <div className="card-img-wrapper">
          <img src={img} alt="card-img" className="card-img" />
        </div>
        <div className="card-text-wrapper">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
