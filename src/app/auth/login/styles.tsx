"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginStyle = styled(motion.div)`
  height: 100%;
  padding: 0 0;
  margin: 0 0;
  --blancoleche: #dfd9d3;
  --azulfondo: #006ae6;
  --naranjoso: #ff8900;
  --sanspro: Source Sans Pro;

  #backgroundimg {
    display: block;
    background: url(/login/backgroundLogin.jpg);
    background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
    background-color: #0f0d0b;
    transform: scaleX(-1);
    background-position: left center;
  }

  #logindiv {
    position: fixed;
    width: 100%;
    max-width: 100rem;
    height: 100%;
    max-height: 45rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5em;
  }

  #presentationsquare {
    background-color: var(--blancoleche);
    width: 65rem;
    height: 46rem;
    opacity: 30%;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }

  #loginsquare {
    position: absolute;
    background-color: var(--azulfondo);
    width: 35rem;
    height: 46rem;
    top: 0rem;
    left: 65rem;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    text-align: center;
  }

  #title1 {
    position: fixed;
    top: -2rem;
    left: 16rem;
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    font-size: 5rem;
    letter-spacing: -0.025em;
    color: #1a0e00;
    padding-top: 3rem;
  }

  #dragonlogodiv {
    position: fixed;
    top: 12rem;
    left: 21rem;
  }

  #dragonlogo {
    height: 9rem;
    width: 9rem;
  }

  #title2 {
    color: #000000;
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 3.2rem;
    letter-spacing: -0.02em;
    width: 2rem;
    position: fixed;
    top: 9.2rem;
    left: 31rem;
    padding-top: 3rem;
  }

  #subtitle {
    color: #000000;
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 130%;
    letter-spacing: -0.02em;
    position: fixed;
    top: 35rem;
    left: 10rem;
  }

  #logintitle {
    color: var(--blancoleche);
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.02em;
    padding-top: 4.5rem;
  }

  .textinloginsquare {
    color: var(--blancoleche);
    font-family: var(--sanspro);
    font-weight: 400;
    font-style: normal;
  }

  .forms {
    background: var(--blancoleche);
    box-shadow: 0em 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 0.7rem;
    border-style: none;
    height: 2.5rem;
    width: 18rem;
    text-align: start;
    padding-left: 2rem;
    font-family: var(--sanspro);
  }

  .forms:focus {
    outline: none;
  }

  #name {
    position: fixed;
    top: 13rem;
    left: 74rem;
  }

  #password {
    position: fixed;
    top: 21rem;
    left: 74rem;
  }

  #form1 {
    position: fixed;
    top: 16rem;
    left: 73.5rem;
  }

  #form2 {
    position: fixed;
    top: 24rem;
    left: 73.5rem;
  }

  #remembercheck {
    width: 1rem;
    height: 1rem;
    border-style: solid;
    border-radius: 0.4rem;
    border-width: 0.1rem;
    border-color: var(--blancoleche);
    color: var(--azulfondo);
    display: block;
    position: relative;
    top: -0.1rem;
  }

  #remembercheck:hover {
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  input:checked + label {
    color: var(--blancoleche);
  }

  input:checked + label:before {
    content: "";
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #remember {
    font-family: var(--sanspro);
    text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    position: relative;
    top: -1.3rem;
    left: -10.9rem;
  }

  #remembers {
    height: 10rem;
    width: 30rem;
    position: fixed;
    top: 30rem;
    left: 74rem;
  }

  #forget {
    width: 12rem;
    text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    position: relative;
    top: 20.9rem;
    left: 16.5rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }

  a {
    color: var(--naranjoso);
    text-decoration: underline var(--naranjoso);
  }

  a:hover {
    color: var(--blancoleche);
    text-decoration: underline var(--blancoleche);
  }

  #log-in {
    height: 6rem;
    width: 15rem;
    border-radius: 1rem;
    border-style: none;
    background-color: var(--naranjoso);
    box-shadow: 0em 0.4rem rgba(0, 0, 0, 0.25);
    font-size: 1.5rem;
    color: var(--blancoleche);
    position: fixed;
    left: 75rem;
    top: 34rem;
  }

  #log-in:hover {
    cursor: pointer;
  }

  #log-in:active {
    background-color: var(--blancoleche);
    color: var(--naranjoso);
  }

  #subtext {
    position: fixed;
    left: 73rem;
    top: 42rem;
    color: var(--blancoleche);
    font-family: var(--sanspro);
    font-weight: 400;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.5);
  }
`;
