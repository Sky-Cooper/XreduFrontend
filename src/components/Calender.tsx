import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";
import "./Calendar.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContainerBackground from "../UI/ContainerBackground";
import DataContainerBackground from "../UI/DataContainerBackground";
import { Typography } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiDatePickerToolbar-title": {
            fontSize: "15px",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          sx={{
            backgroundColor: "#f2f2f2f2",
            width: "320px",
            height: "350px",
            borderRadius: "25px",
            typography: "Overused Grotesk",
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default Calendar;
