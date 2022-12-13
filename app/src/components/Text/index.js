import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[45px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[76px] text-[85px]",
  h2: "font-medium lg:text-[29px] xl:text-[36px] 2xl:text-[41px] 3xl:text-[49px] text-[55px]",
  h3: "lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-[45px]",
  h4: "font-semibold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px]",
  h5: "lg:text-[18px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-[35px]",
  h6: "font-medium lg:text-[17px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-[33px]",
  body1:
    "lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px]",
  body2:
    "lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px]",
  body3:
    "font-medium lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px]",
  body4:
    "lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]",
  body5:
    "lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-[22px]",
  body6:
    "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px]",
  body7:
    "font-semibold xl:text-[120px] 2xl:text-[135px] 3xl:text-[162px] text-[180px] lg:text-[96px]",
  body8:
    "xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] lg:text-[9px]",
  body9:
    "xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[8px]",
  body10:
    "font-semibold xl:text-[100px] 2xl:text-[112px] 3xl:text-[135px] text-[150px] lg:text-[80px]",
  body11:
    "2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]",
  body12:
    "font-semibold 3xl:text-[108px] text-[120px] lg:text-[64px] xl:text-[80px] 2xl:text-[90px]",
  body13:
    "font-semibold 3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
  body14:
    "font-semibold text-[110px] lg:text-[58px] xl:text-[73px] 2xl:text-[82px] 3xl:text-[99px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
