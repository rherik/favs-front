import { useState } from "react"
import "./card.css"

interface CardProps {
    name: string,
    foto: string,
    kind: string,
    creator: string,
    release_date: string,
    description: string,
    rate: number
}
export function Card({name, foto, kind, creator, release_date, description, rate}: CardProps){
    
    const [isOpen, setOpen] = useState(false);
    const handleOpenSwitch = () =>{
        setOpen(!isOpen);
    };
    
    return(
        <div className={isOpen ? "card active": "card"}>
            <img loading="lazy" src={foto} alt="" />
            <div className="content">
                <h3><b>{name}</b></h3>
                <p><b>Nota</b><br />{rate}</p>
                <p><b>Estilo</b><br />{kind}</p>
                <p><b>Artista</b><br />{creator}</p>
                <p><b>Lançamento</b><br />{release_date}</p>
                <small className="resumo"><b>Resumo</b> <br />{description}</small>
            </div>
            <button onClick={handleOpenSwitch}>{isOpen ? 'Ver menos': 'Ver mais'}</button>
        </div>
    )
}