import React, {useEffect, useState} from "react";
import './BlogPreview.scss';

function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  //Consumo de API propia con async-await y try-catch
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        setLoading(true); 
        const response = await fetch("/blogData.json"); 

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 2000));
        setPosts(data.slice(0, 3));
      } catch (err) {
        setError("No se pudo cargar el contenido. Intentar de nuevo.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
      };
      fetchPosts();
    }, []);

    //Manejo de estados
    if (loading) return <p className="loading">Cargando contenido...</p>;
    if (error) return <p className="error">{error}</p>;
    if (posts.lenght === 0) return <p>No hay contenido disponible.</p>;

    //Renderiza el contenido obtenido de la API
    return (
      <section className="blog-preview" id="Blog">
        <h2 className="blog-preview__title">Blog</h2>
        <div className="blog-preview__cards">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <img 
                src={post.image.startsWith('/') ? post.image : `/${post.image}`}
                alt={post.title}
                onError={(e) => e.target.src = '/images/default-image.jpg'}
              />
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <span className="category">{post.category}</span>
            </article>
        ))}
        </div>
      </section>
    );
  }

  export default BlogPreview;