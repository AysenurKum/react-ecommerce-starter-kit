//// kayıtlı olmayan kulllanıcılar için kayıt sayfası
import React, { useState } from 'react'
import styles from "./auth.module.scss"
import registerIMG from "../../assets/register.png"
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'
const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    // console.log(email,password,cPassword)
    if (password !== cPassword) {
      toast.error("Password do not match")
    }
    else {
      setIsLoading(true)
      // yeni kullannıcı girişi yapılır
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false)
        toast.success("Registiration Success")
        navigate("/login")
      })
      .catch((error) => {
        toast.error(error.message)
      });
    }
  }

  return (
    <>
    {isLoading && <Loader/>}
     <section className={`container ${styles.auth}`}>
      <Card cardClass={styles.form}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <input type='text' placeholder='Email' required value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' required value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <input type='password' placeholder='Confirm Password' required
            value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
          <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
        </form>
        <span className={styles.Register}>
          <p>Allready an account</p>&nbsp;
          <Link to="/login">Login</Link>
        </span>
      </Card>
      <div className={styles.img}>
        <img src={registerIMG} alt='registerImage' width="400"></img>
      </div>
    </section>
    </>
   
  )
}

export default Register