export function Footer({title}){

    return (
    <footer>
        <p>&copy; mistertea.fr, 2023</p>
        <Nav />
    </footer>
    )
}
function Nav(){
    let links = [
        {href:"index.html", title: "Home"},
        {href:"#services", title: "Services"},
        {href:"#courses", title: "Cours"},
        {href:"#contact", title: "Contact"},
        {href:"#about", title: "About"}
    ]
    return (
        <nav>
            {links.map((link) => <a href={link.href} key={link.href}>{link.title}</a>)}
        </nav>
    )
}
export default Footer