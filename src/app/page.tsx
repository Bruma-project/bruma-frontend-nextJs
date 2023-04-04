"use client";
import { HomeStyle } from "./styles";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <HomeStyle>
      <div className="divImagenFondo">
        <h1>BIENVENIDO AL MUNDO DE PATHFINDER</h1>
      </div>
      <section className="seccion2">
        <h1>SUMÉRGETE EN LA MAGIA DE LOS JUEGOS DE ROL</h1>
        <div className="contenedorSeccion2">
          <div className="infoYbutton">
            <p className="DescripcionSeccion2">
              CON LA HERRAMIENTA DE <span>PROJECT BRUMA</span> VAS A PODER CREAR
              TU PROPIO PERSONAJE DE PATHFINDER EN SEGUNDOS.
            </p>
            <Link href={"/auth/login"}>
              <button>REGISTRARSE GRATIS</button>
            </Link>
          </div>
          <div className="contenedorImagenSeccion2">
            <Image
              src="/home/3.jpg"
              alt="pathfinder img"
              width={500}
              height={300}
            />
            <a href="vista3">
              <p className="linkLeerMas">ACERCA DE PATHFINDER</p>
            </a>
          </div>
        </div>
      </section>
      <section className="seccion3">
        <section className="contenedorSeccion3">
          <div>
            <>
              <h2>
                ¿Qué es un juego de <span className="spanBlue">Rol</span>?
              </h2>
              <p>
                Un juego de rol es un relato interactivo en el que un jugador,
                el Director de juego (DJ), prepara una escena y presenta
                desafíos, mientras otros jugadores adoptan los papeles de
                personajes jugadores (PJs) e intentan superar dichos desafíos.
              </p>
            </>
            <div className="parrafo2Seccion3">
              <h2>
                El Flujo del <span className="spanOrange">juego</span>
              </h2>
              <p>
                Pathfinder se juega en sesiones, en las que los jugadores se
                reúnen en persona o bien online durante unas cuantas horas. Una
                partida completa de Pathfinder puede durar una sola sesión, lo
                que a menudo se denomina una &quot;aventura corta&quot;, o puede
                prolongarse durante múltiples sesiones, formando una campaña que
                podría durar meses o incluso años. Si al Director de juego le
                divierte contar el relato y a los jugadores les complace
                escucharlo, una partida puede durar todo lo que quieras.
              </p>
            </div>
          </div>
          <div>
            <h2>
              Jugar es para <span className="spanOrange">todos</span>
            </h2>
            <p>
              Tanto si eres el DJ como si eres un jugador, participar en un
              juego de rol incluye un contrato social: todos os habéis reunido
              para divertiros contando una historia. Para muchos, jugar a rol es
              una forma de evadir los problemas de la vida diaria. Ten en cuenta
              a todos los que se sientan a la mesa y lo que pretenden de la
              partida, para que todos puedan divertirse. Cuando un grupo se
              reúne por vez primera, deberíais comentar lo que queréis
              experimentar en la mesa, así como cualquier tema que preferiríais
              evitar. Todos deberían entender que pueden aparecer elementos que
              incomoden a algunos jugadores, o incluso que les resulten
              ofensivos, y todo el mundo debería estar de acuerdo en respetar
              dichos límites durante la partida. De esa forma, todos podéis
              disfrutar juntos de la misma. Pathfinder es un juego para todo el
              mundo, sea cual sea su edad, género, raza o procedencia étnica,
              religión, orientación sexual o cualesquiera otra identidades y
              experiencias vitales. Es responsabilidad de todos los jugadores y
              no sólo del DJ, asegurarse de que la partida es amena y da la
              bienvenida a todo el mundo.
            </p>
          </div>
        </section>
      </section>
      <section className="seccion4">
        <h2>
          ¿QUÉ ESPERAS PARA COMENZAR TU{" "}
          <span className="spanOrange">AVENTURA</span>?
        </h2>
        <ul className="contenedorDeImagenes">
          <li>
            <Image
              src="/home/castilloHome.png"
              alt=""
              width={700}
              height={500}
            />
          </li>
          <li>
            <Image src="/home/magiaHome.png" alt="" width={700} height={500} />
          </li>
          <li>
            <Image src="/home/dragonhome.png" alt="" width={700} height={500} />
          </li>
        </ul>
        <div className="contenedorRegistrarFinal">
          <Image
            className="waifuImg"
            src="/waifu1.png"
            alt=""
            width={700}
            height={500}
          />
          <Link href={"/auth/login"}>
            <button>REGISTRATE AHORA</button>
          </Link>
        </div>
      </section>
    </HomeStyle>
  );
}
