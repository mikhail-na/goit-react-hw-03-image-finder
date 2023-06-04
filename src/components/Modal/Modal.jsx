import { Component } from 'react';
import { Overlay, ModalContainer, Img} from './Modal.module';

export class Modal extends Component {

  // the keydown handler was created to hide a modal window
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // the overlay handler was created to hide a modal window
  handleOverlayClick = (e) => { 
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  // add event listener , since you have to show model after pressing esc
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
  }

  // remove the event listeners, since you don't need to show the modal after pressing esc
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  render() {
    const { largeImageURL, alt } = this.props;

    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContainer >
          <Img src={largeImageURL} alt={alt} />
        </ModalContainer>
      </Overlay>
    );
  }
}