import React from "react";

import { Column, Text, Row, Input, Button, Img } from "components";

const ElementsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt justify-start mx-[auto] xl:p-[105px] 2xl:p-[118px] 3xl:p-[142px] lg:p-[84px] w-[100%]">
        <Column className="justify-start lg:mb-[240px] xl:mb-[301px] 2xl:mb-[339px] 3xl:mb-[406px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] w-[80%]">
          <Text className="font-medium text-gray_900 w-[auto]" variant="body8">
            Colors
          </Text>
          <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[27%]">
            <Input
              className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]"
              wrapClassName="2xl:h-[32px] 2xl:w-[31px] 3xl:h-[38px] 3xl:w-[37px] flex lg:h-[23px] lg:w-[22px] xl:h-[28px] xl:w-[27px]"
              name="RectangleOne"
              placeholder=""
              variant="FillYellow900"
            ></Input>
            <div className="bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
            <div className="bg-light_green_700 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
            <div className="bg-deep_orange_A200 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
            <div className="bg-gray_50 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
            <div className="bg-gray_800 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
            <div className="bg-white_A700 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
          </Row>
          <Text
            className="font-medium lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] text-gray_900 w-[auto]"
            variant="body8"
          >
            Font Color
          </Text>
          <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[7%]">
            <div className="bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
            <div className="bg-gray_800 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[22px] xl:w-[27px] 2xl:w-[31px] 3xl:w-[37px]"></div>
          </Row>
          <Text
            className="font-medium lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[auto]"
            variant="body8"
          >
            Typhography
          </Text>
          <Text className="language" variant="body12">
            Heading H1 semibold
          </Text>
          <Text
            className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_900 w-[auto]"
            as="h3"
            variant="h3"
          >
            Heading H2 semibold 45px
          </Text>
          <Text
            className="font-medium lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] text-gray_900 w-[auto]"
            variant="body1"
          >
            <span className="text-gray_900 font-prompt lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]">
              Heading H3{" "}
            </span>
            <span className="text-gray_900 font-prompt font-normal not-italic lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]">
              medium
            </span>
            <span className="text-gray_900 font-prompt lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]">
              {" "}
              30px
            </span>
          </Text>
          <Text
            className="font-medium lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] text-gray_900 w-[auto]"
            variant="body2"
          >
            Heading H4 medium 27px
          </Text>
          <Text
            className="font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] text-gray_900 w-[auto]"
            variant="body4"
          >
            Heading H5 semibold 24px
          </Text>
          <Text
            className="font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-gray_900 w-[auto]"
            variant="body5"
          >
            <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
              Heading H6{" "}
            </span>
            <span className="text-gray_900 font-prompt font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
              medium
            </span>
            <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
              {" "}
              22px
            </span>
          </Text>
          <Text
            className="font-medium lg:mt-[41px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] text-gray_900 w-[auto]"
            variant="body8"
          >
            Paragraph
          </Text>
          <Text
            className="font-light leading-[175.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_800 w-[43%]"
            variant="body9"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            tempus non eget <br />
            nibh arcu pharetra, aliquet ornare ultrices. Duis vestibulum orci
            nisi euismod facilisis tortor mollis eu. Quam vel orci varius leo
            mauris amet ut. Cras ligula
          </Text>
          <Text
            className="font-medium lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] text-gray_900 w-[auto]"
            variant="body8"
          >
            Button
          </Text>
          <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] w-[48%]">
            <Button
              className="flex items-center justify-center text-center w-[27%]"
              rightIcon={
                <Img
                  src="images/img_forward.svg"
                  className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[2px] xl:w-[11px] xl:h-[12px] xl:ml-[2px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[3px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[3px]"
                  alt="forward"
                />
              }
              shape="RoundedBorder5"
              size="xl"
              variant="FillLightgreen700"
            >
              <div className="bg-transparent font-semibold 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] uppercase">
                Discover more
              </div>
            </Button>
            <Button
              className="2xl:ml-[11px] 3xl:ml-[14px] flex items-center justify-center lg:ml-[8px] text-center w-[24%] xl:ml-[10px]"
              rightIcon={
                <Img
                  src="images/img_forward_20X20.svg"
                  className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[2px] xl:w-[11px] xl:h-[12px] xl:ml-[2px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[3px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[3px]"
                  alt="forward"
                />
              }
              shape="RoundedBorder5"
              size="xl"
              variant="FillGray900"
            >
              <div className="bg-transparent font-semibold 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] uppercase">
                learn more
              </div>
            </Button>
            <Button
              className="2xl:ml-[7px] 3xl:ml-[8px] flex items-center justify-center lg:ml-[5px] text-center w-[24%] xl:ml-[6px]"
              rightIcon={
                <Img
                  src="images/img_arrowright.svg"
                  className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[2px] xl:w-[11px] xl:h-[12px] xl:ml-[2px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[3px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[3px]"
                  alt="arrow_right"
                />
              }
              shape="RoundedBorder5"
              size="xl"
              variant="OutlineBluegray90019"
            >
              <div className="bg-transparent font-semibold 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] uppercase">
                learn more
              </div>
            </Button>
            <Row className="items-center justify-evenly lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[18%]">
              <Text className="Link" variant="body11">
                How it works
              </Text>
              <Img
                src="images/img_arrowright_20X20.svg"
                className="xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                alt="arrowright"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ElementsPage;
