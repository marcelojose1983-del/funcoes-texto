import'./App.css'
import{saudacao} from'./utils/texto'

function App() {

  return(
    <>
      <p>{saudacao('pedro', 'o')}</p>
      <p>{saudacao('ana clara', 'a')}</p>
      <p>{saudacao('jonas e luiz', 'os')}</p>
    </>
  )
}

export default App