import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Animate } from "react-simple-animate";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/about");
  };
  return (
    <section className="home">
      <div className="home__text-wrapper">
        <h1>
          Olá, me chamo Vitório Corrêa
          <br />
          Desenvolvedor Front End
        </h1>
      </div>
      <Animate
        play
        duration={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Sobre mim</button>
        </div>
      </Animate>
    </section>
  );
};
