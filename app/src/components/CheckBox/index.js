import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillLightgreen700: "bg-light_green_700",
  FillLightgreen700_1: "bg-light_green_700",
};
const shapes = { RoundedBorder12: "rounded-radius125" };
const sizes = {
  sm: "pt-[2px]",
  md: "pb-[1px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] pt-[5px] px-[1px]",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder12"]),
  variant: PropTypes.oneOf(["FillLightgreen700", "FillLightgreen700_1"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "FillLightgreen700",
  size: "md",
};

export { CheckBox };
