/**
 * 
 * @returns Data change component
 */
import { useState } from "react"

export function ChangeData(){
    const [pseudo, setPseudo] = useState('');
    const [title, setTitle] = useState('');
    const change = (e)=> {
        const originalTitle = document.querySelector('title');
        console.log("Handle...");
        let res = e.target.value;
        setPseudo(res);
        res!=null ? this.value = res : res="false";
        console.log(res);
    }
    let isPseudo = pseudo ? pseudo : "Pas de pseudo";
    return <section>
        <h2>Change Data</h2>
        <form>
            <Input 
                name="pseudo" 
                onChange={setPseudo}
                label="Pseudonyme"
                placeholder={"Afficher le champ pseudo" }
                value={pseudo}
            />
            {/*
            <Input 
            name="title"
            value={title}
            label="Titre"
            placeholder={"Afficher le champ titre" }
            onChange={change}
            />
            */}
        </form>
    </section>
    function Input({label, ...props}){
            return <>
                <label>{label}</label>
                <input type="text" {...props}/>
            </>
    }
}



export default ChangeData