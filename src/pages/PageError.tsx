import { motion } from "framer-motion";

export default function PageError() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transitionDuration: "1s" }}
    >
      Error 404
    </motion.h1>
  );
}
