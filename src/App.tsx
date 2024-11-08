import ButtonStyle from "./ButtonStyle";


function App(){
 
  return (
    <div className='App' >
     <h1>style props</h1>
     <ButtonStyle  btnStyle={{color:"red", background: 'green'}}></ButtonStyle>
      
    </div>
  );
};

export default App;