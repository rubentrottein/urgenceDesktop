export function Services(){
    let services = [
        {
            name: "Cours",
            img: 10,
            desc:"Cours et suivi d'un groupe d'élèves adultes", 
            steps: [
                "Animation du cours",
                "Supports à Jour",
                "Evaluation et correction",
                "Adaptation à votre projet pédagogique"
            ]
        },
        {
            name: "Présentations",
            img: 122, 
            desc:"Découverte et présentation de sujets, métiers et autres ", 
            steps: [
                "Animation",
                "Réponse aux questions",
                "Retours sur les formations et métiers",
                "Adaptation à votre offre de formation"
            ]}
        
    ]
    return (
        <section id="services">
            <h2>Services</h2>
            <article>
            {services.map((service)=> <Service img={service.img} steps={service.steps} title={service.desc} key={service.name}>{Service.name}</Service>)}
            </article>
        </section>
    )

    function Service({steps, title, content, img}){
        let image = (img) => { return "https://picsum.photos/id/"+ img + "/300"};
        return(
            <figure>
                <img src={image(img)} alt="Illustration" />
                <figcaption>
                    <h2>{title}</h2>
                    <p className="lead">{content}</p>
                    {steps.map(step=> <li key={step}>{step}</li>)}
                </figcaption>
            </figure>
        )
    }
}

export default Services