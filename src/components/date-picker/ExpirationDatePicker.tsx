import React from "react";
import DatePicker, { DatePickerProps } from "antd/es/date-picker";

const ExpirationDatePicker: React.FC<DatePickerProps> = ({
  children,
  ...datePickerProps
}) => {
  return (
    <DatePicker style={{ width: "100%" }} {...datePickerProps}>
      {children}
    </DatePicker>
  );
};

export default ExpirationDatePicker;
