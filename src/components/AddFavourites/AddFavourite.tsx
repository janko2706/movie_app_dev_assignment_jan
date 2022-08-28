import React from 'react';


//Types
type Props = {
	isFavourite: boolean,
}

const AddFavourite: React.FC<Props> = ({ isFavourite }) => {
    return (
        <>
			{isFavourite ? 
						<>
							<span className='mr-2'>Remove from Favourites</span>
							<svg
							width='1em'
							height='1em'
							viewBox='0 0 16 16'
							className='bi bi-heart-fill'
							fill='red'
							xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
								/>
							</svg>
						</>
					: 
						<>
							<span className='mr-2'>Add to Favourites</span>
							<svg
							width='1em'
							height='1em'
							viewBox='0 0 16 16'
							className='bi bi-heart-fill'
							fill='white'
							xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
								/>
							</svg>
						</>
			}

		</>
    );
};

export default AddFavourite;
