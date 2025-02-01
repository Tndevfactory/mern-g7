import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import { motion } from "motion/react";

const Posts = () => {
  const { log, error } = console;
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [pMin, setPMin] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [metaData, setMetaData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetPosts = () => {
    setLoading(true);
    fetch(`http://localhost:3000/posts?_page=${page}&_per_page=${perPage}`)
      .then((res) => res.json())
      .then((data) => {
        //log(data);

        setMetaData(data);
        setPosts(data.data);
        setPages(data.pages);
        setLoading(false);
      })
      .catch((err) => error(err));
  };

  const handlePrevPage = () => {
    if (metaData.prev) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (metaData.next) {
      setPage((prev) => prev + 1);
    }
  };
  const handleClick = (i) => {
    let pArray = Array.from({ length: 5 }, (_, i) => pMin + i);
    setPage(pMin + i);
  };

  const handlePerPage = () => {
    setPerPage((prev) => prev + 10);
  };

  useEffect(() => {
    handleGetPosts();
    // log(pMin + 4);
    // log(page);
    // log(pages);
    // if (page == pMin + 4) {
    //   log("limit reached");
    //   if (pages - page == 1) {
    //     setPMin((prev) => prev + 1);
    //   } else {
    //     setPMin((prev) => prev + 4);
    //   }
    // }
    log(page);
    log(metaData);
  }, [page, pages, perPage]);

  return (
    <div className="p-4">
      <h3 className="text-xl">Posts</h3>
      <div className="flex flex-wrap gap-4 ">
        {posts.map((v, i) => (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            // animate={{
            //   scale: 1,
            //   opacity: 1,
            //   transition: { duration: 1.2 },
            // }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            key={i}
          >
            <img className="h-24 rounded" src={v.imgUrl} alt={v.title} />
            <div className="flex justify-between px-1 ">
              <span> ID: {v.id}</span>
              <span> {v.views}</span>
            </div>
            <div className=" p-1 ">
              <span className="text-xs font-light capitalize">{v.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <div
        id="pagination"
        className="flex justify-end items-center px-2 gap-1 flex-wrap mt-4"
      >
        <button
          disabled={metaData.prev == null}
          onClick={handlePrevPage}
          className={`p-1 disabled:bg-white disabled:text-gray-200 bg-gray-100 border rounded px-2 hover:bg-gray-200`}
        >
          <ChevronLeft size={20} />
        </button>
        {Array.from({ length: 5 }, (_, i) => (
          <button
            onClick={() => handleClick(i)}
            key={i}
            className={`p-1  ${
              page == pMin + i
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "bg-gray-100 hover:bg-gray-200"
            }   border rounded px-2 `}
          >
            {pMin + i}
          </button>
        ))}
        <button
          disabled={metaData.next == null}
          onClick={handleNextPage}
          className={`p-1 disabled:bg-white disabled:text-gray-200 bg-gray-100 border rounded px-2 hover:bg-gray-200`}
        >
          <ChevronRight size={20} />
        </button>
      </div> */}
      <div className="flex justify-center items-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          disabled={metaData.next == null || loading}
          onClick={handlePerPage}
          className="bg-blue-500 flex justify-center  disabled:bg-blue-200 disabled:text-gray-200  hover:bg-blue-600 text-white px-2 p-1 rounded min-w-96"
        >
          {loading ? (
            <LoaderCircle size={20} className=" animate-spin" />
          ) : metaData.next == null ? (
            "Fin de produits"
          ) : (
            "Afficher plus"
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Posts;
