import ContainerCounter from "../components/Counter/ContainerCounter"

function Home() {

  return (
    <main
        style={{  
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} 
        >
      <ContainerCounter/>
    </main>

  )
}

export default Home
