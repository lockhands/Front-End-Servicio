import React from 'react'
import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate} from 'react-router-dom'
import {getProfesores} from '../api/profesores'
import {TablaMaterias} from '../components/TablaMaterias'


function Login() {

    const [email, setEmail] = useState('');
    const [invalidCredentials,setInvalidCredentials] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const[ok,setok]=useState({});

    useEffect(() => {
      const fetchProfesores= async () => {
        const profesoresRes = await getProfesores();
       
        
        setok(profesoresRes);
     
      };
     
      fetchProfesores();
    
    }, []);

      const handleSubmit = e => {
        e.preventDefault()
        console.log({email,password});
       
        axios
            .post("http://localhost:3333/login", { email, password })
            .then(response => {
                console.log(response);
                if(response.data.userType == 'Administrador') {
                    console.log('hello')
                    navigate('/dashboard-control')
                } else if (response.data.userType == 'Profesor') {
                    navigate('/dashboard-profesor')
                }

            }).catch( (err) => setInvalidCredentials(true))
    }

  return (
    <div>
        <form action="" id="login" method="post" onSubmit={handleSubmit}>



            <h1>Login</h1>

            {
                invalidCredentials && <p>invalidad credentials</p>
            }
            

            <p className="item">
            <label htmlFor="email"> Email </label>
            <input
                // type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </p>
            <p className="item">
            <label htmlFor="password"> Password </label>
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </p>
            <p className="item">
            <input type="submit" value="Login" />
            </p>
        </form>

           <TablaMaterias />
       
    </div>
  )
}

export default Login