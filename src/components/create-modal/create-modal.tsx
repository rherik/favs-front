import { useEffect, useState } from 'react';
import { useAlbumDataMutate } from '../hooks/useAlbumDataMutate';
import { AlbumData } from '../interface/AlbumData';
import './modal.css';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProp {
    closeModal(): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal( { closeModal }: ModalProp){
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("");
    const [kind, setKind] = useState("");
    const [creator, setCreator] = useState("");
    const [release_date, setRelease_date] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);
    const { mutate, isSuccess, isLoading } = useAlbumDataMutate();

    const submit = () => {
        const albumData: AlbumData = {
            name,
            foto,
            kind,
            creator,
            release_date,
            description,
            rate
        }
        mutate(albumData)
    }

    useEffect(() => {
        if (!isSuccess) return
            closeModal()
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <form className="input-container">
                    <Input label="Name" value={name} updateValue={setName} />
                    <Input label="Foto" value={foto} updateValue={setFoto} />
                    <Input label="Kind" value={kind} updateValue={setKind} />
                    <Input label="Creator" value={creator} updateValue={setCreator} />
                    <Input label="Release date" value={release_date} updateValue={setRelease_date} />
                    <Input label="Description" value={description} updateValue={setDescription} />
                    <Input label="Rate" value={rate} updateValue={setRate} />
                </form>
                <button onClick={submit} className='btn-secundary'>
                    {isLoading ? 'Postando...': 'Poste um novo album'}
                </button>
            </div>
        </div>
    )
}