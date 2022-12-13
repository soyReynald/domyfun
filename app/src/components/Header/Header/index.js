import React from "react";

import { Row, Img, Text, Stack, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="items-start w-[100%]">
          <Row className="items-start mt-[4px] w-[13%]">
            <Img
              src="images/img_campingtent1_1.svg"
              className="campingtentOne_One"
              alt="campingtentOne"
            />
            <Text className="Logo2" as="h4" variant="h4">
              Vedhak
            </Text>
          </Row>
          <Row className="items-start justify-center lg:ml-[112px] xl:ml-[140px] 2xl:ml-[158px] 3xl:ml-[190px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[47%]">
            <Stack className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[92%]">
              <Text className="font-prompt language8" variant="body6">
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  Home Accommodation
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  {" "}
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  Gallery
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  {" "}
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  Blog
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  {" "}
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  Pages
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  {" "}
                </span>
                <span className="text-white_A700 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  Contact
                </span>
              </Text>
              <Row className="absolute h-[max-content] inset-y-[0] items-center left-[9%] my-[auto] w-[75%]">
                <Img
                  src="images/img_icon_white_A700.svg"
                  className="Icon"
                  alt="Icon"
                />
                <Img
                  src="images/img_icon_white_A700.svg"
                  className="Icon_One"
                  alt="Icon One"
                />
                <Img
                  src="images/img_icon_white_A700.svg"
                  className="Icon_Two"
                  alt="Icon Two"
                />
                <Img
                  src="images/img_icon_white_A700.svg"
                  className="Icon_Three"
                  alt="Icon Three"
                />
                <Img
                  src="images/img_icon_white_A700.svg"
                  className="Icon_Four"
                  alt="Icon Four"
                />
              </Row>
            </Stack>
            <Img
              src="images/img_search_white_A700.svg"
              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] mt-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
              alt="search"
            />
          </Row>
          <Button
            className="2xl:ml-[124px] 3xl:ml-[149px] flex items-center justify-center lg:ml-[88px] text-center w-[10%] xl:ml-[110px]"
            rightIcon={
              <Img
                src="images/img_forward.svg"
                className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[2px] xl:w-[13px] xl:h-[14px] xl:ml-[3px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[3px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[4px]"
                alt="forward"
              />
            }
            shape="RoundedBorder5"
            size="xl"
            variant="FillLightgreen700"
          >
            <div className="bg-transparent font-prompt font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
              book now
            </div>
          </Button>
          <Row className="items-center justify-evenly lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[5%]">
            <Text
              className="font-medium font-prompt text-white_A700 w-[auto]"
              variant="body6"
            >
              English
            </Text>
            <Img
              src="images/img_arrowdown_1.svg"
              className="arrowdown"
              alt="arrowdown"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
