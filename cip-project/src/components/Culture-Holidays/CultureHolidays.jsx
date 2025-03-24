import React, { useState } from "react";

import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

import ImageLocal from "../../assets/banner.png";
import ImageSlider from "../../assets/Calendar card.png";
import "./CultureHolidays.css";
import CultureBanner from "../Geography/CultureBanner";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


const months = [
    { name: "JAN", enabled: true },
    { name: "FEB", enabled: true },
    { name: "MAR", enabled: true },
    { name: "ABR", enabled: false },
    { name: "MAY", enabled: false },
    { name: "JUN", enabled: true },
    { name: "JUL", enabled: true },
    { name: "AGU", enabled: false },
    { name: "SEP", enabled: true },
    { name: "OCT", enabled: true },
    { name: "NOV", enabled: true },
    { name: "DEC", enabled: true },
  ];
  
  const getDaysInMonth = (month) => {
    const daysInMonth = {
      JAN: 31, FEB: 28, MAR: 31, ABR: 30, MAY: 31, JUN: 30,
      JUL: 31, AGU: 31, SEP: 30, OCT: 31, NOV: 30, DEC: 31,
    };
    return daysInMonth[month] || 30;
  };

const CultureHolidays = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#df5b17",
      ...theme.applyStyles("dark", {
        backgroundColor: "#df5b17",
      }),
    },
  }));

  const [selectedMonth, setSelectedMonth] = useState("JAN");

  return (
    <>
    <CultureBanner componentText={"In this category you will be able to win 46 points.  You will be able to check it in the avatar of the left menú."}
        />
        <div className="containerPageCulture">
      <div className="breadcrum">
        <span>Home |</span>{" "}
        <span className="colorspan">Holidays (6 points)</span>
        <h3>Holidays</h3>
      </div>

      <div className="topPage">
        <img src={ImageLocal} alt="bannertwopeople" />
      </div>

      <div className="bottomPage">
        <h2>Click on each month to verify the US holidays:</h2>
        <div className="containerContainer">
          <Box sx={{ width: "100%" }}>
            {/* <LinearProgress variant="determinate" value={20} style={}/> */}
            <BorderLinearProgress variant="determinate" value={15} />
          </Box>

          <div className="containerHoliday">
            <div className="slider">
              <img src={ImageSlider} alt="" />
            </div>
            <div className="calendar">
              <div className="calendar-container">
                {/* Barra de Meses */}
                <div className="month-selector">
                  {months.map((month, index) => (
                    <button
                      key={index}
                      className={`month-btn ${
                        selectedMonth === month.name ? "active" : ""
                      } ${!month.enabled ? "disabled" : ""}`}
                      onClick={() =>
                        month.enabled && setSelectedMonth(month.name)
                      }
                      disabled={!month.enabled}
                    >
                      {month.name}
                    </button>
                  ))}
                </div>

                {/* Calendario de Días */}
                <div className="calendar-grid">
                  {Array.from(
                    { length: getDaysInMonth(selectedMonth) },
                    (_, i) => (
                      <div
                        key={i}
                        className={`day ${i + 1 === 19 ? "highlight" : ""}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="btnBlack">Next</button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default CultureHolidays;