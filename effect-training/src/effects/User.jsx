import { useState } from "react"

export function User(){
    const [user,setUser]= useState({
        pseudo: "Milly",
        atk: 20,
        def: 10,
        lvl: 1,
        img: "https://picsum.photos/id/167/500"
    })
    function handlePseudo(){
        setUser({...user, pseudo : this.value})
    }
    return <article>
        <details>
            <form>
                <h3>Edit User</h3>
                <input placeholder = {"pseudo"} value={user.pseudo} onChange={handlePseudo} type="text" />
                {/*<input placeholder = {"atk"} onChange={setUser} type="number" />*/}
                {/*<input placeholder = {"def"} onChange={//setUser} type="number" />*/}
            </form>
        </details> 
        <figure>
            <img src={user.img} />
            <figcaption>
                <h3>{user.pseudo} lvl{user.lvl}</h3>
                <ul>
                    <li>Attaque : {user.atk}</li>
                    <li>Défense : {user.atk}</li>
                </ul>
            </figcaption>
        </figure>
    </article>

}

export default User