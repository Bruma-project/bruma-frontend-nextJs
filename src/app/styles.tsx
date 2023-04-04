"use client";
import styled from "styled-components";

export const HomeStyle = styled.div`
  padding: 0 0;
  margin: 0 0;
  --blancoleche: #dfd9d3;
  --azulfondo: #006ae6;
  --naranjoso: #ff8900;
  --fondo: #020a17;
  --sanspro: Source Sans Pro;

  .divImagenFondo {
    background: url(./home/home.jpg);
    height: 100vh;
    width: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: static;
    z-index: -2;
  }
  .divImagenFondo h1 {
    font-family: Oswald;
    text-align: center;
    padding-top: 9rem;
    font-size: 3rem;
  }
  button {
    font-family: Oswald;
    font-size: 1.1 rem;
    color: #dfd9d3;
    background-color: #ff8900;
    padding: 0.3rem 1.3rem;
    border-radius: 5px;
    border: none;
  }
  button:hover {
    transform: scale(1.2);
    transition: all 0.3s ease 0s;
  }
  .seccion2 {
    min-height: 100vh;
    max-height: 100%;
    background-color: var(--fondo);
    color: #dfd9d3;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .seccion2 h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Oswald;
    text-align: center;
    padding-top: 8rem;
    font-size: 3rem;
  }
  .seccion2 img {
    width: 26rem;
    height: auto;
    border-radius: 122px;
    border: 3px solid #ff8900;
  }
  .contenedorSeccion2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    width: 100%;
    height: auto;
    grid-gap: 1rem;
    padding-top: 12rem;
    justify-items: center;
  }
  .DescripcionSeccion2 {
    font-family: Oswald;
    width: 27rem;
    font-size: 38px;
    padding-bottom: 9rem;
  }
  .DescripcionSeccion2 span {
    color: #ff8900;
  }
  .contenedorSeccion2 button {
    height: 3rem;
    width: 12rem;
    cursor: pointer;
  }
  .linkLeerMas {
    text-align: center;
    margin-top: 6rem;
    font-family: var(--sanspro);
    color: #ff8900;
    font-size: 20px;
    text-decoration: underline;
  }
  .linkLeerMas:hover {
    color: #ff3900;
    scale: calc(1.1);
    transition: all 0.3s ease 0s;
  }

  .seccion3 {
    min-height: 100vh;
    max-height: 100%;
    background-color: var(--fondo);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    color: #dfd9d3;
  }
  .spanBlue {
    color: #006ae6;
  }

  .spanOrange {
    color: #ff8900;
  }

  .seccion3 p {
    font-family: var(--sanspro);
    padding-top: 5rem;
    line-height: 175%;
  }
  .contenedorSeccion3 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20rem;
  }
  .contenedorSeccion3 div {
    width: 30vw;
  }
  .contenedorSeccion3 h2 {
    text-align: start;
    font-family: Oswald;
    font-size: 38px;
  }
  .parrafo2Seccion3 {
    padding-top: 4rem;
  }
  .seccion4 {
    min-height: 100vh;
    max-height: 100%;
    background-color: var(--fondo);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    color: #dfd9d3;
  }
  .seccion4 h2 {
    text-align: start;
    font-family: Oswald;
    padding-top: 9rem;
    font-size: 3rem;
  }
  .seccion4 img {
    width: 18rem;
    border-radius: 40px;
    border: 6px solid #ff8900;
    height: 100%;
  }
  .contenedorDeImagenes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8rem;
  }
  .seccion4 button {
    width: 15rem;
    height: 4rem;
    margin-bottom: 4rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .waifuImg {
    display: none;
  }
  ul {
    list-style: none;
  }
  @media screen and (max-width: 800px) {
    div {
      font-size: 0.8rem;
      overflow: hidden;
    }
    .divImagenFondo h1 {
      font-size: 2rem;
    }
    .seccion2 {
      width: 100vw;
    }
    .seccion2 h1 {
      font-size: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .DescripcionSeccion2 {
      font-size: calc(1rem + 1vw);
      width: 100%;
    }
    .seccion2 img {
      border-radius: 0;
      height: auto;
      width: 100vw;
      border: none;
      padding-top: 4rem;
    }
    .contenedorImagenSeccion2 {
      display: flex;
      justify-content: start;
      width: 100%;
    }
    .contenedorSeccion2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .contenedorSeccion2 button {
      width: 50vw;
      padding: 0;
    }
    .contenedorSeccion3 {
      gap: 0rem;
      padding-top: 2rem;
    }
    .parrafo2Seccion3 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .seccion3 div {
      width: 100%;
    }
    .seccion3 div p,
    .seccion3 div h2 {
      padding: 1rem 3rem;
    }
    .infoYbutton {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .infoYbutton p {
      padding: 0 2vw 9rem 4vw;
    }
    .linkLeerMas {
      display: none;
    }
    nav {
      display: none;
    }
    .seccion4 h2 {
      font-size: 2rem;
      padding: 9rem 1rem 8rem 1rem;
    }
    .seccion4 img {
      width: 100%;
      border-radius: 0px;
      border: none;
    }
    .contenedorDeImagenes {
      gap: 0;
      box-shadow: inset 50em 10em gold;
    }
    .contenedorRegistrarFinal {
      padding-top: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .waifuImg {
      display: block;
    }
    .seccion4 button {
      width: 100vw;
      height: 5rem;
      border-radius: 0;
    }
  }
`;
