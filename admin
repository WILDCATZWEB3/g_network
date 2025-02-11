import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const uploadLesson = async () => {
    await addDoc(collection(db, "lessons"), { title, content });
    alert("Lesson added!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <button onClick={uploadLesson} className="p-2 bg-green-500 text-white">
        Upload Lesson
      </button>
    </div>
  );
}
