import PropTypes from 'prop-types';
import { Component } from "react";
import { Item, Img } from "./ImageGalleryItem.module";
import { Modal } from "components/Modal/Modal";


export class GalleryListItem extends Component {
    state = {
        isOpen: false,
    }

  // the modal switcher was created to switch modal window 
    switchModal = () => {
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
    }

    render() {
      const { galleryItem: { webformatURL, largeImageURL, tags, id} } = this.props;
      const { isOpen } = this.state;

    return (
      <>
        <Item
          key={id}
          onClick={this.switchModal}>
          <Img src={webformatURL} alt={tags} />
        </Item>
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onClose={this.switchModal}
          />
        )}
      </>
    );
  }
}

GalleryListItem.propTypes = {
  galleryItem: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};


