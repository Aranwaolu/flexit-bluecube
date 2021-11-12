import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BluecubeContext = React.createContext([{}, () => {}])

const BluecubeProvider = (props) => {
	const [state, setState] = useState({
		page: 0,
		photos: [],
		query: '',
		oldQuery: 'flexit', // set as default to help the program
		isNotificationIconClicked: false,
		isNavOpen: false,
		isProfileNameClicked: false,
		loading: false,
	})

	useEffect(() => {
		const api = 'https://api.unsplash.com'
		const accessKey = process.env.REACT_APP_UNSPLASH_ACESSKEY

		const feedUrl = `${api}/photos/?client_id=${accessKey}&page=${state.page}`
		const searchUrl = `${api}/search/photos/?client_id=${accessKey}&page=${state.page}&query=${state.query}`

		const getPhotos = async () => {
			try {
				axios.get(feedUrl).then((res) => {
					// setState({ ...state, photos: [...res.data] })
					// setState((state) => ({ ...state, photos: [...res.data] }))
					setState((state) => ({ ...state, photos: [...state.photos, ...res.data] })) // is there a way to check that we're not getting the same set of images again?
				})
			} catch (error) {
				console.log(error)
			}
		}

		const queryPhotos = async () => {
			console.log('page: ', state.page)
			try {
				if (state.oldQuery === 'flexit' || state.query !== state.oldQuery) {
					setState((state) => ({ ...state, oldQuery: state.query }))
					console.log('here', state)

					axios.get(searchUrl).then((res) => {
						setState((state) => ({ ...state, photos: [...res.data.results] }))
					})
				} else if (state.query === state.oldQuery) {
					axios.get(searchUrl).then((res) => {
						setState((state) => ({
							...state,
							photos: [...state.photos, ...res.data.results],
						}))
					})
				}
			} catch (error) {
				console.log(error)
			}
		}

		// if query, the photos should fetch all new data
		if (state.query) {
			// query call
			queryPhotos()
		} else {
			// normal feed call
			getPhotos()
		}

		// getPhotos()
	}, [state.page])
	//we could add count in the dependency array if count is changing
	// note that doing that would cause re-fetching and most likely changing the content...not updating it
	// we would want to do an update instead, where more images are fetched on scroll... so probably another useEffect to handle that

	console.log(state)

	return <BluecubeContext.Provider value={[state, setState]}>{props.children}</BluecubeContext.Provider>
}

export { BluecubeContext, BluecubeProvider }
