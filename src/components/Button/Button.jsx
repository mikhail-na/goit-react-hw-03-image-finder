import PropTypes from 'prop-types'
import { LoadMoreBtn } from './Button.module';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}