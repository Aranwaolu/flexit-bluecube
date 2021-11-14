import './index.css'
import PhotoCard from '../PhotoCard'

import useBluecube from '../../useBluecube'

import InfiniteScroll from 'react-infinite-scroll-component'

const FeedTest = () => {
	const { fetchMoreImages, photos, togglePhotoCardDetailsView } = useBluecube()

	return (
		<div>
			<button onClick={() => console.log('button')}>name</button>

			<InfiniteScroll
				dataLength={photos.length}
				next={() => fetchMoreImages()}
				hasMore={true}
				loader={<h4>Loading...</h4>}
			>
				<div className='feed'>
					{photos.length > 0 &&
						photos.map((photo, index) => {
							return (
								<div
									onMouseEnter={() => console.log('here', index)}
									// onMouseLeave={() => togglePhotoCardDetailsView()}
								>
									{' '}
									<PhotoCard key={photo.id} data={photo} />{' '}
								</div>
							)
						})}
				</div>
			</InfiniteScroll>
		</div>
	)
}

export default FeedTest
