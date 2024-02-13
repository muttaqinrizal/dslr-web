import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Camera } from 'web-gphoto2'

function App() {
  const [count, setCount] = useState(0)
  const camera = new Camera()

  const connectCamera = async () => {
    await camera.connect()
    console.log('www', await camera.getSupportedOps())
  }

  const pickerCamera = async () => {
    await Camera.showPicker()
  }

  useEffect(() => {
    connectCamera()
  }, [])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => pickerCamera()}>pilih kamera</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
