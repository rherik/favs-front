import './App.css';
import { useState } from 'react';
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useAlbumData } from './components/hooks/useAlbumData';

function App() {
  const { data } = useAlbumData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }  

  return (
    <>
      <div className='container'>
        <h1>Melhores albuns:</h1>
        <div className="card-grid">
          {data?.map(albumData => 
          <Card
          name={albumData.name} 
          foto={albumData.foto}
          kind={albumData.kind}
          creator={albumData.creator}
          release_date={albumData.release_date}
          description={albumData.description}
          rate={albumData.rate}
          />
          )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>

      </div>
    </>
  )
}

export default App
