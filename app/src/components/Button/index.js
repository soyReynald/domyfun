import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder25: "rounded-radius255",
  CircleBorder20: "rounded-radius20",
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder25: "rounded-radius25",
  icbRoundedBorder42: "rounded-radius425",
  icbRoundedBorder32: "rounded-radius325",
  icbRoundedBorder5: "rounded-radius5",
  icbRoundedBorder22: "rounded-radius225",
  icbCircleBorder40: "rounded-radius40",
  icbCircleBorder35: "rounded-radius35",
};
const variants = {
  OutlineGray301: "outline outline-[0.5px] outline-gray_301 text-black_900",
  FillLightgreen700: "bg-light_green_700 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  OutlineBluegray90019:
    "border border-bluegray_900_19 border-solid text-gray_900",
  FillYellow900: "bg-yellow_900 text-white_A700",
  OutlineGray900: "border border-gray_900 border-solid text-gray_900",
  OutlineLightgreen70033: "bg-white_A700 shadow-bs1 text-gray_900",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  OutlineGray301_1:
    "bg-yellow_900 outline outline-[0.5px] outline-gray_301 text-white_A700",
  OutlineGray301_2:
    "bg-gray_52 outline outline-[0.5px] outline-gray_301 text-gray_603",
  OutlineGray90019: "border border-gray_900_19 border-solid text-gray_900",
  icbFillLightgreen700: "bg-light_green_700",
  icbFillYellow900: "bg-yellow_900",
  icbFillLightgreen70019: "bg-light_green_700_19",
  icbFillLightgreen70026: "bg-light_green_700_26",
  icbFillGray200: "bg-gray_200",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px]",
  md: "p-[11px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
  lg: "2xl:p-[10px] 3xl:p-[12px] p-[14px] lg:p-[7px] xl:p-[9px]",
  xl: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] p-[19px]",
  "2xl": "lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] p-[22px]",
  smIcn: "3xl:p-[11px] p-[13px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  mdIcn: "xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px] lg:p-[9px]",
  lgIcn: "lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] p-[24px]",
  xlIcn: "lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] p-[27px]",
  "2xlIcn": "lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] p-[35px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder25",
    "CircleBorder20",
    "icbCircleBorder20",
    "icbCircleBorder25",
    "icbRoundedBorder42",
    "icbRoundedBorder32",
    "icbRoundedBorder5",
    "icbRoundedBorder22",
    "icbCircleBorder40",
    "icbCircleBorder35",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray301",
    "FillLightgreen700",
    "FillGray900",
    "OutlineBluegray90019",
    "FillYellow900",
    "OutlineGray900",
    "OutlineLightgreen70033",
    "FillWhiteA700",
    "OutlineGray301_1",
    "OutlineGray301_2",
    "OutlineGray90019",
    "icbFillLightgreen700",
    "icbFillYellow900",
    "icbFillLightgreen70019",
    "icbFillLightgreen70026",
    "icbFillGray200",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
