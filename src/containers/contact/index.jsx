import React from "react";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { MdEmail } from "react-icons/md";
import "./styles.scss";

export const Contact = () => {
  const contact = [
    {
      label: "Email",
      link: "mailto:vitcorreapereira@hotmail.com",
      img: "../../../public/enviar.png",
    },
    {
      label: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5521969896963",
      img: "../../../public/whatsapp.png",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/vitorio-correa/",
      img: "../../../public/linkedin.png",
    },
    {
      label: "Github",
      link: "https://github.com/VitorioCp",
      img: "../../../public/github.png",
    },
  ];

  return (
    <div className="contact">
      <PageHeaderContent
        headerText="Entre em contato"
        icon={<MdEmail size={40} />}
      />

      <div className="contact__box">
        <h1>Fale comigo aqui</h1>
        <div className="contact_box__container">
          {contact.map((item, index) => (
            <div className="contact__box__item" _blank key={index}  >
              {/* <img src={item.img} alt="" /> */}
              <span  className="contact__box__item__label"  _blank>
                <a href={item.link} target="_blank"> {item.label} </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
