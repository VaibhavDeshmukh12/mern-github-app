import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import SignupPage from './pages/SignupPage';
import LikesPage from './pages/LikesPage';
import Sidebar from './components/Sidebar';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function App() {
	const {authUser,loading} = useAuthContext();

	if(loading){
		return null;
	}

	// console.log("Authenticated User : ",authUser);
	return (
		<div className='flex text-white'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={ !authUser ? <LoginPage /> : <Navigate to={'/'} />} />
					<Route path='/signup' element={ !authUser ? <SignupPage /> : <Navigate to={'/'} />} />
					<Route path='/explore' element={ authUser ? <ExplorePage />: <Navigate to={'/login'} /> } />
					<Route path='/likes' element={authUser ? <LikesPage />: <Navigate to={'/login'} />} />
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;