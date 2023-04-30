import { useState } from 'react'

import styles from  './styles/App.module.scss'
import Aside from "./components/aside/Aside.jsx";
import About from "./components/aboutMe/About.jsx";
import Target from "./components/target/Target.jsx";
import Education from "./components/education/Education.jsx";
import Skills from "./components/skills/Skills.jsx";
import Languages from "./components/languages/Languages.jsx";
import Experience from "./components/experience/Experience.jsx";
import Connection from "./components/connection/Connection.jsx";
import LayOut from "./ui/lauOut/LayOut.jsx";

function App() {

  return (
    <LayOut className={styles.container}>
      <Aside/>
      <About/>
      <Target/>
      <Education/>
      <Skills/>
      <Languages/>
      <Experience/>
      <Connection/>
    </LayOut>
  )
}

export default App
