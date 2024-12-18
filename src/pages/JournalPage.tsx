import React from "react";
import "../index.css"; // Importa o CSS atualizado

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: "Presented with Commentary.",
      subtitle: "Big Picture • 13 SEP 2024",
      description:
        "From deep dives into process with filmmakers and academic lectures to drunken hijinks and actors refusing to break character, Justin LaLiberty examines the many values of audio commentaries past, present and future.",
      author: "JUSTIN LALIBERTY",
      image: "/bigpicture.jpg",
    },
    {
      id: 2,
      title: "I’m a Star!",
      subtitle: "Community • 1 OCT 2024",
      description:
        "As spooky season officially begins, the Letterboxd crew scares up twenty-plus of our favorite horror performances—from Shelley Duvall and Claude Rains to Nicole Kidman and Snoop Dogg.",
      author: "LETTERBOXD CREW",
      image: "/community.jpg",
    },
    {
      id: 3,
      title: "Taken for Granted.",
      subtitle: "Interview • 8 NOV 2024",
      description:
        "With Heretic now in theaters, Hugh Grant takes Mia Lee Vicino through his filmography, from Maurice to Bridget Jones and an anecdote about Quentin Tarantino.",
      author: "MIA LEE VICINO",
      image: "/interview.jpg",
    },
    {
      id: 4,
      title: "Happy Together.",
      subtitle: "Big Picture • 26 JUL 2024",
      description:
        "For Art House Theater Day, filmmakers and industry folk share eight community-building ideas to center the collective cinematic experience.",
      author: "GEMMA GRACEWOOD",
      image: "/bigscreen.jpg",
    },
  ];

  return (
    <div className="journal-container">
      <h1 className="journal-title">Journal</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
        }}
      >
        {posts.map((post) => (
          <div key={post.id} className="journal-card">
            <img src={post.image} alt={post.title} className="journal-image" />
            <div style={{ padding: "15px" }}>
              <p className="journal-subtitle">{post.subtitle}</p>
              <h2 className="journal-heading">{post.title}</h2>
              <p className="journal-description">{post.description}</p>
              <p className="journal-author">{post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
