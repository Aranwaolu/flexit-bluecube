import './index.css'
import PhotoCard from '../PhotoCard'

import useBluecube from '../../useBluecube'

import InfiniteScroll from 'react-infinite-scroll-component'

const FeedTest = () => {
	const { fetchMoreImages, name, photos, testButton } = useBluecube()

	return (
		<div>
			<button onClick={() => testButton()}>{name}</button>

			<InfiniteScroll
				dataLength={photos.length}
				next={() => fetchMoreImages()}
				hasMore={true}
				loader={<h4>Loading...</h4>}
			>
				<div className='feed'>
					{photos.length > 0 &&
						photos.map((photo, index) => {
							return <PhotoCard key={photo.id} data={photo} />
						})}
				</div>
			</InfiniteScroll>
		</div>
	)
}

export default FeedTest
