import './App.css'
import Feed from './components/Feed'
import HeaderBar from './components/HeaderBar'
import Sidebar from './components/SideBar'
import { BluecubeProvider } from './BluecubeContext'
import CategoryBar from './components/CategoryBar'

function App() {
	return (
		// this ensures the whole app gets the state needed...say if we were to implement routing on the sidebar
		<BluecubeProvider>
			<div className='container'>
				<Sidebar />

				<section className='content'>
					<header className='header-bar'>
						<HeaderBar />
						<CategoryBar />
					</header>

					<main>
						<Feed />
					</main>
				</section>
			</div>
		</BluecubeProvider>
	)
}

export default App
