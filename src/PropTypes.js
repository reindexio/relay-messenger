import { PropTypes } from 'react';

export const NavigatorContextType = PropTypes.shape({
  pop: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
});
