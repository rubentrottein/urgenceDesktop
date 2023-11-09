export function Contact(){
    return(
        <section id="contact">
            <h2>Me contacter</h2>
            <form method="get" action="#">
                <label htmlFor="pseudo">Votre Nom / Entreprise
                    <input type="text" name="pseudo" id="pseudo" />
                </label>
                <label htmlFor="object">
                    Votre Email / Site
                    <input type="email" name="email" id="email" />
                </label>
                <select name="object" id="object">
                    <option value="">Objet de votre message</option>
                    <option value="contact">Prise de contact</option>
                    <option value="offre">Offre d'emploi</option>
                    <option value="demande">Demande de prestation</option>
                </select>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Votre Message"></textarea>
                <input type="button" value="Envoyer" />
            </form>
        </section>
    )
}

export default Contact