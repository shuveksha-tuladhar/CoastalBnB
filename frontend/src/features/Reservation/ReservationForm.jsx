import React, { useState } from "react";
import "./ReservationForm.css";
import daysDiff from "../../utils/daysDiff";
import Card from "react-bootstrap/Card";

export default function ReservationForm(props) {
  const { price, maxGuest, bedrooms } = props;

  console.log("price:", price, "Guest:", maxGuest);
  const [startDate, setStartDate] = useState("2023-10-02");
  const [endDate, setEndDate] = useState("2023-10-10");
  const [numGuests, setNumGuests] = useState("");

  return (

      <form id="reservation-form">
            <Card className="reservation-card"> 
        <ul>
          <div id="reservation-price">
            <span>
              <b>${price}</b> /night
            </span>
          </div>
          <br />
          <div id="start-end-dates">
            <div id="checkin-div">
              <div id="other-small-font">CHECK-IN</div>
              <label>
                <input
                  className="date-input"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  min={"2023-10-03"}
                />
              </label>
            </div>
            <div className="vertical-line-reservations-2"></div>
            <div>
              <div id="other-small-font">CHECKOUT</div>
              <label>
                <input
                  className="date-input"
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  required
                  min={startDate ? startDate : Date()}
                />
              </label>
            </div>
          </div>
          <div id="num-guests">
            <div id="other-small-font">GUESTS</div>
            <label>
              <input
                type="number"
                onChange={(e) => setNumGuests(e.target.value)}
                required
                min="1"
                max={bedrooms + 1}
                placeholder="1"
              />
            </label>
          </div>
        </ul>
        <br />
        <ul className="fees">
          <span className="underline">
            ${price + (numGuests ? (numGuests - 1) * 10 : 0)} X{" "}
            {startDate && endDate ? daysDiff(startDate, endDate) : 0} nights
          </span>
          <span>
            {startDate && endDate
              ? "$" +
                daysDiff(startDate, endDate) *
                  (price + (numGuests ? (numGuests - 1) * 10 : 0))
              : "$0"}
          </span>
          <span className="underline">Service fee</span>
          <span>
            {"$" +
              Math.floor(
                ((startDate && endDate ? daysDiff(startDate, endDate) : 0) *
                  (price + (numGuests ? (numGuests - 1) * 10 : 0))) /
                  7
              )}
          </span>
          <div className="solid-line-reservations-2"></div>
          <br />
          <span>Total cost</span>
          <span>
            {"$" +
              Math.floor(
                ((startDate && endDate ? daysDiff(startDate, endDate) : 0) *
                  (price + (numGuests ? (numGuests - 1) * 10 : 0)) *
                  8) /
                  7
              )}
          </span>
        </ul>
        <button className="reservation-button" type="submit">
          Reserve
        </button>
        </Card>
      </form>
  
  );
}
