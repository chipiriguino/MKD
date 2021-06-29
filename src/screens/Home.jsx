import React from "react";
import "./Home.css";
import Navegation from "../components/Nav";
import Article from "../components/Article";
import Wasap from '../components/Whats';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export default function Home() {
  return (
    <body>
      <nav>
        <Navegation />
      </nav>
      <article><Article/></article>
      {/* <main><Main/></main>
      <header>header</header>
      <section>section</section> */}
      <div className="ss">
      <div className="color" id="ko">
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
            </div>
            </div>
        <div className="ws">
                 < Wasap />
                 </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </body>
    
  );
}
