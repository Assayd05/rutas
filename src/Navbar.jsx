import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
					<Link to='/PrivatePage1'>Cuenta</Link>
					<Link to='/PrivatePage2'>Configuracion</Link>
					<Link to='/PrivatePage3'>Perfil</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						<Link to='/PublicPage1'>Contacto</Link>
						<Link to='/PublicPage2'>Ubicaciones</Link>
						<Link to='/PublicPage3'>Terminos y Condiciones</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};