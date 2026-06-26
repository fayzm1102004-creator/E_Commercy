import React from 'react';
import styles from './Blog.module.css';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner7 from '../../images/banner7.jpg';
import banner8 from '../../images/banner8.jpg';
import banner9 from '../../images/banner9.jpg';
import { FaUser, FaRegCalendarAlt, FaComments } from 'react-icons/fa';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Best Fashion Trends of 2024",
      excerpt: "Discover the latest styles and fashion trends that are taking over the world this year. From vintage revivals to futuristic designs.",
      image: banner1,
      author: "Admin",
      date: "Oct 15, 2024",
      comments: 12,
      category: "Fashion"
    },
    {
      id: 2,
      title: "Top 10 Must-Have Accessories",
      excerpt: "Accessories can make or break an outfit. Check out our list of the top 10 must-have accessories for every wardrobe.",
      image: banner2,
      author: "Admin",
      date: "Oct 18, 2024",
      comments: 5,
      category: "Accessories"
    },
    {
      id: 3,
      title: "How to Build a Capsule Wardrobe",
      excerpt: "A capsule wardrobe is the secret to always having something to wear. Learn how to build a versatile and stylish capsule wardrobe.",
      image: banner3,
      author: "Admin",
      date: "Oct 20, 2024",
      comments: 8,
      category: "Lifestyle"
    },
    {
      id: 4,
      title: "Sustainable Fashion: Why It Matters",
      excerpt: "Sustainable fashion is more than just a trend. Discover why it matters and how you can make more eco-friendly choices.",
      image: banner7,
      author: "Admin",
      date: "Oct 22, 2024",
      comments: 24,
      category: "Eco-Friendly"
    },
    {
      id: 5,
      title: "Men's Fall Fashion Guide",
      excerpt: "Get ready for the cooler weather with our ultimate guide to men's fall fashion. Find out what pieces you need in your closet.",
      image: banner8,
      author: "Admin",
      date: "Oct 25, 2024",
      comments: 15,
      category: "Men's Fashion"
    },
    {
      id: 6,
      title: "The Return of 90s Fashion",
      excerpt: "The 90s are back and better than ever. Explore the biggest 90s trends that are making a huge comeback this season.",
      image: banner9,
      author: "Admin",
      date: "Oct 28, 2024",
      comments: 30,
      category: "Trends"
    }
  ];

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogHeader}>
        <h1>Our Latest News & Articles</h1>
        <p>Stay updated with the latest trends, tips, and news from our blog.</p>
      </div>

      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogCard}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.blogImage} />
              <span className={styles.categoryBadge}>{post.category}</span>
            </div>
            <div className={styles.blogContent}>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <ul className={styles.blogMeta}>
                <li><FaUser className={styles.metaIcon} /> {post.author}</li>
                <li><FaRegCalendarAlt className={styles.metaIcon} /> {post.date}</li>
                <li><FaComments className={styles.metaIcon} /> {post.comments} Comments</li>
              </ul>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              <button className={styles.readMoreBtn}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
