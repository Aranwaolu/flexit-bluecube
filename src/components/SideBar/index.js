import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faSpaceShuttle,
	faFile,
	faHome,
	faLink,
	faSortAmountUp,
	faTrophy,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'

import './index.css'
import useBluecube from '../../useBluecube'

const Sidebar = () => {
	const { isNavOpen, toggleNav } = useBluecube()
	return (
		<div>
			<div
				class='hamburger'
				onClick={() => {
					toggleNav()
				}}
			>
				<span class='bar'>...</span>
				<span class='bar'></span>
				<span class='bar'></span>
			</div>

			<div className='nav'>
				<div className='logo'>
					<h3 className='logo-name'>bluecube</h3>
				</div>

				<div className='main-list'>
					<div>
						<span className='nav-item nav-selected'>
							<div className='icon-case'>
								<FontAwesomeIcon icon={faHome} size='sm' className='nav-icon' />
							</div>
							<p className='nav-selected-name'>Home</p>
						</span>
					</div>

					<div>
						<span className='nav-item'>
							<div className='icon-case'>
								<FontAwesomeIcon icon={faFile} size='sm' className='nav-icon' />
							</div>
							<p>Message</p>
						</span>
					</div>
				</div>
				<div className='nav-item nav-share'>SHARE</div>
				<div className='others'>
					<span className='nav-item'>
						<div className='icon-case'>
							<FontAwesomeIcon icon={faSortAmountUp} size='sm' className='nav-icon' />
						</div>
						<p>Ranking</p>
					</span>

					<span className='nav-item'>
						<div className='icon-case'>
							<FontAwesomeIcon icon={faTrophy} size='sm' className='nav-icon' />
						</div>
						<p>Challenge</p>
					</span>

					<span className='nav-item'>
						<div className='icon-case'>
							<FontAwesomeIcon icon={faBirthdayCake} size='sm' className='nav-icon' />
						</div>
						<p>Party</p>
					</span>

					<span className='nav-item'>
						<div className='icon-case'>
							<FontAwesomeIcon icon={faLink} size='sm' className='nav-icon' />
						</div>
						<p>Connect</p>
					</span>

					<span className='nav-item'>
						<div className='icon-case'>
							<FontAwesomeIcon icon={faSpaceShuttle} size='sm' className='nav-icon' />
						</div>
						<p>Parade</p>
					</span>

					<span className='nav-item'>
						<div className='icon-case'>
							<FontAwesomeIcon icon={faUsers} size='sm' className='nav-icon' />
						</div>
						<p>Group</p>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
