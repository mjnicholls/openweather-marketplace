import React from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear, subDays } from "date-fns";
import range from "lodash/range";
import { Col, Form, Label } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import { months } from "../config";
import moment from 'moment';

const DatePickerMarket = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const years = range(1979, getYear(new Date()) + 1, 1);

  return (
    <>
      <Col className="dateLabel">
        <Form>
          <Label>From: </Label>

          <DatePicker
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
          />
        </Form>
      </Col>
      <Col className="dateLabel">
        <Form>
          <Label>To: </Label>

          <DatePicker
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
          />
        </Form>
      </Col>
    </>
  );
};

export default DatePickerMarket;
