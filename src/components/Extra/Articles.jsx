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
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          key=""
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Articles</h2>

          <div className="flex flex-col gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-6 md:p-8 text-left w-full bg-white rounded-2xl shadow-md transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={imagen}
                    alt="Author"
                    className="w-6 h-6 rounded-full"
                  />
                  <a
                    href="https://medium.com/@brugosofi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-700 hover:underline"
                  >
                    {article.author}
                  </a>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {article.title}
                </h3>

                <p className="mb-3 text-sm text-gray-600">
                  Tags:{" "}
                  {article.categories.map((category, i) => (
                    <span key={i}>
                      <a
                        href={`#${category}`}
                        className="hover:underline text-gray-800"
                      >
                        {category}
                      </a>
                      {i < article.categories.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  Read more →
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
