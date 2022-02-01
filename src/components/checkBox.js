import React, { useState } from "react";
import { Label, Form, FormGroup, Input } from "reactstrap";
import { weathers } from "../config";

const CheckyBox = ({ setCheckedWeather, setFileValue }) => {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = weathers;


  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setCheckedWeather(updatedList)
    setFileValue(true)
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
     
    : "";

    console.log('checked', checkedItems)

    //console.log('hey', checkedWeather)

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
  <>
        <Form className="checkbox-radio-columns ml-5">
          {checkList.map((item, index) => (
               <FormGroup index={index} check className="form-check-radio">
               <Label check>
               <span className={isChecked(item)}>{item}</span>
              <Input value={item} type="checkbox" onChange={handleCheck} />
              </Label>
            </FormGroup>
          ))}
</Form>
</>

          /*}
      <div>
        {`Items checked are: ${checkedItems}`}
      </div>
          */
  );
}

export default CheckyBox