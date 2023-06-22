import React, { useState } from 'react';
import { Modal } from 'antd';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

const LocationModal = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    setSelectedLocation({
      lat: latLng.lat(),
      lng: latLng.lng()
    });
  };

  const handleModalOk = () => {
    // 在此處理選擇的位置
    console.log('選擇的位置:', selectedLocation);
    props.onOk(selectedLocation);
  };

  return (
    <Modal
      title="選擇位置"
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={handleModalOk}
      className='w-30'
    >
      <div style={{ height: '400px', marginBottom: '20px' }} className='ms-4'>
        <Map
          google={props.google}
          onClick={handleMapClick}
          initialCenter={{
            lat: 25.0329694, // 初始中心點緯度
            lng: 121.5654177 // 初始中心點經度
          }}
          zoom={14}
          style={{ width: '420px', height: '400px' }}
        >
          {selectedLocation && (
            <Marker position={selectedLocation} />
          )}
        </Map>
      </div>
    </Modal>
  );
};

LocationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  google: PropTypes.object // 或者根據需要的屬性進行精確的驗證
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDEQ4Rf5sExPchgOPBZVeyhIVs1IVwagUw'
})(LocationModal); 