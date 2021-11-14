import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import bar_white from '../../assets/bar_line.svg'
import bar_shaded from '../../assets/bar_line_shaded.svg'

import useBluecube from '../../useBluecube'

const PhotoCard = ({ data, indexArr }) => {
	const { indexToHoverOver } = useBluecube()

	let youCanHover = false

	if (indexArr === indexToHoverOver) {
		youCanHover = true
		// console.log('deeper', indexArr, 'youcanhover:', youCanHover)
	}

	const photo = data

	let location
	if (photo.user.location) {
		location = String(photo.user.location).slice(0, 11)
	} else {
		location = 'Unknown'
	}

	const url = photo.urls.regular
	const first_name = photo.user.first_name.split(' ')[0].slice(0, 11)
	const age = String(photo.likes).slice(0, 2)

	return (
		<div
			className={youCanHover ? 'photo-card photo-card-view' : 'photo-card photo-card-default'}
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.03) 70%, rgba(0, 0, 0, 0.5) 100%), url(${url})`,
			}}
		>
			<div className='photo-switch'>
				<img src={bar_white} alt='bar lines' className='bar-line' />
				<img src={bar_shaded} alt='bar lines' className='bar-line' />
				<img src={bar_shaded} alt='bar lines' className='bar-line' />
				<img src={bar_shaded} alt='bar lines' className='bar-line' />
			</div>

			<div className={youCanHover ? 'photo-info photo-info-view' : 'photo-info photo-info-default'}>
				<p className='photo-info--name'>
					{' '}
					{first_name}, {age}
				</p>
				<span className='photo-info--location'>
					<FontAwesomeIcon icon={faMapMarkerAlt} size='sm' style={{ marginRight: '5px' }} />
					{location}
				</span>
				<div className={youCanHover ? 'photo-like' : 'photo-like photo-like-hide'}>
					<span className='like-icon'>
						<FontAwesomeIcon
							icon={faHeart}
							color='white'
							size='sm'
							style={{ fontSize: '16px' }}
						/>
					</span>
					<span className='like-icon'>
						<FontAwesomeIcon
							icon={faCommentAlt}
							color='white'
							size='sm'
							style={{ fontSize: '16px' }}
						/>
					</span>
				</div>
			</div>
		</div>
	)
}

export default PhotoCard
