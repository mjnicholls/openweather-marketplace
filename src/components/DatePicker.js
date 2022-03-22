import React, {useState} from "react";
import { Col, Form, Label } from "reactstrap";
import moment from "moment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";

const DatePickerMarket = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const endDatePlusOne = new Date(startDate);

  //const yesterday = moment().add(-1, 'days');

  const yesterday = new Date((new Date()).valueOf() - 1000*60*60*24)



console.log("yesterday", yesterday);
  console.log("setValue", startDate);

  return (
    <>
      <Col className="dateLabel">
        <Form>
          <Label></Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
              autoOk={true}
                className="dateLabel"
                openTo="year"
                views={["year", "month", "day"]}
                minDate={new Date("1979")}
                maxDate={endDate >= startDate ? endDate : moment().toDate()}
                //maxDate={maxDate}
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
                minDate={endDatePlusOne.setDate(endDatePlusOne.getDate())}
                maxDate={endDate < startDate ? endDate === startDate + 1 : moment().toDate()}
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
