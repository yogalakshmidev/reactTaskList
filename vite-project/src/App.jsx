import Header from "./Components/Header";
const App=() =>{
  const getTime = (time) =>{
    console.log(time);
  }
  return(
    <>
      <Header getTime={getTime} />
    </>
  )
}

export default App
