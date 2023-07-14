import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

const LocationModal = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [city, setCity] = useState('');

  const mapRef = useRef(null);
  const geocoder = useRef(new props.google.maps.Geocoder());

  const handleMapClick = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    setSelectedLocation({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });
    reverseGeocode(latLng);
  };

  //讀取使用者目前定位並更新地圖狀態
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateLocation);
    }
  }, []);

  //按下確定後會傳遞的值
  const handleModalOk = () => {
    console.log('選擇的位置:', selectedLocation);
    console.log('所在縣市:', city);
    props.onOk(selectedLocation, city);
    console.log(props);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== '') {
      searchLocation();
    }
  };

  const searchLocation = () => {
    geocoder.current.geocode({ address: searchValue }, (results, status) => {
      if (status === 'OK') {
        console.log('反向解析結果:', results);
        const { lat, lng } = results[0].geometry.location;
        setSelectedLocation({
          lat: lat(),
          lng: lng(),
        });
        reverseGeocode(results[0].geometry.location);
        if (mapRef.current) {
          mapRef.current.map.panTo(results[0].geometry.location);
        }
      } else {
        console.log('無法找到該地點');
      }
    });
  };

  // 接收地標 location 作為參數
  const reverseGeocode = (location) => {
    geocoder.current.geocode({ location }, (results, status) => {
      if (status === 'OK') {
        console.log(results); //google map 回傳的所有值
        const city = getCityFromGeocode(results[0]);
        setCity(city);
      }
    });
  };

  // 反向解析function
  const getCityFromGeocode = (geocode) => {
    for (let i = 0; i < geocode.address_components.length; i++) {
      const addressComponent = geocode.address_components[i];
      if (
        addressComponent.types.includes('administrative_area_level_2') ||
        addressComponent.types.includes('administrative_area_level_1')
      ) {
        return addressComponent.long_name;
      }
    }
    return '';
  };

  // 更新 經緯度 + 城市
  const updateLocation = (position) => {
    setSelectedLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    if (mapRef.current) {
      mapRef.current.map.panTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }
    setCity('');
  };

  return (
    <Modal show={props.visible} onHide={props.onCancel} className='w-30'>
      <Modal.Header closeButton>
        <Modal.Title>選擇位置</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ height: '60vh', marginBottom: '20px' }} className='ms-4'>
          <form onSubmit={handleSearchSubmit}>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='搜尋地點'
                value={searchValue}
                onChange={handleSearchChange}
              />
              <button className='btn' type='submit' style={{ backgroundColor: '#E7ADAC' }}>
                搜尋
              </button>
            </div>
          </form>
          <div style={{ position: 'relative', zIndex: 0 }}>
            <Map
              google={props.google}
              onClick={handleMapClick}
              ref={mapRef}
              initialCenter={
                selectedLocation || {
                  lat: 25.0329694, // 初始中心點緯度
                  lng: 121.5654177, // 初始中心點經度
                }
              }
              zoom={14}
              style={{ width: '28vw', height: '52vh' }}
            >
              {selectedLocation && <Marker position={selectedLocation} />}
            </Map>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={props.onCancel}>
          取消
        </button>
        <button className='btn' onClick={handleModalOk} style={{ backgroundColor: '#E7ADAC' }}>
          確定
        </button>
      </Modal.Footer>
    </Modal>
  );
};

LocationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  google: PropTypes.object, // 或者根據需要的屬性進行精確的驗證
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOLGE_MAP,
  language: 'zh-TW',
})(LocationModal);
