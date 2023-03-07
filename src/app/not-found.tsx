import Link from "next/link";
import "./not-found.styles.css";

export default function Error404() {
  return (
    <div className="main-container">
      <div className="content">
        <main className="elementos">
          <h1>404</h1>
          <h2>¡OPPS! PÁGINA NO ENCONTRADA!</h2>
          <section>
            <p>[ERROR 404] LO SENTIMOS, EL ARTÍCULO NO HA SIDO ENCONTRADO</p>
          </section>
          <section>
            <Link className="return-to-init" href={"/"}>
              <span>VOLVER AL INICIO</span>
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
