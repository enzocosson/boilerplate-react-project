import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaHHt1edAEQCB_NxYioL5N92vR3pXedcE",
  authDomain: "photo-3baa5.firebaseapp.com",
  projectId: "photo-3baa5",
  storageBucket: "photo-3baa5.appspot.com",
  messagingSenderId: "168386575864",
  appId: "1:168386575864:web:89a116d90f44ea987baa0d",
  measurementId: "G-448NSQZXB2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export default getAnalytics();
