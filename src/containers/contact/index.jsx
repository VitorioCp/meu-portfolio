import React from "react";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { MdEmail } from "react-icons/md";
import "./styles.scss";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


export const Contact = () => {
  const contact = [
    {
      label: "Email",
      link: "mailto:vitcorreapereira@hotmail.com",
      img: <MdEmail/>,
    },
    {
      label: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5521969896963",
      img: <FaWhatsapp />,
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/vitorio-correa/",
      img: <FaLinkedin />,
    },
    {
      label: "Github",
      link: "https://github.com/VitorioCp",
      img: <IoLogoGithub />,
    },
  ];

  return (
    <div className="contact">
      <PageHeaderContent
        headerText="Entre em contato"
        icon={<MdEmail size={40} />}
      />

      <div className="contact__box">
        <h1>Entre em contato comigo aqui!</h1>
        <div className="contact_box__container">
          {contact.map((item, index) => (
            <a className="alink" href={item.link}>
            <div className="contact__box__item" _blank key={index}>
              <div className="contact__box__item__img">
                {item.img}
              </div>
              <span className="contact__box__item__label" _blank>
                <a href={item.link} target="_blank" rel="link noreferrer">
                  {item.label}
                </a>
              </span>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
