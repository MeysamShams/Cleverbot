import {RouterProvider} from 'react-router-dom'
import { router } from "./routes/index.routes"
import { Toaster } from 'react-hot-toast'
function App() {
  return <>
  				<Toaster
					position="bottom-left"
					toastOptions={{
						style: {
							background: '#29283d',
							color: '#fff',
							padding: '10px 20px',
							fontSize: '15px',
						},
					}}
					containerStyle={{
						top: '10px',
					}}
				/>
    <RouterProvider router={router} />
  </>
}

export default App
