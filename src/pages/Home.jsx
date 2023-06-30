import CalculatorPage from "./CalculatorPage"
import CounterPage from "./CounterPage"

function Home() {

  return (
    <main
        style={{  
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} 
        >
      <CounterPage/>
      <CalculatorPage/>
    </main>

  )
}

export default Home
