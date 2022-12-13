import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Button,
  Img,
  Slider,
  Input,
  SelectBox,
  Line,
  Grid,
  PagerIndicator,
  CheckBox,
  SeekBar,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";

const HomeTwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] w-[100%]">
        <Stack className="lg:h-[528px] xl:h-[661px] 2xl:h-[744px] 3xl:h-[892px] w-[100%]">
          <Column className="absolute bg-gradient2  items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] top-[0] w-[100%]">
            <Column className="items-center justify-start lg:mb-[174px] xl:mb-[218px] 2xl:mb-[246px] 3xl:mb-[295px] w-[92%]">
              <Header className="w-[95%]" />
              <Stack className="lg:h-[153px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] lg:mt-[118px] xl:mt-[148px] 2xl:mt-[166px] 3xl:mt-[199px] w-[100%]">
                <Column className="absolute inset-x-[23%] items-center justify-start w-[55%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Stack className="lg:h-[111px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] w-[100%]">
                      <Text
                        className="absolute font-medium inset-x-[0] mx-[auto] text-white_A700 top-[0] w-[max-content]"
                        variant="body1"
                      >
                        Travel Camping and
                      </Text>
                      <Text
                        className="absolute bottom-[0] text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        Adventure
                      </Text>
                    </Stack>
                    <Row className="items-center justify-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[38%]">
                      <Button
                        className="flex items-center justify-center text-center w-[56%]"
                        rightIcon={
                          <Img
                            src="images/img_forward.svg"
                            className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[2px] xl:w-[13px] xl:h-[14px] xl:ml-[3px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[3px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[4px]"
                            alt="forward"
                          />
                        }
                        shape="RoundedBorder5"
                        size="xl"
                        variant="FillYellow900"
                      >
                        <div className="bg-transparent font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
                          Discover more
                        </div>
                      </Button>
                      <Row className="items-center justify-evenly lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[37%]">
                        <Text className="Link1" variant="body11">
                          How it works
                        </Text>
                        <Img
                          src="images/img_forward_20X20.svg"
                          className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                          alt="forward"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Column>
                <Img
                  src="images/img_navigation_white_A700.svg"
                  className="absolute lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] inset-y-[33%] w-[100%]"
                  alt="Navigation"
                />
              </Stack>
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
                          name="GroupNine"
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
                alt="arrowright"
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
          <Row className="items-center justify-between w-[100%]">
            <Column className="w-[37%]">
              <Column className="justify-start w-[93%]">
                <Row className="items-center w-[55%]">
                  <Text className="Seven" variant="body6">
                    01
                  </Text>
                  <Line className="bg-gray_800 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[35%]" />
                  <Text className="Testimonils" variant="body6">
                    About Us
                  </Text>
                </Row>
                <Text className="Title4" as="h3" variant="h3">
                  <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    We’re Most Trusted <br />
                    Travel{" "}
                  </span>
                  <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Partner Aroud
                    <br />
                    The World
                  </span>
                </Text>
              </Column>
              <Text
                className="font-light leading-[175.00%] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-gray_800 w-[99%]"
                variant="body9"
              >
                Sit amet consectetur adipiscing elit. At donec et fusce orci
                tellus aliquam vitae. Metus nibh laoreet velit, diam enim. Justo
                <br />
                sagittis fringilla ulputatey honcus justo, cras sed
              </Text>
              <Line className="bg-gray_900_19 h-[1px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]" />
              <Row className="items-start ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[88%]">
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                  alt="signal"
                />
                <Text
                  className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] text-light_green_700 w-[auto]"
                  variant="body10"
                >
                  25
                </Text>
                <Column className="justify-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[26%]">
                  <Img
                    src="images/img_plus.svg"
                    className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"
                    alt="plus"
                  />
                  <Text
                    className="font-semibold leading-[140.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-gray_900 w-[100%]"
                    variant="body6"
                  >
                    Years Of <br />
                    Experience
                  </Text>
                </Column>
              </Row>
            </Column>
            <Img
              src="images/img_image_gray_800.svg"
              className="lg:h-[286px] xl:h-[357px] 2xl:h-[402px] 3xl:h-[482px] mb-[3px] w-[57%]"
              alt="Image"
            />
          </Row>
        </Column>
        <Column className="items-center justify-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[67%]">
          <Column className="items-center justify-end w-[100%]">
            <Column className="items-center justify-start w-[53%]">
              <Row className="items-start justify-center w-[47%]">
                <Text className="One_One" variant="body6">
                  02
                </Text>
                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[26%]" />
                <Text className="EnjoyAdventure" variant="body6">
                  Enjoy Adventure
                </Text>
              </Row>
              <Text className="Title" as="h3" variant="h3">
                <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  Have A Fun With Our Amazing
                  <br />
                </span>
                <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  Camping Ground
                </span>
              </Text>
            </Column>
            <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Column className="w-[32%]">
                <div className="bg-gray_800 lg:h-[147px] xl:h-[184px] 2xl:h-[207px] 3xl:h-[248px] rounded-radius501 w-[100%]"></div>
                <Column className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[74%]">
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[46%]"
                    alt="Star"
                  />
                  <Text className="columnstar" variant="body2">
                    Tent Camping Services
                  </Text>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Column className="bg-gray_900_99 items-center justify-start lg:p-[56px] xl:p-[70px] 2xl:p-[78px] 3xl:p-[94px] rounded-radius501 w-[100%]">
                  <Button
                    className="flex items-center justify-center rounded-radius50 cut_One"
                    size="lgIcn"
                    variant="icbFillLightgreen700"
                  >
                    <Img
                      src="images/img_icon.svg"
                      className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                      alt="Icon Five"
                    />
                  </Button>
                </Column>
                <Column className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[80%]">
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[42%]"
                    alt="Star One"
                  />
                  <Text className="columnstar" variant="body2">
                    Family Camping Services
                  </Text>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <div className="bg-gray_800 lg:h-[147px] xl:h-[184px] 2xl:h-[207px] 3xl:h-[248px] rounded-radius501 w-[100%]"></div>
                <Column className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[75%]">
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[45%]"
                    alt="Star Two"
                  />
                  <Text className="columnstar" variant="body2">
                    Wild Camping Services
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Stack className="lg:h-[309px] xl:h-[386px] 2xl:h-[434px] 3xl:h-[521px] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[100%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <div className="bg-gray_900_8c lg:h-[309px] xl:h-[386px] 2xl:h-[434px] 3xl:h-[521px] w-[100%]"></div>
          </Column>
          <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[67%]">
            <Column className="w-[45%]">
              <Text
                className="font-semibold text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                Ready to Get Started your Travel Camping Us
              </Text>
              <Button
                className="2xl:mt-[30px] 3xl:mt-[36px] flex items-center justify-center lg:mt-[21px] text-center w-[39%] xl:mt-[26px]"
                rightIcon={
                  <Img
                    src="images/img_forward_20X20.svg"
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
            </Column>
            <Stack className="bg-white_A700 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:px-[27px] xl:px-[34px] 2xl:px-[38px] 3xl:px-[45px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]">
              <Img
                src="images/img_icon_yellow_900.svg"
                className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[12%]"
                alt="Icon Six"
              />
            </Stack>
          </Row>
        </Stack>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] pl-[1px] pt-[1px] w-[67%]">
          <Grid className="lg:gap-[48px] xl:gap-[60px] 2xl:gap-[67px] 3xl:gap-[81px] grid grid-cols-3 w-[100%]">
            <Column className="items-center justify-start pb-[1px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center w-[79%]">
                  <Img
                    src="images/img_group.svg"
                    className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] w-[21%]"
                    alt="Group"
                  />
                  <Text className="rowgroup" variant="body4">
                    Private Cottages
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                  <Line className="absolute bg-light_green_700 h-[4px] left-[0] w-[27%]" />
                </Stack>
                <Text className="columngroup" variant="body9">
                  Sit amet consectetur adipiscing elitcelerisque
                  <br />
                  aenectus bibendum facilisi tempus
                </Text>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[29%]">
                  <Text className="Link" variant="body11">
                    read more
                  </Text>
                  <Img
                    src="images/img_arrowright_20X20.svg"
                    className="arrowright_Three"
                    alt="arrowright One"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start pb-[1px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center ml-[1px] w-[69%]">
                  <Img
                    src="images/img_airplane_58X58.svg"
                    className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] lg:w-[30px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[52px]"
                    alt="airplane"
                  />
                  <Text className="rowgroup" variant="body4">
                    Tents on Rent
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                  <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                  <Line className="absolute bg-light_green_700 h-[4px] left-[0] w-[27%]" />
                </Stack>
                <Text className="columngroup" variant="body9">
                  Sit amet consectetur adipiscing elitcelerisque
                  <br />
                  aenectus bibendum facilisi tempus
                </Text>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[29%]">
                  <Text className="Link" variant="body11">
                    read more
                  </Text>
                  <Img
                    src="images/img_arrowright_20X20.svg"
                    className="arrowright_Three"
                    alt="arrowright Two"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start pb-[1px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center w-[72%]">
                  <Img
                    src="images/img_location_59X60.svg"
                    className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] w-[23%]"
                    alt="location"
                  />
                  <Text
                    className="font-medium lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Summer Camp
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                  <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                  <Line className="absolute bg-light_green_700 h-[4px] left-[0] w-[27%]" />
                </Stack>
                <Text className="columngroup" variant="body9">
                  Sit amet consectetur adipiscing elitcelerisque
                  <br />
                  aenectus bibendum facilisi tempus
                </Text>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[29%]">
                  <Text className="Link" variant="body11">
                    read more
                  </Text>
                  <Img
                    src="images/img_arrowright_20X20.svg"
                    className="arrowright_Three"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start pb-[1px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center w-[57%]">
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Wood Fire
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                  <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                  <Line className="absolute bg-light_green_700 h-[4px] left-[0] w-[27%]" />
                </Stack>
                <Text className="ml-[1px] columngroup" variant="body9">
                  Sit amet consectetur adipiscing elitcelerisque
                  <br />
                  aenectus bibendum facilisi tempus
                </Text>
                <Row className="items-center ml-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[29%]">
                  <Text className="Link" variant="body11">
                    read more
                  </Text>
                  <Img
                    src="images/img_arrowright_20X20.svg"
                    className="arrowright_Three"
                    alt="arrowright Four"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start pb-[1px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center w-[84%]">
                  <Img
                    src="images/img_settings.svg"
                    className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    alt="settings"
                  />
                  <Text className="rowgroup" variant="body4">
                    Electrical Cabinets
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                  <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                  <Line className="absolute bg-light_green_700 h-[4px] left-[0] w-[27%]" />
                </Stack>
                <Text className="columngroup" variant="body9">
                  Sit amet consectetur adipiscing elitcelerisque
                  <br />
                  aenectus bibendum facilisi tempus
                </Text>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[29%]">
                  <Text className="Link" variant="body11">
                    read more
                  </Text>
                  <Img
                    src="images/img_arrowright_20X20.svg"
                    className="arrowright_Three"
                    alt="arrowright Five"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start pb-[1px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center ml-[1px] w-[83%]">
                  <Img
                    src="images/img_globe.svg"
                    className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[17%]"
                    alt="globe"
                  />
                  <Text
                    className="font-medium lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Washing Machines
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                  <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                  <Line className="absolute bg-light_green_700 h-[4px] left-[0] w-[27%]" />
                </Stack>
                <Text className="columngroup" variant="body9">
                  Sit amet consectetur adipiscing elitcelerisque
                  <br />
                  aenectus bibendum facilisi tempus
                </Text>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[29%]">
                  <Text className="Link" variant="body11">
                    read more
                  </Text>
                  <Img
                    src="images/img_arrowright_20X20.svg"
                    className="arrowright_Three"
                    alt="arrowright Six"
                  />
                </Row>
              </Column>
            </Column>
          </Grid>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[93%]">
          <Row className="items-end justify-between w-[100%]">
            <Column
              className="bg-cover bg-repeat items-center justify-start w-[49%]"
              style={{ backgroundImage: "url('images/img_group20.svg')" }}
            >
              <Column className="bg-gray_900_33 justify-end lg:p-[32px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] w-[100%]">
                <Row className="bg-white_A700 items-center mr-[auto] lg:mt-[246px] xl:mt-[308px] 2xl:mt-[347px] 3xl:mt-[416px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius12 w-[76%]">
                  <Column className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[54%]">
                    <Row className="items-center w-[100%]">
                      <Line className="bg-light_green_700 h-[3px] w-[18%]" />
                      <Text className="rowrectanglefortytwo" variant="body1">
                        Tent Camping
                      </Text>
                    </Row>
                    <Row className="items-center justify-end ml-[auto] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[60%]">
                      <Text className="Link2" variant="body11">
                        check availavility
                      </Text>
                      <Img
                        src="images/img_arrowright_2.svg"
                        className="arrowright_Three"
                        alt="arrowright Seven"
                      />
                    </Row>
                  </Column>
                  <Button
                    className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] items-center justify-center 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] mt-[1px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                    size="2xlIcn"
                    variant="icbFillYellow900"
                  >
                    <Img
                      src="images/img_icon_85X85.svg"
                      className="flex items-center justify-center lg:h-[8px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                      alt="Icon Seven"
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
                  alt="Two One"
                />
                <Img
                  src="images/img_image_560X422.png"
                  className="Two_One"
                  alt="Image Eight"
                />
              </Row>
            </Column>
          </Row>
        </Column>
        <Stack className="lg:h-[4253px] xl:h-[5321px] 2xl:h-[5985px] 3xl:h-[7181px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Stack className="absolute lg:h-[3395px] xl:h-[4246px] 2xl:h-[4777px] 3xl:h-[5731px] top-[0] w-[100%]">
            <Stack className="absolute bottom-[0] lg:h-[3211px] xl:h-[4016px] 2xl:h-[4518px] 3xl:h-[5421px] w-[100%]">
              <Img
                src="images/img_group_3642X976.png"
                className="absolute lg:h-[1943px] xl:h-[2430px] 2xl:h-[2734px] 3xl:h-[3280px] right-[0] top-[0] w-[51%]"
                alt="Group One"
              />
              <Stack className="absolute lg:h-[3204px] xl:h-[4008px] 2xl:h-[4509px] 3xl:h-[5410px] top-[0] w-[100%]">
                <Img
                  src="images/img_group_3630X1920.png"
                  className="absolute lg:h-[1936px] xl:h-[2422px] 2xl:h-[2725px] 3xl:h-[3269px] top-[0] w-[100%]"
                  alt="Group Two"
                />
                <Column className="absolute justify-start left-[4%] top-[0] w-[80%]">
                  <Row className="items-start justify-end ml-[auto] w-[83%]">
                    <Column className="lg:h-[106px] xl:h-[133px] 2xl:h-[149px] 3xl:h-[179px] justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:w-[105px] xl:w-[132px] 2xl:w-[148px] 3xl:w-[178px]">
                      <CheckBox
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                        inputClassName="h-[25px] mr-[5px] w-[25px]"
                        name="WildCamping"
                        label="Wild Camping"
                        shape="RoundedBorder12"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                        inputClassName="h-[25px] mr-[5px] w-[25px]"
                        name="FamilyCamping One"
                        label="Family Camping"
                        shape="RoundedBorder12"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                        inputClassName="h-[25px] mr-[5px] w-[25px]"
                        name="TentCamping One"
                        label="Tent Camping"
                        shape="RoundedBorder12"
                      ></CheckBox>
                      <Button
                        className="2xl:mt-[30px] 3xl:mt-[36px] flex items-center justify-center lg:mt-[21px] text-center w-[100%] xl:mt-[26px]"
                        rightIcon={
                          <Img
                            src="images/img_forward.svg"
                            className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[2px] xl:w-[13px] xl:h-[14px] xl:ml-[3px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[3px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[4px]"
                            alt="forward"
                          />
                        }
                        shape="RoundedBorder5"
                        size="xl"
                        variant="FillYellow900"
                      >
                        <div className="bg-transparent font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
                          learn more us
                        </div>
                      </Button>
                    </Column>
                    <Column className="bg-gray_50 justify-end lg:ml-[415px] xl:ml-[519px] 2xl:ml-[584px] 3xl:ml-[701px] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] w-[23%]">
                      <Img
                        src="images/img_tent21.svg"
                        className="mt-[4px] Next"
                        alt="tentTwentyOne"
                      />
                      <Text
                        className="lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] language"
                        as="h2"
                        variant="h2"
                      >
                        985+
                      </Text>
                      <Text
                        className="lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] HappyTraveler"
                        variant="body8"
                      >
                        Family Camping
                      </Text>
                    </Column>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Img
                        src="images/img_image_645X875.png"
                        className="lg:h-[344px] xl:h-[431px] 2xl:h-[485px] 3xl:h-[581px] w-[57%]"
                        alt="Image Eleven"
                      />
                      <Column className="w-[38%]">
                        <Column className="justify-start w-[93%]">
                          <Row className="items-start w-[56%]">
                            <Text className="One_One" variant="body6">
                              04
                            </Text>
                            <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[28%]" />
                            <Text className="DiscoverMore_One" variant="body6">
                              Discover More
                            </Text>
                          </Row>
                          <Text className="Title4" as="h3" variant="h3">
                            <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              Better Travel to Change
                              <br />
                            </span>
                            <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              your Better Emotions
                            </span>
                          </Text>
                        </Column>
                        <Text className="columnfour" variant="body9">
                          Sit amet consectetur adipiscing elit. Venenatis amet
                          ut et, elementum. In sem nec ipsum, tincidunt risus
                          maecenas. Ut volutpat quis a mollis neque nunc aliquet
                          et. Condimentum habitant arcu malesuada odio luct
                          ultrices. A felis, ipsum sit tempor praesent eu vitae
                          tellus porttitor
                        </Text>
                        <Column className="bg-white_A700 items-center justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] shadow-bs2 w-[100%]">
                          <Column className="items-center justify-start mb-[4px] w-[91%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Text className="SaticfiedClien" variant="body6">
                                Saticfied Clients
                              </Text>
                              <Text className="EightyNine" variant="body6">
                                89%
                              </Text>
                            </Row>
                            <SeekBar
                              inputValue={[84.14]}
                              trackColors={["#63ac45", "#191c231f"]}
                              thumbClassName="bg-light_green_700 flex lg:w-[8px] lg:h-[8px] xl:w-[10px] xl:h-[11px] 2xl:w-[11px] 2xl:h-[12px] 3xl:w-[13px] 3xl:h-[14px] justify-center items-center rounded-radius50 outline-none"
                              className="flex xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                              trackClassName="flex lg:h-[3px] xl:h-[3px] 2xl:h-[4px] 3xl:h-[4px] w-[100%]"
                            />{" "}
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Stack>
            <Row className="absolute items-start justify-center right-[17%] top-[0] w-[33%]">
              <Column className="bg-white_A700 justify-end lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] shadow-bs2 w-[48%]">
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[4px] w-[34%]"
                  alt="cut"
                />
                <Text
                  className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  365k+
                </Text>
                <Text
                  className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] HappyTraveler"
                  variant="body8"
                >
                  Happy Traveler
                </Text>
              </Column>
              <Column className="bg-gray_50 justify-end lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[30px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] w-[48%]">
                <Img
                  src="images/img_cut_65X65.svg"
                  className="xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] mt-[3px] cut_One"
                  alt="cut One"
                />
                <Text
                  className="xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  2353+
                </Text>
                <Text
                  className="xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] HappyTraveler"
                  variant="body8"
                >
                  Tent Sites
                </Text>
              </Column>
            </Row>
            <Column className="absolute bg-gray_50 items-center justify-end lg:p-[30px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] right-[34%] top-[5%] w-[16%]">
              <Img
                src="images/img_location_65X65.svg"
                className="mt-[2px] cut_One"
                alt="location One"
              />
              <Text className="language" as="h2" variant="h2">
                458+
              </Text>
              <Text
                className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] Tag"
                variant="body8"
              >
                Global Branch
              </Text>
            </Column>
            <Column className="absolute justify-start left-[16%] top-[1%] w-[23%]">
              <Row className="items-start w-[70%]">
                <Text className="One_One" variant="body6">
                  03
                </Text>
                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[27%]" />
                <Text className="EnjoyAdventure" variant="body6">
                  Why Choose Us
                </Text>
              </Row>
              <Text className="Title3" as="h3" variant="h3">
                <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  We’re Most Trusted <br />
                  Travel{" "}
                </span>
                <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  Partner Aroud
                  <br />
                  The World
                </span>
              </Text>
            </Column>
            <Text
              className="absolute font-light leading-[175.00%] left-[16%] text-gray_800 top-[5%] w-[25%]"
              variant="body9"
            >
              Sit amet consectetur adipiscing elit. At donec et fusce orci
              tellus aliquam vitae. Metus nibh laoreet velit, diam enim. Justo
              <br />
              sagittis fringilla ulputatey honcus justo, cras sed
            </Text>
          </Stack>
          <footer className="absolute bottom-[0] w-[100%]">
            <Stack className="lg:h-[3505px] xl:h-[4385px] 2xl:h-[4932px] 3xl:h-[5918px] w-[100%]">
              <Stack className="absolute lg:h-[3505px] xl:h-[4385px] 2xl:h-[4932px] 3xl:h-[5918px] w-[100%]">
                <Column className="absolute bg-gray_900 items-center justify-start lg:p-[53px] xl:p-[66px] 2xl:p-[75px] 3xl:p-[90px] top-[0] w-[100%]">
                  <Column className="items-center justify-start lg:mb-[281px] xl:mb-[352px] 2xl:mb-[396px] 3xl:mb-[475px] w-[39%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-center w-[40%]">
                        <Text
                          className="font-normal mt-[1px] not-italic text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          05
                        </Text>
                        <Line className="bg-white_A700 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[32%]" />
                        <Text
                          className="font-normal mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] not-italic text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Testimonils
                        </Text>
                      </Row>
                      <Text
                        className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        What Our Client Say About Us
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Stack className="absolute bottom-[0] lg:h-[3204px] xl:h-[4008px] 2xl:h-[4509px] 3xl:h-[5410px] w-[100%]">
                  <Column
                    className="absolute bg-cover bg-repeat items-center justify-start lg:p-[168px] xl:p-[210px] 2xl:p-[236px] 3xl:p-[283px] top-[0] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group25.png')" }}
                  >
                    <Column className="items-center justify-start lg:mb-[264px] xl:mb-[330px] 2xl:mb-[372px] 3xl:mb-[446px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Column className="items-center justify-start w-[43%]">
                          <Row className="items-start justify-center w-[52%]">
                            <Text className="One_One" variant="body6">
                              06
                            </Text>
                            <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[30%]" />
                            <Text className="EnjoyAdventure" variant="body6">
                              News & Blog
                            </Text>
                          </Row>
                          <Text className="Title" as="h3" variant="h3">
                            <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              Read Every News & Blog
                              <br />
                            </span>
                            <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              Articles & Tips
                            </span>
                          </Text>
                        </Column>
                        <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                          <Column className="pb-[1px] w-[49%]">
                            <Stack className="lg:h-[238px] xl:h-[297px] 2xl:h-[334px] 3xl:h-[401px] w-[100%]">
                              <div className="absolute bg-gray_800 lg:h-[227px] xl:h-[284px] 2xl:h-[319px] 3xl:h-[383px] top-[0] w-[100%]"></div>
                              <Button
                                className="absolute bottom-[0] font-medium right-[4%] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[20%]"
                                size="md"
                                variant="FillLightgreen700"
                              >
                                Camping
                              </Button>
                            </Stack>
                            <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[53%]">
                              <Row className="items-start w-[50%]">
                                <Img
                                  src="images/img_calendar_12X12.svg"
                                  className="calendar_Two"
                                  alt="calendar Two"
                                />
                                <Text className="date" variant="body9">
                                  November 23,2022
                                </Text>
                              </Row>
                              <Row className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[41%]">
                                <Img
                                  src="images/img_computer_12X13.svg"
                                  className="computer_Two"
                                  alt="computer"
                                />
                                <Text className="date" variant="body9">
                                  Comments (05)
                                </Text>
                              </Row>
                            </Row>
                            <Text className="font-medium leading-[130.00%] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 underline w-[78%]">
                              Meet Touch Design Mobile Interfaces
                              <br />
                              Smashing Book Steven Hoober
                            </Text>
                            <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[17%]">
                              <Text
                                className="font-medium text-yellow_900 uppercase w-[auto]"
                                variant="body11"
                              >
                                raed more
                              </Text>
                              <Img
                                src="images/img_forward_2.svg"
                                className="arrowright_Three"
                                alt="forward Two"
                              />
                            </Row>
                          </Column>
                          <Column className="pb-[1px] w-[23%]">
                            <Stack className="lg:h-[238px] xl:h-[297px] 2xl:h-[334px] 3xl:h-[401px] w-[100%]">
                              <div className="absolute bg-gray_800 lg:h-[227px] xl:h-[284px] 2xl:h-[319px] 3xl:h-[383px] top-[0] w-[100%]"></div>
                              <Button
                                className="absolute bottom-[0] font-medium right-[8%] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[47%]"
                                size="md"
                                variant="FillYellow900"
                              >
                                Adventure
                              </Button>
                            </Stack>
                            <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[55%]">
                              <Img
                                src="images/img_calendar_12X12.svg"
                                className="calendar_Two"
                                alt="calendar Three"
                              />
                              <Text className="date" variant="body9">
                                November 23,2022
                              </Text>
                            </Row>
                            <Text
                              className="font-medium leading-[130.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_900 w-[99%]"
                              variant="body2"
                            >
                              Powerful Terminal And
                              <br />
                              Command-Line Tool
                            </Text>
                            <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[36%]">
                              <Text className="Link2" variant="body11">
                                raed more
                              </Text>
                              <Img
                                src="images/img_arrowright_2.svg"
                                className="arrowright_Three"
                                alt="arrowright Eight"
                              />
                            </Row>
                          </Column>
                          <Column className="pb-[1px] w-[23%]">
                            <Stack className="lg:h-[238px] xl:h-[297px] 2xl:h-[334px] 3xl:h-[401px] w-[100%]">
                              <div className="absolute bg-gray_800 lg:h-[227px] xl:h-[284px] 2xl:h-[319px] 3xl:h-[383px] top-[0] w-[100%]"></div>
                              <Button
                                className="absolute bottom-[0] font-medium right-[8%] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[34%]"
                                size="md"
                                variant="FillLightgreen700"
                              >
                                Travel
                              </Button>
                            </Stack>
                            <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[55%]">
                              <Img
                                src="images/img_calendar_12X12.svg"
                                className="calendar_Two"
                                alt="calendar Four"
                              />
                              <Text className="date" variant="body9">
                                November 23,2022
                              </Text>
                            </Row>
                            <Text
                              className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Useful React Hookhat You Can Projects
                            </Text>
                            <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[36%]">
                              <Text className="Link2" variant="body11">
                                raed more
                              </Text>
                              <Img
                                src="images/img_arrowright_2.svg"
                                className="arrowright_Three"
                                alt="arrowright Nine"
                              />
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Stack className="absolute bottom-[0] lg:h-[1963px] xl:h-[2456px] 2xl:h-[2762px] 3xl:h-[3314px] w-[100%]">
                    <Stack className="absolute lg:h-[1963px] xl:h-[2456px] 2xl:h-[2762px] 3xl:h-[3314px] w-[100%]">
                      <Stack className="absolute lg:h-[380px] xl:h-[476px] 2xl:h-[535px] 3xl:h-[642px] top-[0] w-[100%]">
                        <div className="absolute bg-light_green_700 lg:h-[131px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] top-[0] w-[100%]"></div>
                        <Img
                          src="images/img_group_683X998.png"
                          className="absolute bottom-[0] lg:h-[365px] xl:h-[456px] 2xl:h-[513px] 3xl:h-[616px] right-[0] w-[52%]"
                          alt="Group Three"
                        />
                      </Stack>
                      <Stack className="absolute lg:h-[1943px] xl:h-[2431px] 2xl:h-[2735px] 3xl:h-[3281px] inset-y-[0] my-[auto] right-[0] w-[84%]">
                        <Img
                          src="images/img_group_675X1615.png"
                          className="absolute lg:h-[360px] xl:h-[451px] 2xl:h-[507px] 3xl:h-[608px] top-[0] w-[100%]"
                          alt="Group Four"
                        />
                        <Row className="absolute items-center justify-between left-[1%] top-[1%] w-[80%]">
                          <Text
                            className="rowenjoythebette"
                            as="h3"
                            variant="h3"
                          >
                            <span className="text-white_A700 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              Enjoy The Better Adventure
                              <br />
                              Life
                            </span>
                            <span className="text-white_A700 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              {" "}
                              Tent Camping
                            </span>
                          </Text>
                          <Button
                            className="flex items-center justify-center text-center w-[15%]"
                            rightIcon={
                              <Img
                                src="images/img_forward.svg"
                                className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[2px] xl:w-[13px] xl:h-[14px] xl:ml-[3px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[3px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[4px]"
                                alt="forward"
                              />
                            }
                            shape="RoundedBorder5"
                            size="xl"
                            variant="FillYellow900"
                          >
                            <div className="bg-transparent font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
                              Discover more
                            </div>
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                    <Column className="absolute bg-gray_50 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] top-[7%] w-[100%]">
                      <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[69%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Column className="justify-start mt-[4px] w-[21%]">
                              <Row className="items-start w-[76%]">
                                <Img
                                  src="images/img_campingtent1_2.svg"
                                  className="campingtentOne_One"
                                  alt="campingtentOne One"
                                />
                                <Text className="Logo1" as="h4" variant="h4">
                                  Vedhak
                                </Text>
                              </Row>
                              <Text className="Link12" variant="body9">
                                Sit amet consectetur adipiscinelit
                                <br />
                                Sem et aliquam enimdeassa ornare
                                <br />
                                vulputate neque feugiat
                              </Text>
                              <Img
                                src="images/img_social_45X210.svg"
                                className="lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[77%]"
                                alt="Social"
                              />
                            </Column>
                            <Column className="justify-start my-[1px] w-[13%]">
                              <Text
                                className="font-semibold text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Services
                              </Text>
                              <Text
                                className="font-normal leading-[250.00%] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-gray_800 w-[100%]"
                                variant="body9"
                              >
                                Caravan Soler Tent
                                <br />
                                Family Tent Camping
                                <br />
                                Classic Tent Camping
                                <br />
                                Wild Tent Camping
                                <br />
                                Small Cabin Wood
                              </Text>
                            </Column>
                            <Column className="items-center justify-start w-[23%]">
                              <Column className="justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-gray_900 w-[auto]"
                                  variant="body5"
                                >
                                  Newsletter
                                </Text>
                                <Text
                                  className="font-light leading-[175.00%] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_800 w-[88%]"
                                  variant="body9"
                                >
                                  Felputate neque feugiat secursun
                                  <br />
                                  blandit volutpat hendr mauris
                                </Text>
                                <Row className="items-center justify-between lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]">
                                  <Text
                                    className="font-light text-gray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    Email Address
                                  </Text>
                                  <Button
                                    className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                    shape="icbRoundedBorder5"
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
                                <Line className="bg-gray_900 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                              </Column>
                            </Column>
                            <Column className="justify-start mt-[1px] w-[16%]">
                              <Text
                                className="font-semibold text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Location
                              </Text>
                              <Text
                                className="font-light leading-[165.00%] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_800 w-[100%]"
                                variant="body9"
                              >
                                55 Main Street, 2nd-Block
                                <br />
                                melbourne, Australia
                              </Text>
                              <Text
                                className="font-semibold lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Contact
                              </Text>
                              <Text
                                className="font-light lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] text-gray_800 w-[auto]"
                                variant="body9"
                              >
                                support@gmail.com
                              </Text>
                              <Text className="test_0001234561" variant="body9">
                                <span className="text-gray_800 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  +000{" "}
                                </span>
                                <span className="text-gray_800 font-prompt lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                                  (
                                </span>
                                <span className="text-gray_800 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  123
                                </span>
                                <span className="text-gray_800 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                                  )
                                </span>
                                <span className="text-gray_800 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  {" "}
                                  45 66
                                </span>
                              </Text>
                            </Column>
                          </Row>
                          <Stack className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                            <Line className="absolute bg-gray_900_19 h-[1px] inset-y-[48%] w-[100%]" />
                            <Button
                              className="absolute flex lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] inset-x-[48%] items-center justify-center rounded-radius50 lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                              size="mdIcn"
                              variant="icbFillYellow900"
                            >
                              <Img
                                src="images/img_arrowright_white_A700.svg"
                                className="flex items-center justify-center"
                                alt="arrowup"
                              />
                            </Button>
                          </Stack>
                          <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Text
                              className="font-light mb-[1px] text-gray_800 w-[auto]"
                              variant="body9"
                            >
                              <span className="text-gray_800 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                Copy@2022{" "}
                              </span>
                              <span className="text-light_green_700 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                Vedhak,
                              </span>
                              <span className="text-gray_800 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                {" "}
                                All Right Reserved
                              </span>
                            </Text>
                            <Text
                              className="font-light mt-[1px] text-gray_800 w-[auto]"
                              variant="body9"
                            >
                              Setting & privacy Faqs Support
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                </Stack>
              </Stack>
              <Row className="absolute items-start justify-between right-[4%] top-[4%] w-[80%]">
                <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[37%]">
                  <Img
                    src="images/img_icon_56X74.svg"
                    className="lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] w-[13%]"
                    alt="Icon Eight"
                  />
                  <Text
                    className="font-light leading-[150.00%] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-white_A700 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Sit amet consectetur adipiscing <br />
                    congue pose habit ante dignissim
                    <br />
                    faucibus tincidunt vulput ullamcor
                    <br />
                    mattis quisque esta sidiculus
                  </Text>
                  <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[61%]">
                    <Row className="items-center justify-between w-[100%]">
                      <div className="bg-bluegray_100 lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"></div>
                      <Column className="w-[67%]">
                        <Text
                          className="font-semibold text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Malcolm K. Monks
                        </Text>
                        <Text
                          className="font-light 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          CEO & Founder
                        </Text>
                        <Img
                          src="images/img_star.svg"
                          className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[59%]"
                          alt="Star Three"
                        />
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Img
                  src="images/img_image_gray_400.svg"
                  className="lg:h-[341px] xl:h-[427px] 2xl:h-[480px] 3xl:h-[576px] w-[57%]"
                  alt="Image Nineteen"
                />
              </Row>
            </Stack>
          </footer>
        </Stack>
      </Column>
    </>
  );
};

export default HomeTwoPage;
