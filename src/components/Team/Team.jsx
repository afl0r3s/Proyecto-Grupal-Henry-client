import React from "react";
import styles from "./Team.module.css";
import { NavLink } from "react-router-dom";

const Team = () => {
  return (
    <div className={styles.team}>
        <h1>NUESTRO EQUIPO</h1>
      <div className={styles.container}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png"
          alt="foto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
      </div>
      <div className={styles.container}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png"
          alt="foto"
        />
      </div>
      <div className={styles.container}>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
      </div>
      <div className={styles.container}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
      </div>
      <div className={styles.container}>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
      </div>
      <div className={styles.container}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
      </div>
      <div className={styles.container}>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
      </div>
      <div className={styles.container}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
      </div>
      <div className={styles.container}>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt="foto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ducimus labore odit modi praesentium, aperiam quidem similique iste,
          dolorum hic repellat tenetur mollitia voluptate blanditiis at minus
          magni nobis eaque?
        </p>
      </div>
    <NavLink to="/"><h2 className={styles.home} >Home</h2></NavLink>    
    </div>
  );
};

export default Team;
