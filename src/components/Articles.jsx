import React, { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../App.css";
import imagen from "../assets/medium.jpg";
const Articles = () => {
  const mediumUrl = "https://medium.com/feed/@brugosofi";

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setArticles(data.items);
      });
  }, []);

  return (
    <section className="py-20 px-6 w-full">
      <div className="mx-auto text-center">
        <motion.div
          key={""}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Articles</h2>
          <div className="space-y-8 flex flex-col gap-2 justify-around">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-4 md:p-8 flex flex-col justify-between text-left w-full shadow-4xl shadow bg-white rounded-2xl"
              >
                <div className="flex gap-3 mb-4">
                  <img src={imagen} className="w-5 rounded-full"></img>
                  <a
                    href="https://medium.com/@brugosofi"
                    className="text-black"
                  >
                    <p className="text-xs">{article.author}</p>
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Tags:
                  {article.categories.map((category, index) => (
                    <a href={`#${category}`} key={index}>
                      {category}
                      {index < article.categories.length - 1 && ", "}
                    </a>
                  ))}
                </p>
                <a href="https://medium.com/@brugosofi/legal-problems-of-information-technologies-and-what-to-know-as-a-professional-400ed5ad4c10">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
