const Admin:React.FC=(props)=>{
  return(
    <>
      <header>adminHeader</header>
      {props.children}
      <footer>adminFooter</footer>
    </>
  )
}
export default Admin
