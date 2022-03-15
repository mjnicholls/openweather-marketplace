import React from "react";
import { Col, Form, Label } from "reactstrap";
import moment from "moment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";

const DatePickerMarket = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const endDatePlusOne = new Date(startDate);

  console.log("setValue", startDate);

  return (
    <>
      <Col className="dateLabel">
        <Form>
          <Label></Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                className="dateLabel"
                openTo="year"
                views={["year", "month", "day"]}
                minDate={new Date("1979")}
                maxDate={moment().toDate()}
                //maxDate={startDateMinusOne.setDate(startDateMinusOne.getDate() + 2)}
                value={startDate}
                label={"From"}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} placeholder="o" />
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
                style={{ border: "none" }}
                openTo="year"
                views={["year", "month", "day"]}
                minDate={endDatePlusOne.setDate(endDatePlusOne.getDate() + 1)}
                maxDate={moment().toDate()}
                value={endDate}
                label={"To"}
                InputProps={{ readOnly: true }}
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

export default DatePickerMarket;
