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
  Grid,
  Line,
  PagerIndicator,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer from "components/Footer/Footer";

const AccommodationStandardPage = () => {
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
                  <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[64%]">
                    <Img
                      src="images/img_arrowright_white_A700_16X10.svg"
                      className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] inset-y-[0] left-[22%] my-[auto] w-[2%]"
                      alt="arrowright"
                    />
                    <Text className="language8" variant="body4">
                      Home Accommodation Standard
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
                          name="GroupFifty"
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
          <Column className="items-center justify-start w-[100%]">
            <Grid className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 w-[100%]">
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[89%]">
                    <Row className="items-center w-[63%]">
                      <Line className="bg-gray_900 h-[1px] w-[24%]" />
                      <Text className="Title1" variant="body4">
                        Classic Tent
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix4" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_2.svg"
                        className="laptop"
                        alt="laptop"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillLightgreen700"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
                    <Row className="items-center w-[77%]">
                      <Line className="bg-gray_900 h-[1px] w-[20%]" />
                      <Text className="Title1" variant="body4">
                        Forest Camping
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix_four" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_3.svg"
                        className="laptop"
                        alt="laptop One"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne One"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane One"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire One"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillYellow900"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Three"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[89%]">
                    <Row className="items-center w-[64%]">
                      <Line className="bg-gray_900 h-[1px] w-[24%]" />
                      <Text className="Title1" variant="body4">
                        Small Trailer
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix4" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_4.svg"
                        className="laptop"
                        alt="laptop Two"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Two"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Two"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Two"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillLightgreen700"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] w-[89%]">
                    <Row className="items-center w-[79%]">
                      <Line className="bg-gray_900 h-[1px] w-[19%]" />
                      <Text className="Title1" variant="body4">
                        Tree House Tent
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix4" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_5.svg"
                        className="laptop"
                        alt="laptop Three"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Three"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Three"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Three"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillLightgreen700"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Five"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
                    <Row className="items-center w-[70%]">
                      <Line className="bg-gray_900 h-[1px] w-[22%]" />
                      <Text className="Title1" variant="body4">
                        Tent Camping
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix_four" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_6.svg"
                        className="laptop"
                        alt="laptop Four"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Four"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Four"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Four"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillYellow900"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Six"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[89%]">
                    <Row className="items-center w-[65%]">
                      <Line className="bg-gray_900 h-[1px] w-[23%]" />
                      <Text className="Title1" variant="body4">
                        Couple Tent
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix_five" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_7.svg"
                        className="laptop"
                        alt="laptop Five"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Five"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Five"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Five"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillLightgreen700"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Seven"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
                    <Row className="items-center w-[49%]">
                      <Line className="bg-gray_900 h-[1px] w-[31%]" />
                      <Text className="Title1" variant="body4">
                        Camper
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix_four" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_8.svg"
                        className="laptop"
                        alt="laptop Six"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Six"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Six"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Six"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillLightgreen700"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Eight"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[89%]">
                    <Row className="items-center w-[66%]">
                      <Line className="bg-gray_900 h-[1px] w-[23%]" />
                      <Text className="Title1" variant="body4">
                        Family Cabin
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix_five" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_9.svg"
                        className="laptop"
                        alt="laptop Seven"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Seven"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Seven"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Seven"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillYellow900"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Nine"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="listrectanglesix_four">
                <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group100.svg')" }}
                >
                  <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[89%]">
                    <Row className="items-center w-[58%]">
                      <Line className="bg-gray_900 h-[1px] w-[26%]" />
                      <Text className="Title1" variant="body4">
                        Safari Tent
                      </Text>
                    </Row>
                    <Text className="columnrectanglesix4" variant="body9">
                      Sit amet consectetur adipisc fermentumat
                      <br />
                      tellusaliquam arcu uturnacon sequat
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_laptop_10.svg"
                        className="laptop"
                        alt="laptop Eight"
                      />
                      <Img
                        src="images/img_cat1.svg"
                        className="catOne"
                        alt="catOne Eight"
                      />
                      <Img
                        src="images/img_airplane.svg"
                        className="catOne"
                        alt="airplane Eight"
                      />
                      <Img
                        src="images/img_fire.svg"
                        className="catOne"
                        alt="fire Eight"
                      />
                      <Button
                        className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                        variant="icbFillLightgreen700"
                      >
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Ten"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Grid>
            <Row className="items-center justify-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[21%]">
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
          </Column>
        </Column>
        <Footer className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
      </Column>
    </>
  );
};

export default AccommodationStandardPage;
