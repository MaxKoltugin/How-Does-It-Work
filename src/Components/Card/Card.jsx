import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./card.css";

const Card = ({ isVisible = true, delay = 0, img, text, id, type }) => {
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
          duration: 0.3,
        },
      });
    }
  }, [isVisible, isInView, delay, controls]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        height: isVisible ? "auto" : 0,
        y: isVisible ? 0 : 20,
        marginBottom: isVisible ? "20px" : 0,
        transition: {
          delay: delay,
          duration: 0.3,
        },
      }}
      whileHover={{
        y: -10, // Поднимаем карточку на 10px вверх
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Усиливаем тень
      }}
      className="card"
      style={{ overflow: "hidden" }}
    >
      <NavLink to={`/card/${type}/${id}`} className="card-link">
        <div className="card-content">
          <div className="card-img-wrapper">
            <img src={img} alt="card-img" className="card-img non-selectable" />
          </div>
          <div className="card-text-wrapper">
            <p className="card-text">{text}</p>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Card;
