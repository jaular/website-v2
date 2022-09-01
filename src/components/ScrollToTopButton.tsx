import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  const updateScrollToTop = () => {
    if (window.pageYOffset > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollToTop);

    return () => {
      window.removeEventListener("scroll", updateScrollToTop);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollToTop && (
        <button
          className="fixed z-30 p-2 text-black rounded outline-none bg-gray-100/50 right-4 bottom-4 sm:right-6 sm:bottom-6 lg:right-8 lg:bottom-8 dark:text-white hover:bg-gray-200/50 focus:bg-gray-200/50 dark:bg-black-600/50 dark:hover:bg-black-700/50 dark:focus:bg-black-700/50"
          onClick={scrollTop}
          aria-label="Back to the top"
        >
          <ChevronUpIcon className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
