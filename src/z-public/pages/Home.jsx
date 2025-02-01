import React, { useState } from "react";
import { Card, Text, Button, TagGroup, Tag } from "rsuite";
import vitrine from "../../assets/vitrine.jpg";
import { SlBookOpen } from "react-icons/sl";
import { MdLaptopChromebook } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";

import photo1 from "../../assets/1.jpg";
import photo2 from "../../assets/2.jpg";
import photo3 from "../../assets/3.jpg";
import photo4 from "../../assets/4.jpg";

const produits = [
  {
    url: photo1,
    title: "produits 1",
    description: "Produit authentique de bonne qualité1",
  },
  {
    url: photo2,
    title: "produits 2",
    description: "Produit authentique de bonne qualité2",
  },
  {
    url: photo3,
    title: "produits 3",
    description: "Produit authentique de bonne qualité3",
  },
  {
    url: photo4,
    title: "produits 4",
    description: "Produit authentique de bonne qualité4",
  },
];

const conditions = [
  {
    id: "1",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam placeat facilis atque tempore quis aut quam corporis beatae autem maxime? Porro soluta sapiente minima corrupti architecto",
  },
  {
    id: "2",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam placeat facilis atque tempore quis aut quam corporis beatae autem maxime? Porro soluta sapiente minima corrupti architecto",
  },
  {
    id: "3",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam placeat facilis atque tempore quis aut quam corporis beatae autem maxime? Porro soluta sapiente minima corrupti architecto",
  },
  {
    id: "4",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam placeat facilis atque tempore quis aut quam corporis beatae autem maxime? Porro soluta sapiente minima corrupti architecto",
  },
];

const Home = () => {
  const [data, setData] = useState(produits);
  const [cgv, setCgv] = useState(conditions);

  const CardElement = (props) => {
    const { url, title, description } = props;
    return (
      <Card key={url} width={320} shaded>
        <img
          src="https://images.unsplash.com/photo-1576606539605-b2a44fa58467?q=80&w=1974"
          alt="Shadow"
        />
        <Card.Header as="h5">Shadow</Card.Header>
        <Card.Body>
          Meet Shadow, a spirited little explorer with a heart full of
          adventure! This charming pup loves to roam the fields, soaking up the
          sights and sounds of nature.
        </Card.Body>
        <Card.Footer>
          <TagGroup>
            <Tag size="sm">🐶 Dog</Tag>
            <Tag size="sm">☀️ Sunny</Tag>
            <Tag size="sm">🌈 Rainbow</Tag>
          </TagGroup>
        </Card.Footer>
      </Card>
    );
  };
  return (
    <div>
      <section
        id="vitrine"
        className="h-[70vh] bg-center bg-cover relative"
        style={{
          backgroundImage: `url(https://ik.imagekit.io/tndev/public/vitrine.jpg?updatedAt=1736550723757)`,
        }}
      >
        <div
          id="filtre"
          className=" absolute inset-0  bg-black/60 flex justify-center items-center"
        >
          <div className="text-white text-3xl font-medium">
            E-learning platform{" "}
          </div>
        </div>
      </section>

      <section id="services">
        <h1 className="text-center text-xl font-medium my-2">Services</h1>
        <div className="grid grid-cols-3 my-4">
          <div className=" p-2 flex flex-col justify-center items-center gap-3">
            <SlBookOpen className="text-2xl" />
            <p className="text-xs">Accés illimité aux ressources educatives</p>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center gap-3">
            <MdLaptopChromebook className="text-2xl" />
            <p className="text-xs">Des cours multimedia disponibles</p>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center gap-3">
            <BsBookmarkCheck className="text-2xl" />
            <p className="text-xs">
              Une certification à la fin de chaque cours
            </p>
          </div>
        </div>
      </section>

      <section id="produits">
        <h1 className="text-center text-xl font-medium my-2">Produits</h1>
        <div className="grid grid-cols-4 gap-2 p-2 place-items-center">
          {data.map((v, i) => (
            <CardElement {...v} />
          ))}
        </div>
      </section>

      <section id="cgv" className="p-2">
        <h1 className="text-center text-xl font-medium my-2">
          Conditions generales
        </h1>
        <div className="space-y-2 p-2">
          {cgv.map((v, i) => (
            <div key={i} className="space-y-1">
              <p className="text-md"> {v.p}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
