import "./card.css"

interface CardProps {
    name: string,
    kind: string,
    creator: string,
    release_date: string,
    description: string,
    rate: number
}
export function Card({name, kind, creator, release_date, }: CardProps){
    return(
        <div className="card">
            <img src="" alt="" />
            <h2><b>{name}</b></h2>
            <p>{kind}</p>
            <p>{creator}</p>
            <p>{release_date}</p>
            <p>{creator}</p>
        </div>
    )
}