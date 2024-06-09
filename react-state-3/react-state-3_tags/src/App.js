import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);

    // setTags((tags) => [...tags, newTag]);
  }

  function handleDeleteTag(tagToDelete) {
    //setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
    const tagsToKeep = tags.filter((tag) => {
      return tag !== tagToDelete;
    });

    setTags(tagsToKeep);
  }
  return (
    <main className="app">
      <Form handleAddTag={handleAddTag} />
      <List tags={tags} handleDeleteTag={handleDeleteTag} />
    </main>
  );
}
