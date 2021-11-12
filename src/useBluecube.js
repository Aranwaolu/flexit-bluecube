import { useContext } from 'react'
import { BluecubeContext } from './BluecubeContext'

const useBluecube = () => {
	const [state, setState] = useContext(BluecubeContext)

	function toggleClick() {
		setState((state) => ({ ...state, isProfileNameClicked: !state.isProfileNameClicked }))
	}

	function toggleNav() {
		setState((state) => ({ ...state, isNavOpen: !state.isNavOpen }))
	}

	function toggleNotificationIcon() {
		setState((state) => ({ ...state, isNotificationIconClicked: !state.isNotificationIconClicked }))
	}

	function handleChange(search_value) {
		setState((state) => ({ ...state, query: search_value }))
	}

	function handleSubmit(e) {
		// e.preventDefault()
		setState((state) => ({ ...state, page: 0 }))
	}

	function fetchMoreImages() {
		setState((state) => ({ ...state, page: state.page + 1 }))
	}

	return {
		handleChange,
		handleSubmit,
		fetchMoreImages,
		isProfileNameClicked: state.isProfileNameClicked,
		isNavOpen: state.isNavOpen,
		isNotificationIconClicked: state.isNotificationIconClicked,
		loading: state.loading,
		photos: state.photos,
		query: state.query,
		toggleClick,
		toggleNav,
		toggleNotificationIcon,
	}
}

export default useBluecube
