import React from "react";
import { Col, Form, Label } from "reactstrap";
import moment from "moment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const DatePickerForecast = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {

  const yesterday = moment().subtract(1, 'days').toDate();

  return (
    <>
      <Col className="dateLabel">
        <Form>
          <Label> </Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
              className="dateLabel"
                openTo="year"
                views={["year", "month", "day"]}
                minDate={new Date("2017")}
                maxDate={endDate !== null ? endDate : yesterday}
                value={startDate}
                label={'From'}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                format="dd/MM/yyyy"
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
              style={{border: "none"}}
                openTo="year"
                views={["year", "month", "day"]}
                minDate={startDate !== null ? startDate : new Date("2017") }
                maxDate={yesterday}
                value={endDate}
                label={'To'}
                inputProps={{ readOnly: true }}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                format="dd/MM/yyyy"
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </Form>
      </Col>
    </>
  );
};

DatePickerForecast.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func,
};

export default DatePickerForecast;
