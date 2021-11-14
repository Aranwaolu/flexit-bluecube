import React from 'react'
import useBluecube from '../../useBluecube'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import DropDownBar from '../DropDown'

const HeaderBar = () => {
	const { handleChange, handleSubmit, isProfileNameClicked, toggleClick, toggleNotificationIcon } =
		useBluecube()

	return (
		<div className='top-bar'>
			<div className='search-bar'>
				<FontAwesomeIcon icon={faSearch} size='lg' className='search-icon' />
				<input
					placeholder='Find Something...'
					className='search-input'
					// value={''}
					onChange={(e) => handleChange(e.target.value)}
					onClick={() => {
						handleSubmit()
					}}
				/>
				<button
					className='search-btn'
					type='submit'
					onClick={() => {
						handleSubmit()
					}}
				>
					Search
				</button>
			</div>

			<div className='top-bar-menu'>
				<div
					className='notification-icon'
					onClick={() => {
						toggleNotificationIcon()
					}}
				>
					<FontAwesomeIcon icon={faBell} size='2x' />
					<span className='icon-badge'>3</span>
				</div>
				<div className='profile-image'>
					<span></span>
					<span className='profile-image-badge'></span>
				</div>
				<div
					className='profile-name'
					onClick={() => {
						toggleClick()
					}}
				>
					<p className='name'>Stephen</p>
					{isProfileNameClicked ? (
						<FontAwesomeIcon icon={faCaretUp} />
					) : (
						<FontAwesomeIcon icon={faCaretDown} />
					)}
				</div>
			</div>

			<DropDownBar />
		</div>
	)
}

export default HeaderBar
