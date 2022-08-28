import React from 'react';
import { Link } from 'react-router-dom';
import AddFavourite from '../AddFavourites/AddFavourite';
//styles
import { ThumbStyle } from './Thumb.styles';
//Types
type Props = {
  image: string,
  movieId?: number,
  clickable: boolean,
  isFavourite: boolean,
  handleFavouritesClick:() => void,
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable, isFavourite, handleFavouritesClick }) => {

  return (
    <ThumbStyle>
      {clickable ? (
        <div className='image-container d-flex justify-content-start m-3'>
          <Link to={`/${movieId}`} >
            <img src={image} alt='movie-thumb'/>
          </Link>
          <div className='overlay d-flex align-items-center justify-content-center' onClick={handleFavouritesClick}>
						<AddFavourite isFavourite={isFavourite}/>
					</div>
        </div>
      ) : (
        <div className='image-container d-flex justify-content-start m-3'>
          <div>
            <img src={image} alt='movie-thumb'/>
          </div>
          <div className='overlay d-flex align-items-center justify-content-center' onClick={handleFavouritesClick}>
            <AddFavourite isFavourite={isFavourite}/>
					</div>
        </div>
      )}
    </ThumbStyle>
  );
};

export default Thumb;
