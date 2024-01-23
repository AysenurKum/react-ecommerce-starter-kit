//// burada google firebase ile etkileşime buradan girilecek.

import { initializeApp } from "firebase/app";

// giriş kontrol ve yetkilendirme 
import {getAuth} from "firebase/auth"

// verilerin kayıt yerine erişmek için
import {getFireStore} from "firebase/firestore"

// resimlerin kayıt yeri
import {getStorage} from "firebase/storage"


export const firebaseConfig = {
  apiKey: "AIzaSyCjMpnSKCcNpAL8UQWgaV8-CwEl11S2N3I",
  authDomain: "eshop-28b03.firebaseapp.com",
  projectId: "eshop-28b03",
  storageBucket: "eshop-28b03.appspot.com",
  messagingSenderId: "104876608359",
  appId: "1:104876608359:web:77846391cf2ec5efaebdc2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFireStore(app)
export const storage = getStorage(app)

export default app