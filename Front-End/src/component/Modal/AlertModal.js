import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Modal/alertModal.scss';

const AlertModal = ({ state, message, showModal, handleModalClose }) => {
  let icon = '';
  console.log(state);
  if (state === 201) {
    icon += `<div class="ui-success">
		<svg viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Group-3" transform="translate(2.000000, 2.000000)">
							<circle id="Oval-2" stroke="rgba(165, 220, 134, 0.2)" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
								<circle  class="ui-success-circle" id="Oval-2" stroke="#A5DC86" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
								<polyline class="ui-success-path" id="Path-2" stroke="#A5DC86" stroke-width="4" points="19 38.8036813 31.1020744 54.8046875 63.299221 28"></polyline>
						</g>
				</g>
		</svg>
	</div>`;
  } else if (state === 409) {
    icon = 'fa-check-circle';
  }

  return (
    <>
      {showModal && (
        <div className='modal fade show' tabIndex='-1' role='dialog' style={{ display: 'block' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'></h5>
                <button
                  type='button'
                  className='close btn-md'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={handleModalClose}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                {icon}
                <p className='ms-2'>{message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

AlertModal.propTypes = {
  state: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default AlertModal;
