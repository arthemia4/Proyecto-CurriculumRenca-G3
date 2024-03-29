import React from 'react';
const LoginRegistro = () => {
    const loguear = () => {
        // Función de inicio de sesión
        console.log('Iniciando sesión...');
    };

    return (
        <div className="container-login" id="container"> 
            <div className="form-container sign-up">
                <form>
                    <h1>Crear Cuenta</h1>
                    <br />
                    <input type="text" placeholder="Usuario" />
                    <input type="email" placeholder="Correo Electrónico" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Registrarse</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Ingresar</h1>
                    <br />
                    <input type="text" placeholder="Correo Electrónico" id="email" />
                    <input type="password" placeholder="Contraseña" id="password" />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <input type="button" value="ingresar" onClick={loguear} />
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <img src="imagenes/logo-renca.png" width="150" alt="Renca logo" />
                        <h1>¡Registrate en Currículum Renca!</h1>
                        <p>¿Ya tienes una cuenta?</p>
                        <button className="hidden" id="login">Ingresa a tu cuenta</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <img src="imagenes/logo-renca.png" width="150" alt="Renca logo" />
                        <h1>¡Bienvenido a Currículum Renca!</h1>
                        <p>Si no estás registrado, puedes hacerlo aquí</p>
                        <button className="hidden" id="register">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegistro;
