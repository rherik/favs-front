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
    return(
        <div className="card">
            <img src={foto} alt="" />
            <h2><b>{name}</b></h2>
            <p><b>Nota</b> <br />{rate}</p>
            <p><b>Estilo</b><br />{kind}</p>
            <p><b>Artista</b> <br />{creator}</p>
            <p><b>Lançamento</b> <br />{release_date}</p>
            <small><b>Resumo</b> <br />{description}</small>
        </div>
    )
}