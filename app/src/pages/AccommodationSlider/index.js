import React from "react";

import {
  Column,
  Stack,
  Text,
  Img,
  Row,
  Slider,
  Input,
  SelectBox,
  Button,
  Line,
  PagerIndicator,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer1 from "components/Footer/Footer1";

const AccommodationSliderPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Stack className="lg:h-[390px] xl:h-[488px] 2xl:h-[549px] 3xl:h-[659px] w-[100%]">
          <Column className="absolute items-center justify-start top-[0] w-[100%]">
            <Header className="w-[85%]" />
            <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[108px] 2xl:p-[122px] 3xl:p-[146px] lg:p-[86px] w-[100%]">
              <Column className="items-center justify-start lg:mb-[52px] xl:mb-[65px] 2xl:mb-[73px] 3xl:mb-[88px] w-[42%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Accommodation
                  </Text>
                  <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[58%]">
                    <Img
                      src="images/img_arrowright_white_A700_16X10.svg"
                      className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] inset-y-[0] left-[24%] my-[auto] w-[3%]"
                      alt="arrowright"
                    />
                    <Text className="language8" variant="body4">
                      Home Accommodation Slider
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
          <Stack className="absolute bg-gray_50 bottom-[0] xl:h-[116px] 2xl:h-[130px] 3xl:h-[156px] lg:h-[93px] inset-x-[0] mx-[auto] lg:px-[19px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[33px] w-[87%]">
            <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[91%]">
              <Stack className="lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[85%]">
                <Slider
                  slidesToShow={4}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="absolute w-[100%]"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Column className="justify-start">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body8"
                        >
                          Check In
                        </Text>
                        <Input
                          className="placeholder:text-gray_800 GroupNine"
                          wrapClassName="2xl:mt-[12px] 3xl:mt-[15px] flex lg:mt-[9px] w-[100%] xl:mt-[11px]"
                          name="Group106"
                          placeholder="Select Date"
                          suffix={
                            <Img
                              src="images/img_calendar.svg"
                              className="mr-[4px] lg:w-[9px] lg:h-[10px] lg:ml-[18px] xl:w-[12px] xl:h-[13px] xl:ml-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[31px] my-[auto]"
                              alt="calendar"
                            />
                          }
                          shape="RoundedBorder5"
                          size="sm"
                        ></Input>
                      </Column>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Img
                  src="images/img_arrowdown_6X10.svg"
                  className="arrowdown_Two"
                  onClick={() => sliderRef.current?.slidePrev()}
                  alt="arrowdown Two"
                />
              </Stack>
              <Img
                src="images/img_arrowright_20X20.svg"
                className="arrowright2"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright One"
              />
            </Row>
            <Button
              className="absolute bottom-[1%] font-semibold right-[1%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center uppercase w-[14%]"
              shape="RoundedBorder5"
              size="2xl"
              variant="OutlineGray900"
            >
              check availability
            </Button>
          </Stack>
        </Stack>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[93%]">
          <Row className="items-end justify-between w-[100%]">
            <Column
              className="bg-cover bg-repeat items-center justify-start w-[49%]"
              style={{ backgroundImage: "url('images/img_group20.svg')" }}
            >
              <Column className="bg-gray_900_33 justify-end lg:p-[32px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] w-[100%]">
                <Row className="bg-white_A700 items-center mr-[auto] lg:mt-[246px] xl:mt-[308px] 2xl:mt-[347px] 3xl:mt-[416px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius12 w-[76%]">
                  <Column className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[51%]">
                    <Row className="items-center w-[100%]">
                      <Line className="bg-light_green_700 h-[3px] w-[19%]" />
                      <Text className="rowrectanglefortytwo" variant="body1">
                        Tent Camper
                      </Text>
                    </Row>
                    <Row className="items-center justify-end ml-[auto] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[63%]">
                      <Text className="Link2" variant="body11">
                        check availavility
                      </Text>
                      <Img
                        src="images/img_arrowright_2.svg"
                        className="arrowright_Three"
                        alt="arrowright Two"
                      />
                    </Row>
                  </Column>
                  <Button
                    className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] items-center justify-center 2xl:ml-[103px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] mt-[1px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                    size="2xlIcn"
                    variant="icbFillYellow900"
                  >
                    <Img
                      src="images/img_icon_85X85.svg"
                      className="flex items-center justify-center lg:h-[8px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                      alt="Icon Five"
                    />
                  </Button>
                </Row>
              </Column>
            </Column>
            <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[49%]">
              <Row className="items-center lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[31%]">
                <Img src="images/img_prev.svg" className="cut_One" alt="Prev" />
                <PagerIndicator
                  className="h-[7px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[max-content]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-yellow_900"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-bluegray_100"
                  selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                  unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                />
                <Img src="images/img_next.svg" className="Next" alt="Next" />
              </Row>
              <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Img
                  src="images/img_group20.svg"
                  className="Two_One"
                  alt="Two"
                />
                <Img
                  src="images/img_image_1.png"
                  className="Two_One"
                  alt="Image One"
                />
              </Row>
            </Column>
          </Row>
        </Column>
        <Footer1 className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
      </Column>
    </>
  );
};

export default AccommodationSliderPage;
