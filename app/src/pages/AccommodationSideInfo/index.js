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
import Footer from "components/Footer/Footer";

const AccommodationSideInfoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Stack className="lg:h-[390px] xl:h-[488px] 2xl:h-[549px] 3xl:h-[659px] w-[100%]">
          <Column className="absolute items-center justify-start top-[0] w-[100%]">
            <Header className="w-[85%]" />
            <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[108px] 2xl:p-[122px] 3xl:p-[146px] lg:p-[86px] w-[100%]">
              <Column className="items-center justify-start lg:mb-[52px] xl:mb-[66px] 2xl:mb-[74px] 3xl:mb-[89px] w-[42%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Accommodation
                  </Text>
                  <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[64%]">
                    <Img
                      src="images/img_arrowright_white_A700_16X10.svg"
                      className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] inset-y-[0] left-[22%] my-[auto] w-[2%]"
                      alt="arrowright"
                    />
                    <Text className="language8" variant="body4">
                      Home Accommodation Side Info
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
                          name="GroupSeventyThree"
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
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={6}
            activeIndex={sliderState1}
            onSlideChanged={(e) => {
              setsliderState1(e?.item);
            }}
            ref={sliderRef1}
            className="w-[100%]"
            items={[...Array(36)].map(() => (
              <React.Fragment key={Math.random()}>
                <Stack className="lg:h-[224px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] lg:mx-[13px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[22px]">
                  <div className="absolute bg-gray_800 lg:h-[224px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] left-[0] w-[53%]"></div>
                  <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] right-[0] shadow-bs2 w-[50%]">
                    <Column className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] w-[91%]">
                      <Row className="items-center w-[53%]">
                        <Line className="bg-gray_900 h-[1px] w-[20%]" />
                        <Text className="Title1" variant="body1">
                          Classic Tent
                        </Text>
                      </Row>
                      <Text
                        className="font-light leading-[175.00%] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] text-gray_800 w-[100%]"
                        variant="body9"
                      >
                        We denounce with righteous indignation and dislike mens
                        beguiled and demoralize the charms pleasure moment soy
                        <br />
                        cannot foresee the pain and trouble that are bound ensue
                        <br />
                        and equal blame belongs duty weakness
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]" />
                      <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]">
                        <Img
                          src="images/img_laptop_11.svg"
                          className="laptop"
                          alt="laptop"
                        />
                        <Img
                          src="images/img_cat1.svg"
                          className="laptop"
                          alt="catOne"
                        />
                        <Img
                          src="images/img_airplane.svg"
                          className="laptop"
                          alt="airplane"
                        />
                        <Img
                          src="images/img_fire.svg"
                          className="laptop"
                          alt="fire"
                        />
                        <Button
                          className="flex items-center justify-center text-center w-[51%]"
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
                          <div className="bg-transparent font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
                            check availability
                          </div>
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </React.Fragment>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-yellow_900" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-bluegray_100"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <Row className="items-center justify-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[21%]">
            <Img src="images/img_prev.svg" className="cut_One" alt="Prev" />
            <PagerIndicator
              className="h-[7px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[max-content]"
              count={6}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-yellow_900"
              activeIndex={sliderState1}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-bluegray_100"
              sliderRef={sliderRef1}
              selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
              unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
            />
            <Img src="images/img_next.svg" className="Next" alt="Next" />
          </Row>
        </Column>
        <Footer className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
      </Column>
    </>
  );
};

export default AccommodationSideInfoPage;
