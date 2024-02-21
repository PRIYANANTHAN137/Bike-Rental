import React from "react";
import "../../styles/find-Bike-form.css";
import "../../styles/find-Bike-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Bike" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="number" placeholder="No of Days" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Booking Date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Booking time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
          <option>Select Type</option>
            <option value="ac">Family Bike</option>
            <option value="non-ac">Dirt Bike</option>
            <option value="non-ac">Sports Bike</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>  Bing</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;