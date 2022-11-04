import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { BiSearchAlt } from "react-icons/bi";

const dropIn = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: {
      ease: "easeIn",
      duration: 0.15,
    },
  },
};

const SearchModal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.form
        onClick={(e) => e.stopPropagation()}
        className="modal"
        // onSubmit={}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          type="submit"
          className="w-[10%] h-full flex justify-center items-center py-2 px-1"
        >
          <BiSearchAlt size={20} />
        </button>

        <input
          type="search"
          placeholder="جستجو کنید..."
          className="w-[90%] rounded-tl-[4px] rounded-bl-[4px] p-3"
        />
      </motion.form>
    </Backdrop>
  );
};

export default SearchModal;
