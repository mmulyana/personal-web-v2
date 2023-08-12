import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: secrets.NEXT_PUBLIC_API_KEY,
  authDomain: secrets.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: secrets.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: secrets.NEXT_PUBLIC_STORAGE,
  messagingSenderId: secrets.NEXT_PUBLIC_MESSAGE_ID,
  appId: secrets.NEXT_PUBLIC_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
