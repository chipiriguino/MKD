import React from "react";
import "./Home.css";
import Navegation from "../components/Nav";
import Footer from "../components/Footer";
import Article from "../components/Article";
import Main from "../components/Main";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export default function Home() {
  return (
    <body>
      <nav>
        <Navegation />
      </nav>
      <article><Article/></article>
      <main><Main/></main>
      <header>header</header>
      <section>section</section>
      <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={350}
              EasingType="easeOutCubic"
              AnimationDuration={500}
              ContainerClassName="ScrollUpButton__Container"
              TransitionClassName="ScrollUpButton__Toggled"
              style={{ width: 39, height: 39 }}
              ToggledStyle={{ bottom: 70, right: 10 }}
            />
      <footer>
        <Footer />
      </footer>
    </body>
  );
}
