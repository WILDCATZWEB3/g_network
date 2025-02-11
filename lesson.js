import { useEffect, useState } from "react";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("/api/lessons")
      .then(res => res.json())
      .then(data => setLessons(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Learning Modules</h1>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index} className="p-2 border-b">
            <h2 className="text-xl">{lesson.title}</h2>
            <p>{lesson.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
