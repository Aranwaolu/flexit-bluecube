import profileImg from '../../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

export const Data = [
	{
		id: 1,
		img_url: profileImg,
		title: 'Micheal liked you!',
		time: 'About 20 minutes ago',
		icon: <FontAwesomeIcon icon={faHeart} color={'#333'} />,
	},
	{
		id: 2,
		img_url: profileImg,
		title: 'Jack liked you!',
		time: 'About 40 minutes',
		icon: <FontAwesomeIcon icon={faHeart} />,
	},
	{
		id: 3,
		img_url: profileImg,
		title: 'Martin commented on your photo!',
		time: 'About 56 minutes ago',
		icon: <FontAwesomeIcon icon={faComment} />,
	},
]
