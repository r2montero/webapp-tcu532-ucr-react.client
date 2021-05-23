import React from 'react';
import validator from 'validator';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/loginScreen.css';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [formLoginValues, handleLoginInputChange] = useForm({
    mail: 'webapptcu532@gmail.com', // Para produccion inicializar
    pass: '8spBT3FRM2BD8Qp',        // en strings vacios.
  });

  const { mail, pass } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(startLogin(mail, pass));
    }

  }

  const isValidForm = () => {
    if (!validator.isEmail(mail)) {
      dispatch(setError('Debe digitar un correo electronico válido'));
      Swal.fire({
        icon: 'error',
        title: 'Correo no válido',
        text: `${msgError}`,
        footer: 'ejemplo@mail.com',
        backdrop: `rgba(65,173,231,0.6)`
      })
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div className="limiter">
      <div className="container-loginTCU">
        <div className="wrap-loginTCU">

          <form onSubmit={handleLogin} className="loginTCU-form validate-form">

            <span className="loginTCU-form-title p-b-34">
              Inicio de Sesión
            </span>

            <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
              <input className="input100"
                id="mail"
                type="text"
                name="mail"
                value={mail}
                onChange={handleLoginInputChange}
                placeholder="Correo electrónico"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type password">
              <input className="input100"
                type="password"
                name="pass"
                value={pass}
                onChange={handleLoginInputChange}
                placeholder="Contraseña" />
              <span className="focus-input100"></span>
            </div>

            <div className="container-loginTCU-form-btn">
              <button
                className="loginTCU-form-btn"
                type="submit"
                value="Login">
                Ingresar
              </button>
            </div>

            <div className="w-full text-center p-t-27 p-b-239">
              <span className="txt1">
                Trabajo Comunal Universitario
						  </span>
              <p className="txt2">532</p>
            </div>

            <div className="w-full text-center">
              <p className="txt3">Universidad de Costa Rica</p>
            </div>

          </form>

          <div className="loginTCU-more bg-img-rural"></div>
        </div>
      </div>
    </div>
  )
}
