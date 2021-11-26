import '@qonsoll/react-design/dist/styles/styles.css'
import '@qonsoll/react-design/dist/styles/vars/index.css'
import './styles.css'
import Navigator from './pages/Navigator'

import { SessionProvider } from './contexts/Session'
import { StoreProvider } from './contexts/Store'
import { app } from './services/firebase'

import { createFirestoreAdapter } from './services/qonsoll-data/Adapters'


export default function App() {
  const adapter = createFirestoreAdapter(app)
  return (
    <div className="App">
      <SessionProvider>
          <StoreProvider defaultAdapter={adapter}>
            <Navigator />
          </StoreProvider>
      </SessionProvider>
    </div>
  )
}
