import React from 'react'

import PropTypes from 'prop-types'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import { Edit } from 'react-ikonate'
import { Button } from 'reactstrap'

import EditName from './EditName'

const EditNameCard = ({ locations, setLocations, setisEdit, index}) => {
  const [alert, setAlert] = React.useState(null)

  const hideAlert = () => {
    setAlert(null)
  }

  const showUpdatePopUp = () => {
    setAlert(
      <ReactBSAlert
        title="Update Location Name"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <EditName
        locations={locations}
        setLocations={setLocations}
        setIsEdit={setisEdit}
        index={index}

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
  id: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string,
}

export default EditNameCard
