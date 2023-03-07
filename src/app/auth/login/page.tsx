"use client";
import Image from "next/image";
import { LoginStyle } from "./styles";
import { motion } from "framer-motion";

export default function Login() {
  const easeFc = (x: number) => x * x * x;

  return (
    <LoginStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="card-container">
        <div id="backgroundimg"></div>
        <motion.div
          animate={{
            opacity: [0, 1],
            transition: { duration: 1, ease: easeFc },
          }}
          id="logindiv"
        >
          <div id="presentationsquare"></div>
          <h1 id="title1">Únete a la aventura</h1>
          <div id="dragonlogodiv">
            <Image
              src="/iconDragon.png"
              alt="dragon logo"
              id="dragonlogo"
              width={100}
              height={100}
            />
          </div>
          <h1 id="title2">BRUMA PROJECT</h1>
          <h2 id="subtitle">Debes iniciar sesion para crear tu personaje</h2>
          <div id="loginsquare">
            <h2 id="logintitle">Iniciar sesión</h2>
            <p id="name" className="textinloginsquare">
              Nombre
            </p>
            <input
              id="form1"
              className="forms"
              type="text"
              name="user"
              placeholder="Ingrese el nombre de usuario"
            />
            <p id="password" className="textinloginsquare">
              Contraseña
            </p>
            <input
              id="form2"
              className="forms"
              type="password"
              name="pass"
              placeholder="Ingrese la contraseña"
            />
            <div id="remembers">
              <input id="check" type="checkbox" name="check" />
              <label id="remembercheck" htmlFor="check"></label>
              <p id="remember" className="textinloginsquare">
                Recuérdame
              </p>
            </div>
            <p id="forget" className="textinloginsquare">
              <a href="link to password recovery">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
          <button id="log-in" className="textinloginsquare">
            Iniciar Sesión
          </button>
          <div id="subtext">
            <p id="subtext1" className="textinloginsquare">
              ¿No tienes cuenta?
            </p>
            <p>
              Crea tu propia cuenta <a href="#">aqui</a>
            </p>
          </div>
        </motion.div>
      </div>
    </LoginStyle>
  );
}
