import React from "react";
import { Col, Form, Label } from "reactstrap";
import moment from "moment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";

const DatePickerForecast = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {

  const endDatePlusOne = new Date(startDate)

  return (
    <>
      <Col className="dateLabel">
        <Form>
          <Label>From: </Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                minDate={new Date("2017")}
                maxDate={moment().toDate()}
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </Form>
      </Col>
      <Col className="dateLabel">
        <Form>
          <Label>To: </Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
              style={{border: "none"}}
                openTo="year"
                views={["year", "month", "day"]}
                minDate={endDatePlusOne.setDate(endDatePlusOne.getDate() + 1)}
                maxDate={moment().toDate()}
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
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

export default DatePickerForecast;
