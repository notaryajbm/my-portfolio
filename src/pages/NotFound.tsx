import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404: user attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#1e1e2e] overflow-hidden">
      {/* subtle grid background */}
      <div
        className="pointer-events-none select-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* blurred floating blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-[#f5bde6] rounded-full filter blur-3xl opacity-30 top-[-10%] left-[-10%]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-[#89b4fa] rounded-full filter blur-3xl opacity-20 bottom-[-10%] right-[-10%]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* main text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold text-[#f5bde6] mb-2 select-none">404</h1>
        <p className="text-xl text-[#a6adc8] mb-5">nothing here, trust me.</p>
        <motion.a
          href="/"
          className="inline-block px-6 py-3 bg-[#89b4fa] text-[#1e1e2e] font-semibold rounded-lg hover:bg-[#f2cdcf] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          go home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
