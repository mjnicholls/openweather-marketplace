import React, { useState, useEffect, useRef } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import Map from '../components/Map'
import placeMarker from '../utils/placeMarker'
import Location from '../components/Location'
import EditableInput from '../components/EditableInput'

const NewHistoryBulk = () => {

    const mapRef = useRef(null)
    const searchBoxRef = useRef()

   const [error, setError] = useState({})

   const [name, setName] = useState('')

    const [location, setLocation] = useState({
        name: '',
        lat: '',
        lon: '',
      })

      const [isDropDown, setIsDropDown] = useState(false)

      const [isLocationNameEdited, setIsLocationNameEdited] = useState(false)

      const [tempLocation, setTempLocation] = useState({ ...location })

      useEffect(() => {
        setTempLocation({
          ...tempLocation,
          lat: location.lat,
          lon: location.lon,
        })
      }, [location])
    
      useEffect(() => {
        if (tempLocation.lat && tempLocation.lon) {
          // eslint-disable-next-line
          const position = new google.maps.LatLng(
            tempLocation.lat,
            tempLocation.lon,
          )
          // eslint-disable-next-line
          placeMarker(position, mapRef.current.map_)
        }
      }, [tempLocation])

 
    
      useEffect(() => {
        // detect click outside location search box
        document.addEventListener('mousedown', handleClickOutsideSearchBox)
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideSearchBox)
        }
      }, [])
    

      const setNameFunc = (val) => {
        setError({
          ...error,
          name: null,
        })
        setName(val)
      }
    
      const setLocationNameAware = (val) => {
        setError({
          ...error,
          location: null,
        })
        setLocation({
          ...val,
          name: isLocationNameEdited
            ? location.name
            : `${val.name} (${val.lat.toFixed(2)}, ${val.lat.toFixed(2)})`,
        })
      }

      const onClickMap = ({ lat, lng }) => {
        setTempLocation({
          lat,
          lon: lng,
          name: 'Custom location',
        })
      }

      const handleClickOutsideSearchBox = (e) => {
        if (searchBoxRef.current.contains(e.target)) {
          // inside click
          return
        }
        setIsDropDown(false)
        // outside click
        // ... do whatever on click outside here ...
      }
    
      const handleChange = (key, value) => {
        const newLocation = { ...location }
        newLocation[key] = value
        setLocation(newLocation)
      }
    

  return (
    <div className="container">
        <Row>
            <Col md="7" className="page-padding text-start">

        <div style={{marginBottom: "100px"}}>
      <h3>Create New History Bulk</h3>
</div>
      <Location
                mapRef={mapRef}
                location={location}
                setLocation={setLocation}
                tempLocation={tempLocation}
                setTempLocation={setTempLocation}
                onChange={(e) => handleChange('location', e.target.value)}
                error={error}
                setError={setError}
                name={name}
                searchBoxRef={searchBoxRef}
                isDropDown={isDropDown}
                setIsDropDown={setIsDropDown}
                setIsLocationNameEdited={setIsLocationNameEdited}
              
              />

      </Col>

      <Col md="5">
      <Map
            mapRef={mapRef}
            mapLocation={tempLocation}
            setLocation={setLocationNameAware}
            onClickMap={onClickMap}
            isButtonInfoWindow={
              location.lat !== tempLocation.lat ||
              location.lon !== tempLocation.lon
            }
          />
        </Col>
      </Row>
   
    </div>
  );
};

export default NewHistoryBulk;
