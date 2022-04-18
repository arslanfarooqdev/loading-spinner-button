import { useState } from 'react';
import './App.css';
import LoadingSpinnerButton from './components/LoadingSpinnerButton';

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
     <LoadingSpinnerButton title={'Load Data'} loading={loading} onClick={()=>{
       setLoading(true)

       /* Time taken by API to send data */
       setTimeout(()=>{
        setLoading(false)
      }, 2000)
     }} />
    </div>
  );
}

export default App;
