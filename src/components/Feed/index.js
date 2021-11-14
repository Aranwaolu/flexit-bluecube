import './index.css'
import PhotoCard from '../PhotoCard'

import useBluecube from '../../useBluecube'

import InfiniteScroll from 'react-infinite-scroll-component'

const Feed = () => {
	const { fetchMoreImages, photos, setIndex, removeIndex } = useBluecube()

	return (
		<div>
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
									className='card-container'
									onMouseEnter={() => {
										setIndex(index)
									}}
									onMouseLeave={() => {
										removeIndex()
									}}
								>
									<PhotoCard key={photo.index} data={photo} indexArr={index} />
								</div>
							)
						})}
				</div>
			</InfiniteScroll>
		</div>
	)
}

export default Feed
