import "./about.css"
export function About({photo}){
   
    return <section id="about">
        <h2>A propos de Moi</h2>
        <figure>
            <img src={photo} alt="Photo" />
            <h3>Ruben Trottein</h3>
            <p className="lead">Développeur Web JavaScript spécialisé Front-end</p>
            <p>Issu d'une formation en Sociologie / anthropologie puis Organisation et gestion d'entreprise, je me passionne pour les projets numériques au cours d'une mission de conduite du changement. J'entreprend donc une reconversion en web en 2018 et enchaîne quelques missions pour des clients variés (startup, grandes entreprises, associations) pour enseigner a partir de 2020 autour du web et plus particulièrement de la Stack JavaScript et du front-end en général</p>
            <p>Je souhaite désormais au choix, enseigner à de nouveaux publics ou pratiquer sur des projets webs en entreprises afin d'ajouter des retours d'experiences sur projets ambitieux a mes cours</p>
        </figure>

    </section>
}

export default About