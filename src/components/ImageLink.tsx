import { motion } from "framer-motion";
import { ImageLink } from "../data/ImageLink";

export default function ImageLinkComponent() {
  return (
    <div className="w-1/1">
      <motion.div
        className="flex gap-4"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {ImageLink.map((link) => (
          <img
            key={link}
            src={`/public/${link}`}
            alt=""
            width="50px"
            className=""
          />
        ))}
      </motion.div>
    </div>
  );
}
