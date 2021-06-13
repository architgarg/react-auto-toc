import React from "react";

import TableOfContents from "@react/table-of-contents";
import "@react/table-of-contents/dist/index.css";
import styles from "./App.module.css";

const App = () => {
  const demoData = "So you two dig up, dig up dinosaurs? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.\n" +
    "\n" +
    "Must go faster. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! Life finds a way. Hey, you know how I'm, like, always trying to save the planet? Here's my chance." +
    "So you two dig up, dig up dinosaurs? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.\n" +
    "\n" +
    "Must go faster. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! Life finds a way. Hey, you know how I'm, like, always trying to save the planet? Here's my chance." +
    "So you two dig up, dig up dinosaurs? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.\n" +
    "\n" +
    "Must go faster. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! Life finds a way. Hey, you know how I'm, like, always trying to save the planet? Here's my chance." +
    "So you two dig up, dig up dinosaurs? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.\n" +
    "\n" +
    "Must go faster. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! Life finds a way. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.";


  return <div className={styles.container}>
    <div className={styles.content}>
      <h2 id="test">Testing</h2>
      <p>{demoData}</p>

      <h2 id="test1">Testing 1</h2>
      <p>{demoData}</p>

      <h3 id="test2">Nested 2</h3>
      <p>{demoData}</p>

      <h3 id="test3">Nested 3</h3>
      <p>{demoData}</p>

      <h2 id="test4">Testing 4</h2>
      <p>{demoData}</p>
    </div>

    <nav className={styles.tocContainer}>
      <TableOfContents className={styles.toc}/>
    </nav>
  </div>;
};

export default App
