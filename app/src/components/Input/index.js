import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray90026:
    "bg-white_A700 border border-gray_900_26 border-solid shadow-bs",
  FillYellow900: "bg-yellow_900",
  UnderLineGray90026: "border-b-[1px] border-gray_900_26",
  UnderLineLightgreen700: "border-b-[1px] border-light_green_700",
  OutlineGray900: "bg-white_A700 border border-gray_900 border-solid",
  FillWhiteA700: "bg-white_A700",
  OutlineLightgreen700: "bg-gray_50 border border-light_green_700 border-solid",
  OutlineGray90019: "border border-gray_900_19 border-solid",
  srcOutlineGray90026:
    "bg-white_A700 border border-gray_900_26 border-solid shadow-bs",
  srcUnderLineGray90026: "border-b-[1px] border-gray_900_26",
  srcOutlineGray90019: "border border-gray_900_19 border-solid",
};
const shapes = {
  RoundedBorder5: "rounded-radius5",
  srcRoundedBorder5: "rounded-radius5",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] p-[21px]",
  md: "lg:pb-[10px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px]",
  lg: "lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] pb-[25px]",
  smSrc: "lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] p-[21px]",
  mdSrc:
    "lg:p-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] px-[23px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px]",
  lgSrc: "lg:pb-[10px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder5", "srcRoundedBorder5"]),
  variant: PropTypes.oneOf([
    "OutlineGray90026",
    "FillYellow900",
    "UnderLineGray90026",
    "UnderLineLightgreen700",
    "OutlineGray900",
    "FillWhiteA700",
    "OutlineLightgreen700",
    "OutlineGray90019",
    "srcOutlineGray90026",
    "srcUnderLineGray90026",
    "srcOutlineGray90019",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc", "mdSrc", "lgSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineGray90026",
  size: "",
};

export { Input };
