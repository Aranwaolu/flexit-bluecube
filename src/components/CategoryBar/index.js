import './index.css'

const CategoryBar = () => {
	return (
		<div className='category'>
			<select name='world' className='category-select'>
				<option value=''>World</option>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='europe'>Europe</option>
			</select>
			<select name='following' className='category-select'>
				<option value=''>Following</option>
				<option value='Jesus'>Jesus</option>
				<option value='reverend'>Reverend</option>
				<option value='lamb'>Lamb</option>
			</select>
			<select name='popular' className='category-select'>
				<option value=''>Popular</option>
				<option value='Jesus'>Jesus</option>
				<option value='coke'>Coke</option>
				<option value='airplane'>Airplane</option>
			</select>
			<select name='post' className='category-select'>
				<option value=''>Post</option>
				<option value='facebook'>Facebook</option>
				<option value='linkedIn'>LinkedIn</option>
				<option value='medium'>Medium</option>
			</select>
			<select name='gender' className='category-select'>
				<option value=''>Gender</option>
				<option value='female'>Female</option>
				<option value='male'>Male</option>
			</select>
			<select name='location' className='category-select'>
				<option value=''>Location</option>
				<option value='abuja'>Abuja</option>
				<option value='lagos'>Lagos</option>
				<option value='porthacourt'>Porthacourt</option>
			</select>
			<select name='profession' className='category-select'>
				<option value=''>Profession</option>
				<option value='doctor'>Doctor</option>
				<option value='engineer'>Engineer</option>
				<option value='lawyer'>Lawyer</option>
			</select>
		</div>
	)
}

export default CategoryBar
