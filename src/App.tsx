import './App.css';
import { Card } from './components/card/card';
import { useAlbumData } from './components/hooks/useAlbumData';

function App() {
  const { data } = useAlbumData();

  return (
    <>
      <div className='container'>
        <h1>Melhores albuns:</h1>
        <div className="card-grid">
          {data?.map(albumData => 
          <Card 
          name={albumData.name} 
          kind={albumData.kind}
          creator={albumData.creator}
          release_date={albumData.release_date}
          description={albumData.description}
          rate={albumData.rate}
          />
          )}

        </div>
      </div>
    </>
  )
}

export default App
