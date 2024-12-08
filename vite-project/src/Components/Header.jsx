const Header =({getTime}) =>{
  const time = new Date().toLocaleTimeString();
  getTime(time);
  return(
    <>
    <h1>Hello World!</h1>
    </>
  )
}
export default Header;