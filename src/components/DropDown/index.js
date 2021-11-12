import './index.css'

import useBluecube from '../../useBluecube'

import { Data } from './data'

const DropDownBar = () => {
	const { isNotificationIconClicked } = useBluecube()

	return (
		<div className={isNotificationIconClicked ? 'notification-list show' : 'notification-list hide'}>
			<ul>
				{Data.map((item) => {
					return (
						<li key={item.id} className='notification-item'>
							<img src={item.img_url} alt='profile' className='notification-img' />
							<div className='notification-content'>
								<h4>{item.title}</h4>
								<p>{item.time}</p>
							</div>
							<span>{item.icon}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default DropDownBar
