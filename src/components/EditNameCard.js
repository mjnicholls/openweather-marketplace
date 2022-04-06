import React from 'react'

import PropTypes from 'prop-types'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import { Edit } from 'react-ikonate'
import { Button } from 'reactstrap'

import EditName from './EditName'

const EditNameCard = ({ location, index, locations, setLocations }) => {
  const [alert, setAlert] = React.useState(null)

  const hideAlert = () => {
    setAlert(null)
  }

  const showUpdatePopUp = () => {
    setAlert(
      <ReactBSAlert
        title="Update Name"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <EditName
          location={location}
          index={index}
          locations={locations}
          setLocations={setLocations}
          close={hideAlert}
        />
      </ReactBSAlert>,
    )
  }

  return (
    <>
      {alert}
      <Button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0px',
        }}
        title="Update"
        className="text-end shadow-none"
        onClick={(e) => {
          e.preventDefault()
          showUpdatePopUp()
          e.stopPropagation()
        }}
      >
        <Edit color="#48484a" />
      </Button>
    </>
  )
}

EditNameCard.propTypes = {
  locations: PropTypes.array,
  location: PropTypes.object,
  setLocations: PropTypes.func,
  index: PropTypes.func,
}

export default EditNameCard
