import { useState } from 'react'

import './App.scss'
import Aside from "./components/aside/Aside.jsx";
import About from "./components/aboutMe/About.jsx";

function App() {

  return (
    <article className="container">


      <Aside/>
      <About/>
      {/*<section className="aboutMe">*/}
      {/*  <h2 className="list_h2 text"> Личные данные </h2>*/}
      {/*  <ul>*/}
      {/*    <li className="text">Возраст: 23 года</li>*/}
      {/*    <li className="text">*/}
      {/*      <address> Адрес проживания: г. Витебск ул. Фрунзе 22/2 кв. 42</address>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</section>*/}

      <Target/>

      {/*<section className="target">
        <h2 className="list_h2 text">Цель</h2>
        <p className="item text"> Получение должности Front-End разработчика </p>
      </section>*/}

      <Education/>

      {/*<section className="education">
            <h2 className="list_h2 text">Образование</h2>
            <p className="item text"> 2017 – 2021 гг. - Международный государственный экологический университет им.
              А.Д.Сахарова</p>
            <p className="item text">Специальность:Информационные системы и технологии</p>
            <p className="item text">Квалификация: Инженер-программист. Эколог</p>
    </section>*/}

      <Skills/>

      {/*<section className="skills">
        <h2 className="list_h2 text">Профессиональные навыки и знания</h2>
        <ul>
          <li className="text">Знание HTML5, CSS/SASS/LESS, опыт адаптивной и кроссбраузерной верстки;</li>
          <li className="text">Знание JS, PHP.</li>
        </ul>
  </section>*/}

      <Languages/>

      {/*<section className="languages">
        <h2 className="list_h2 text">Языки</h2>
        <ul>
          <li className="text">Русский;</li>
          <li className="text">Английский – В1;</li>
          <li className="text">Испанский – В1.</li>
        </ul>
</section>*/}

      <Experience/>

      {/*<section className="experience">
        <h2 className="list_h2 text">Опыт работы </h2>
        <p className="item text">"Главный расчетный информационный центр" Белорусской железной дороги. С 2021 до 2023
          гг.</p>
        <p className="item text"> Должность: инженер-программист.</p>
        <p className="item text">Должностные обязанности:Сопровождение программы SAP Enhancement Package 7 for ERP 6.0.Единая корпоративная интегрированная система управления финансами и ресурсами. </p>
      </section>*/}

      <Connection/>

      { /*<section className="connection">

        <h2 className="list_h2_connection text"> Обращайтесь по любым вопросам </h2>
        <form className="input_name--position">
          <input className="input_name_connection" type="text" placeholder="Full Name (required)"/>
        </form>
        <form className="input_email--position">
          <input className="input_email_connection" type="text" placeholder="Your Email (required)"/>
        </form>

        <p className="message text">Your Message</p>

        <form className="input_message--position">
          <textarea className="input_message"> </textarea>
        </form>

        <div className="button_connection">

          <button id="contactButton"></button>

        </div>


    </section>*/}

    </article>
  )
}

export default App
