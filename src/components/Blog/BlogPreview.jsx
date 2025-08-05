import React, { useEffect, useState } from "react";
import "./BlogPreview.scss";

const images = {
  1: "/images/ux-principios.jpg",
  2: "/images/producto-digital.jpg",
  3: "/images/frontend-2025.jpg",
  4: "/images/uxui.jpg",
  5: "/images/testing.jpg",
  6: "/images/consultoria-efectiva.jpg",
};

function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Asumiendo que tu JSON está en public/posts.json
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 3)); // Guardamos solo las primeras 3 entradas
      })
      .catch((error) => {
        console.error("Error al cargar posts:", error);
      });
  }, []);

  if (posts.length === 0) return <p>Cargando posts...</p>;

  return (
    <section className="blog-preview" id="Blog">
      <br />
        <h2 className="blog-preview__title">Blog</h2>
        <div className="blog-preview__cards">
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={images[post.id]} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
    </section>
  );
}

export default BlogPreview;
