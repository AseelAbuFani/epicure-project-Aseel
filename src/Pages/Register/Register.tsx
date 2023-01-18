import { useState } from "react";
import { useNavigate } from "react-router-dom";
import passwordValidator from 'password-validator'; 
import * as EmailValidator from 'email-validator';
import { toast } from "react-toastify";
import axios from 'axios';
import './register.css'

export default function Register(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const submittedRegister = async () => {
        const args = {email, firstName, lastName, password};
        const validateEmail = EmailValidator.validate(email); // true
        const schema = new passwordValidator();
        schema.is().min(8)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits(2)
        .has().not().spaces()
        .is().not().oneOf(['password']);
        if (!schema.validate(password)){
            const errors:any = schema.validate(password, { details:true});
            errors.forEach((error:any) => {
                toast.error(error.message)
            });
            return errors;
        };
        if (password !== confirmPassword){
            toast.error('Passwords don"t match');
            return;
        };

        if ((password === confirmPassword)&& schema.validate(password)){
            toast.success('Successful registeration');
            navigate('/');
        }

        const resopnse = await axios.post('http://localhost:3001/api/users/register', args);
        if (resopnse.data.status === 'failure') {
            toast.error(resopnse.data.message);
            return ;
        };
        navigate('/')

        };

        return (
            <>
                <div id="warp">
                    <form className="form" >
    	                <div className="admin">
			                <div className="rota">
                                <h1 className="h1">Epicure</h1><br/>
                                <input className="input" type="text" placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)}/><br/>
                                <input className="input" type="text" placeholder="LastName" onChange={(e) => setLastName(e.target.value)}/><br/>
                                <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
                                <input className="input" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/><br/>
                                <input className="input" type="password" placeholder="ConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
      			            </div>
    		            </div>
                            <div className="cms">
                                <div className="roti">
                                    <h3 className="h3"></h3>
                                    <button id="valid" className="button" onClick={submittedRegister}>Ready to join </button><br />
                                </div>
                            </div>
  	                </form>
                </div>       
            </>
        );
    }
