import React from "react";
import client1 from "../../images/clients-01.svg";
import client2 from "../../images/clients-02.svg";
import client3 from "../../images/clients-03.svg";
import client4 from "../../images/clients-04.svg";
import client5 from "../../images/clients-05.svg";

const Clients = () => {
  return (
    <section className="clients section reveal-fade">
      <div className="container">
        <div
          className="
            clients-inner
            section-inner
            has-top-divider has-bottom-divider
          "
        >
          <ul className="list-reset">
            <li>
              <img src={client1} alt="Client 01" />
            </li>
            <li>
              <img src={client2} alt="Client 02" />
            </li>
            <li>
              <img src={client3} alt="Client 03" />
            </li>
            <li>
              <img src={client4} alt="Client 04" />
            </li>
            <li>
              <img src={client5} alt="Client 05" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
