import React from "react";
import { Col, Form, Label } from "reactstrap";
import moment from "moment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";

const DatePickerMarket = ({ startDate, setStartDate, endDate, setEndDate }) => {

  const endDatePlusOne = new Date(startDate)

  console.log("setValue", startDate);

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
                minDate={new Date("1979")}
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
          {/* <DatePicker
            selected={calendar === "Years" ? startYear : calendar === "Months" ? startMonth : calendar === "Days" ? startDay : null}
            onChange={
              calendar === "Years" ? 
              (date) => {
              setStartYear(date);
              setCalendar("Months");
            }
          :
          calendar === "Months" ?
          (date) => {
            setStartMonth(date);
            setCalendar("Days");
          }
          : 
          calendar === "Days" ?
          (date) => {
            setStartDay(date);
            setStartDate(startYear, startMonth, startDay)
          }
          : 
          null
          }
            showYearPicker={calendar === "Years" ? true : calendar === "Months" ? false : calendar === "Days" ? false : null}
            showMonthYearPicker={calendar === "Years" ? false : calendar === "Months" ? true : calendar === "Days" ? false : null}
            dateFormat={calendar === "Years" ? "yyyy" : calendar === "Months" ? "MM/yyyy" : calendar === "Days" ? "dd/MM/yyyy" : null}
            //value={years}
            maxDate={moment().toDate()}
            //minDate={new Date("1979")}
          /> */}

          {/* <DatePicker
            className="owm-selector"
            placeholder="From"
            maxDate={moment().toDate()} 
            renderCustomHeader={({ date, changeYear, changeMonth }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /> */}
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
          {/* <DatePicker
            className="owm-selector"
            minDate={subDays(startDate, -1)}
            maxDate={moment().toDate()}
            renderCustomHeader={({ date, changeYear, changeMonth }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          /> */}
        </Form>
      </Col>
    </>
  );
};

export default DatePickerMarket
