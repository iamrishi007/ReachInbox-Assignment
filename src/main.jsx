
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="443924821698-dd7p6srlcscbb6rq1c81ubjhp2kqipbn.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
)
