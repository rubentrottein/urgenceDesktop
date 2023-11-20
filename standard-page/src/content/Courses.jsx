export function Courses(){
    let courses = [
        {href:"html", name : "HTML / CSS", desc : ""},
        {href:"javascript", name : "Javascript", desc : "ECMAScript 6"},
        {href:"react", name : "React", desc : ""},
        {href:"framework", name : "Frameworks CSS", desc : "( Bootstrap, TailWind )"},
        {href:"bibliothèques", name : "Bibliothèques JavaScript", desc : "( JQuery, etc)"},
        {href:"decouverte", name : "Découverte des métiers du code et de la programmation", desc : ""},
        {href:"introduction", name : "Introduction à l'algorythmie", desc : "Principes de bases, Pseudo-Code"},
        {href:"responsive", name : "Responsive  Web Design", desc : ""}
    ]
    return(
        <section id="courses">
            <h2>Proposition de Cours</h2>
            <p className="lead">Je propose des cours de programmation pour les débutants et les intermédiaires</p>
            <ul>            
                {courses.map((course)=><li key={course.name}><a href={course.href} >{course.name}</a> <span>{course.desc}</span></li>)}
            </ul>
        </section>
    )
}

export default Courses