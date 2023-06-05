import PropTypes from 'prop-types';
import { GalleryListItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.module';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <ImageList>
      {galleryItems.map(galleryItem => {
        return (
          <GalleryListItem key={galleryItem.id} galleryItem={galleryItem} />
        );
      })}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}