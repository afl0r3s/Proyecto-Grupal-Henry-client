import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../redux/actions/userActions';

function SignIn(props) {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const userInfo = useSelector(state => state.userInfo);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.signinError);
    const redirect = props.location.search 
    ? props.location.search.split('=')[1] 
    : '/';

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(input));
    }
    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo]);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <p>Loading</p>}
                {error && <p className="danger">{error}</p>}
                <div>
                    <label htmlFor="email">Direccion email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="*******"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Sign In
                    </button>
                </div>
                <div>
                    <label/>
                    <div>
                        No tienes una cuenta?
                        <Link to='/signup'>Crear una cuenta. </Link>
                        <Link to='/'> Volver al inicio</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
