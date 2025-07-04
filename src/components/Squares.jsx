/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const Squares = ({ props, isProject }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-2 sm:px-0">
        {props.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative p-6 md:p-8 flex flex-col gap-4 text-left w-full max-w-[320px] rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:shadow-indigo-200 transition-shadow duration-300 my-4 hover:bg-indigo-100 hover:border-indigo-200 cursor-pointer"
            onClick={() => openModal(item)}
          >
            <span className="text-lg font-bold text-indigo-500 group-hover:text-indigo-600 transition-colors break-words">
              {item.number && `${item.number}`}
              {item.url && (
                <>
                  {" | "}
                  <a
                    href={item.url}
                    onClick={(e) => e.stopPropagation()}
                    className="underline hover:text-indigo-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link_text}
                  </a>
                </>
              )}
            </span>
            <h3 className="text-gray-900 text-2xl font-semibold leading-snug break-words">
              {item.title || ""}
            </h3>

            <p className="text-gray-700 font-medium text-base break-words">
              {item.highlight || ""}
            </p>

            {item.book && (
              <div className="flex justify-center w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-48 object-contain mx-auto"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-500/50 p-4 sm:p-8 overflow-auto"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-lg w-full relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
                aria-label="Close modal"
              >
                ×
              </button>
              <h3 className="text-lg font-bold mb-4">{selectedItem.title}</h3>
              <p className="text-gray-700 mb-4">
                {selectedItem.description_text}
              </p>
              {selectedItem.img && (
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="mx-auto max-h-60 object-contain rounded"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Squares;
