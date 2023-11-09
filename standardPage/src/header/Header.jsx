export function Header({title}){

    return (
    <header>
        <h1>{title}</h1>
        <Nav />
    </header>
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
            {links.map((link) => <a href={link.href} key={link.href}>{link.title}</a>)};
        </nav>
    )
}
export default Header