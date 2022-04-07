import React from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Col, Form, Label } from 'reactstrap'

const DatePickerForecast = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const yesterday = moment().subtract(1, 'days').toDate()

  return (
    <>
      <Col className="dateLabel">
        <Form>
          <Label> </Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                mask="__-__-____"
                className="dateLabel"
                openTo="year"
                views={['year', 'month', 'day']}
                minDate={new Date('10-07-2017')}
                maxDate={endDate !== null ? endDate : yesterday}
                value={startDate}
                label="From"
                onChange={(newValue) => {
                  setStartDate(newValue)
                }}
                inputFormat="dd-MM-yyyy"
                renderInput={(startDate) => (
                  <TextField {...startDate} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </Form>
      </Col>
      <Col className="dateLabel">
        <Form>
          <Label></Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                mask="__-__-____"
                style={{ border: 'none' }}
                openTo="year"
                views={['year', 'month', 'day']}
                minDate={
                  startDate !== null ? startDate : new Date('07-10-2017')
                }
                maxDate={yesterday}
                value={endDate}
                label="To"
                inputProps={{ readOnly: true }}
                onChange={(newValue) => {
                  setEndDate(newValue)
                }}
                inputFormat="dd-MM-yyyy"
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </Form>
      </Col>
    </>
  )
}

DatePickerForecast.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func,
}

export default DatePickerForecast
