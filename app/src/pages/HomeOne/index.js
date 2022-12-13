import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Button,
  Img,
  List,
  Stack,
  Input,
  SelectBox,
  CheckBox,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";

const HomeOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[85%]" />
          <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[109px] xl:p-[137px] 2xl:p-[154px] 3xl:p-[185px] w-[100%]">
            <Column className="items-center justify-start mb-[2px] w-[86%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="w-[49%]">
                  <Row className="items-start ml-[1px] w-[40%]">
                    <Text
                      className="font-medium mb-[2px] text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      01
                    </Text>
                    <Line className="bg-white_A700 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[38%]" />
                    <Text
                      className="font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] mt-[2px] text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Camping
                    </Text>
                  </Row>
                  <Text
                    className="leading-[100.00%] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] text-white_A700 w-[100%]"
                    variant="body12"
                  >
                    Travel &<br />
                    Adventure
                  </Text>
                  <Row className="items-center ml-[2px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[57%]">
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
                <Column className="w-[9%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 underline w-[auto]">
                    Camping
                  </Text>
                  <Column className="justify-start xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[87%]">
                    <Text
                      className="font-medium text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Adventure
                    </Text>
                    <Text
                      className="font-medium lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Travel
                    </Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[53%]">
              <Row className="items-start justify-center w-[47%]">
                <Text className="One_One" variant="body6">
                  01
                </Text>
                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[27%]" />
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
              <Column className="w-[23%]">
                <div className="bg-gray_400 lg:h-[102px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[172px] rounded-radius5 w-[100%]"></div>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[69%]">
                  <Line className="bg-gray_900 h-[1px] w-[24%]" />
                  <Text className="Title1" variant="body4">
                    Classic Tent
                  </Text>
                </Row>
                <Text className="columnrectanglesix" variant="body9">
                  Sit amet consectetur adipiscing elit.
                  <br />
                  Lacus acmassa in hendrerit
                </Text>
              </Column>
              <Column className="w-[23%]">
                <Column className="bg-gradient1  items-center justify-start lg:p-[37px] xl:p-[46px] 2xl:p-[52px] 3xl:p-[63px] rounded-radius5 w-[100%]">
                  <Button
                    className="flex lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] items-center justify-center rounded-radius50 lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                    size="mdIcn"
                    variant="icbFillYellow900"
                  >
                    <Img
                      src="images/img_icon.svg"
                      className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                      alt="Icon Five"
                    />
                  </Button>
                </Column>
                <Row className="items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[70%]">
                  <Line className="bg-light_green_700 h-[1px] w-[24%]" />
                  <Text className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-light_green_700 underline w-[auto]">
                    Luxury Tent
                  </Text>
                </Row>
                <Text
                  className="font-light leading-[175.00%] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] text-gray_800 w-[93%]"
                  variant="body9"
                >
                  Quis autem reprehendea voluptate velit esse quam molestiae
                </Text>
              </Column>
              <List
                className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-2 min-h-[auto] w-[49%]"
                orientation="horizontal"
              >
                <Column className="justify-start w-[100%]">
                  <div className="bg-gray_800 lg:h-[102px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[172px] rounded-radius5 w-[100%]"></div>
                  <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[73%]">
                    <Line className="bg-gray_900 h-[1px] w-[23%]" />
                    <Text className="Title1" variant="body4">
                      Cabin Trailer
                    </Text>
                  </Row>
                  <Text className="columnrectanglesix" variant="body9">
                    On the other hand denounce with righteous indignation
                    dislike
                  </Text>
                </Column>
                <Column className="justify-start w-[100%]">
                  <div className="bg-gray_800 lg:h-[102px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[172px] rounded-radius5 w-[100%]"></div>
                  <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[68%]">
                    <Line className="bg-gray_900 h-[1px] w-[24%]" />
                    <Text className="Title1" variant="body4">
                      Motorhome
                    </Text>
                  </Row>
                  <Text className="columnrectanglesix" variant="body9">
                    To take trivial example which ever undertakes laborious
                    physical
                  </Text>
                </Column>
              </List>
            </Row>
          </Column>
        </Column>
        <Stack className="3xl:h-[10023px] lg:h-[5936px] xl:h-[7426px] 2xl:h-[8354px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Stack className="absolute lg:h-[5482px] xl:h-[6858px] 2xl:h-[7714px] 3xl:h-[9256px] top-[0] w-[100%]">
            <Stack className="absolute lg:h-[5482px] xl:h-[6858px] 2xl:h-[7714px] 3xl:h-[9256px] w-[100%]">
              <Stack className="absolute lg:h-[5482px] xl:h-[6858px] 2xl:h-[7714px] 3xl:h-[9256px] w-[100%]">
                <Column className="absolute inset-x-[0] items-center justify-start top-[0] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <div className="bg-gray_50 lg:h-[377px] xl:h-[472px] 2xl:h-[530px] 3xl:h-[636px] w-[54%]"></div>
                    <div className="bg-yellow_900 lg:h-[377px] xl:h-[472px] 2xl:h-[530px] 3xl:h-[636px] w-[26%]"></div>
                  </Row>
                </Column>
                <Stack className="absolute lg:h-[5380px] xl:h-[6730px] 2xl:h-[7571px] 3xl:h-[9084px] top-[2%] w-[100%]">
                  <Img
                    src="images/img_group_6890X1920.png"
                    className="absolute lg:h-[3675px] xl:h-[4597px] 2xl:h-[5172px] 3xl:h-[6205px] top-[0] w-[100%]"
                    alt="Group"
                  />
                  <Column className="absolute justify-start left-[16%] top-[1%] w-[26%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-medium text-gray_900 w-[auto]"
                            variant="body6"
                          >
                            Check In
                          </Text>
                          <Img
                            src="images/img_calendar.svg"
                            className="calendar"
                            alt="calendar"
                          />
                        </Row>
                        <Line className="bg-white_A700 border border-gray_900 border-solid h-[1px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] shadow-bs w-[100%]" />
                      </Column>
                    </Column>
                    <Input
                      className="font-medium p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                      wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] flex lg:mt-[14px] w-[100%] xl:mt-[18px]"
                      name="Two"
                      placeholder="Check Out"
                      suffix={
                        <Img
                          src="images/img_calendar.svg"
                          className="lg:w-[9px] lg:h-[10px] lg:ml-[18px] xl:w-[12px] xl:h-[13px] xl:ml-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[31px] my-[auto]"
                          alt="calendar"
                        />
                      }
                      size="md"
                      variant="UnderLineGray90026"
                    ></Input>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-medium p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                      wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] flex lg:mt-[14px] w-[100%] xl:mt-[18px]"
                      name="Three"
                      placeholder="Guests"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer lg:w-[6px] lg:ml-[18px] xl:w-[8px] xl:ml-[23px] 2xl:w-[9px] 2xl:ml-[26px] 3xl:w-[11px] 3xl:ml-[31px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#1c231f"
                          />
                        ) : (
                          <Img
                            src="images/img_search_light_green_700.svg"
                            className="cursor-pointer lg:w-[6px] lg:ml-[18px] xl:w-[8px] xl:ml-[23px] 2xl:w-[9px] 2xl:ml-[26px] 3xl:w-[11px] 3xl:ml-[31px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                      size="lgSrc"
                      variant="srcUnderLineGray90026"
                    ></Input>
                    <SelectBox
                      className="font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_900 w-[100%]"
                      placeholderClassName="text-gray_900"
                      name="Four"
                      placeholder="Accommodation"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_6X10.svg"
                          className="mr-[0] lg:w-[5px] lg:h-[4px] xl:w-[6px] xl:h-[5px] 2xl:w-[7px] 2xl:h-[5px] 3xl:w-[9px] 3xl:h-[6px]"
                          alt="arrow_down"
                        />
                      }
                      size="md"
                      variant="UnderLineGray90026"
                    ></SelectBox>
                    <Button
                      className="2xl:mt-[22px] 3xl:mt-[27px] flex items-center justify-center lg:mt-[16px] text-center w-[46%] xl:mt-[20px]"
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
                  </Column>
                </Stack>
              </Stack>
              <div className="absolute bg-gray_400 lg:h-[339px] xl:h-[424px] 2xl:h-[477px] 3xl:h-[572px] right-[16%] top-[0] w-[33%]"></div>
            </Stack>
            <Row className="absolute items-start justify-between right-[5%] top-[1%] w-[78%]">
              <Column className="justify-start w-[28%]">
                <Row className="items-start w-[63%]">
                  <Text className="One_One" variant="body6">
                    02
                  </Text>
                  <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[32%]" />
                  <Text className="EnjoyAdventure" variant="body6">
                    Availability
                  </Text>
                </Row>
                <Text className="Title3" as="h3" variant="h3">
                  <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Find Best Camping
                    <br />
                  </span>
                  <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Availability
                  </span>
                </Text>
              </Column>
              <Img
                src="images/img_image.png"
                className="lg:h-[232px] xl:h-[291px] 2xl:h-[327px] 3xl:h-[392px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[18%]"
                alt="Image Four"
              />
            </Row>
          </Stack>
          <Stack className="absolute bottom-[0] lg:h-[5507px] xl:h-[6889px] 2xl:h-[7749px] 3xl:h-[9297px] w-[100%]">
            <Stack className="absolute lg:h-[5380px] xl:h-[6730px] 2xl:h-[7571px] 3xl:h-[9084px] top-[2%] w-[100%]">
              <Stack
                className="absolute bg-cover bg-repeat lg:h-[3221px] xl:h-[4029px] 2xl:h-[4532px] 3xl:h-[5438px] top-[0] w-[100%]"
                style={{ backgroundImage: "url('images/img_group104.png')" }}
              >
                <Stack className="absolute lg:h-[2862px] xl:h-[3580px] 2xl:h-[4027px] 3xl:h-[4832px] top-[0] w-[100%]">
                  <Stack className="absolute lg:h-[2862px] xl:h-[3580px] 2xl:h-[4027px] 3xl:h-[4832px] w-[100%]">
                    <Column className="absolute items-center justify-start top-[0] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Column className="justify-start lg:ml-[558px] xl:ml-[699px] 2xl:ml-[786px] 3xl:ml-[943px] w-[25%]">
                          <Text
                            className="font-light leading-[175.00%] text-gray_800 w-[100%]"
                            variant="body9"
                          >
                            Sit amet consectetur adipiscing elit. At donec et
                            fusce orci tellus aliquam vitae. Metus nibh laoreet
                            velit, diam enim. Justo
                            <br />
                            sagittis fringilla ulputatey honcus justo, cras sed
                          </Text>
                          <CheckBox
                            className="font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                            inputClassName="h-[25px] mr-[5px] w-[25px]"
                            name="WildCamping"
                            label="Wild Camping"
                            shape="RoundedBorder12"
                          ></CheckBox>
                          <CheckBox
                            className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                            inputClassName="h-[25px] mr-[5px] w-[25px]"
                            name="FamilyCamping"
                            label="Family Camping"
                            shape="RoundedBorder12"
                          ></CheckBox>
                          <CheckBox
                            className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                            inputClassName="h-[25px] mr-[5px] w-[25px]"
                            name="TentCamping"
                            label="Tent Camping"
                            shape="RoundedBorder12"
                          ></CheckBox>
                          <Button
                            className="2xl:mt-[30px] 3xl:mt-[36px] flex items-center justify-center lg:mt-[21px] text-center w-[41%] xl:mt-[26px]"
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
                        <Stack className="lg:h-[307px] xl:h-[384px] 2xl:h-[432px] 3xl:h-[518px] 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]">
                          <Column className="absolute items-center justify-start w-[100%]">
                            <div className="bg-gray_900_8c lg:h-[307px] xl:h-[384px] 2xl:h-[432px] 3xl:h-[518px] w-[100%]"></div>
                          </Column>
                          <Row className="absolute items-center justify-between left-[17%] top-[26%] w-[59%]">
                            <Column className="w-[52%]">
                              <Text
                                className="font-semibold text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Ready to Get Started your Travel Camping Us
                              </Text>
                              <Button
                                className="2xl:mt-[30px] 3xl:mt-[36px] flex items-center justify-center lg:mt-[21px] text-center w-[31%] xl:mt-[26px]"
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
                                  watch video
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
                      </Column>
                    </Column>
                    <Stack className="absolute bottom-[0] lg:h-[2380px] xl:h-[2977px] 2xl:h-[3349px] 3xl:h-[4018px] right-[0] w-[91%]">
                      <Stack className="absolute bottom-[0] lg:h-[2375px] xl:h-[2971px] 2xl:h-[3342px] 3xl:h-[4010px] w-[100%]">
                        <div className="absolute bg-gray_50 lg:h-[160px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[270px] left-[0] top-[0] w-[90%]"></div>
                        <Img
                          src="images/img_group_4413X1004.png"
                          className="absolute lg:h-[2354px] xl:h-[2945px] 2xl:h-[3313px] 3xl:h-[3974px] inset-y-[0] my-[auto] right-[0] w-[57%]"
                          alt="Group One"
                        />
                      </Stack>
                      <Column
                        className="absolute bg-cover bg-repeat justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] top-[1%] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group99.png')",
                        }}
                      >
                        <Column className="items-center justify-start lg:mb-[1724px] xl:mb-[2157px] 2xl:mb-[2427px] 3xl:mb-[2912px] 3xl:ml-[119px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] w-[75%]">
                          <Row className="items-center w-[100%]">
                            <Column className="mb-[1px] w-[12%]">
                              <Img
                                src="images/img_cut.svg"
                                className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] ml-[1px] w-[42%]"
                                alt="cut"
                              />
                              <Text
                                className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_900 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                365k+
                              </Text>
                              <Text className="HappyTraveler" variant="body8">
                                Happy Traveler
                              </Text>
                            </Column>
                            <Column className="lg:ml-[128px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[217px] w-[8%]">
                              <Img
                                src="images/img_cut_65X65.svg"
                                className="cut_One"
                                alt="cut One"
                              />
                              <Text
                                className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_900 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                135+
                              </Text>
                              <Text className="HappyTraveler" variant="body8">
                                Tent Sites
                              </Text>
                            </Column>
                            <Column className="lg:ml-[153px] xl:ml-[191px] 2xl:ml-[215px] 3xl:ml-[258px] w-[9%]">
                              <Img
                                src="images/img_location.svg"
                                className="cut_One"
                                alt="location"
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
                            <Column className="lg:ml-[126px] xl:ml-[158px] 2xl:ml-[177px] 3xl:ml-[213px] w-[11%]">
                              <Img
                                src="images/img_tent21.svg"
                                className="cut_One"
                                alt="tentTwentyOne"
                              />
                              <Text className="language" as="h2" variant="h2">
                                985+
                              </Text>
                              <Text className="HappyTraveler" variant="body8">
                                Family Camping
                              </Text>
                            </Column>
                          </Row>
                          <Column className="items-center justify-start xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[82px] w-[100%]">
                            <Column className="items-center justify-start w-[100%]">
                              <Column className="items-center justify-start w-[38%]">
                                <Row className="items-start justify-center w-[65%]">
                                  <Text className="One_One" variant="body6">
                                    04
                                  </Text>
                                  <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[26%]" />
                                  <Text
                                    className="EnjoyAdventure"
                                    variant="body6"
                                  >
                                    Popular Services
                                  </Text>
                                </Row>
                                <Text className="Title" as="h3" variant="h3">
                                  <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                                    Amazing Camping For
                                    <br />
                                  </span>
                                  <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                                    Real Adventure
                                  </span>
                                </Text>
                              </Column>
                              <List
                                className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
                                orientation="horizontal"
                              >
                                <Stack className="listrectanglesix_four">
                                  <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                                  <Column
                                    className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group100.svg')",
                                    }}
                                  >
                                    <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
                                      <Row className="items-center w-[70%]">
                                        <Line className="bg-gray_900 h-[1px] w-[22%]" />
                                        <Text
                                          className="Title1"
                                          variant="body4"
                                        >
                                          Tent Camping
                                        </Text>
                                      </Row>
                                      <Text
                                        className="columnrectanglesix_four"
                                        variant="body9"
                                      >
                                        Sit amet consectetur adipisc fermentumat
                                        <br />
                                        tellusaliquam arcu uturnacon sequat
                                      </Text>
                                      <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                                      <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                        <Img
                                          src="images/img_laptop.svg"
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
                                            alt="arrowright"
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
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group100.svg')",
                                    }}
                                  >
                                    <Column className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[89%]">
                                      <Row className="items-center w-[78%]">
                                        <Line className="bg-gray_900 h-[1px] w-[20%]" />
                                        <Text
                                          className="Title1"
                                          variant="body4"
                                        >
                                          Family Camping
                                        </Text>
                                      </Row>
                                      <Text
                                        className="columnrectanglesix_five"
                                        variant="body9"
                                      >
                                        Sit amet consectetur adipisc fermentumat
                                        <br />
                                        tellusaliquam arcu uturnacon sequat
                                      </Text>
                                      <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                                      <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                        <Img
                                          src="images/img_laptop_27X27.svg"
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
                                            alt="arrowright One"
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
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group100.svg')",
                                    }}
                                  >
                                    <Column className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[89%]">
                                      <Row className="items-center w-[71%]">
                                        <Line className="bg-gray_900 h-[1px] w-[21%]" />
                                        <Text
                                          className="Title1"
                                          variant="body4"
                                        >
                                          Wild Camping
                                        </Text>
                                      </Row>
                                      <Text
                                        className="columnrectanglesix_five"
                                        variant="body9"
                                      >
                                        Sit amet consectetur adipisc fermentumat
                                        <br />
                                        tellusaliquam arcu uturnacon sequat
                                      </Text>
                                      <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                                      <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                        <Img
                                          src="images/img_laptop_1.svg"
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
                                            alt="arrowright Two"
                                          />
                                        </Button>
                                      </Row>
                                    </Column>
                                  </Column>
                                </Stack>
                              </List>
                              <Button
                                className="2xl:mt-[45px] 3xl:mt-[54px] flex items-center justify-center lg:mt-[32px] text-center w-[15%] xl:mt-[40px]"
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
                                  Discover more
                                </div>
                              </Button>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column className="absolute items-center justify-start left-[0] top-[41%] w-[81%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Img
                        src="images/img_image_641X960.png"
                        className="lg:h-[342px] xl:h-[428px] 2xl:h-[482px] 3xl:h-[578px] w-[62%]"
                        alt="Image Nine"
                      />
                      <Column className="w-[32%]">
                        <Column className="justify-start w-[94%]">
                          <Row className="items-start w-[67%]">
                            <Text className="One_One" variant="body6">
                              05
                            </Text>
                            <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[27%]" />
                            <Text className="EnjoyAdventure" variant="body6">
                              Why Choose Us
                            </Text>
                          </Row>
                          <Text className="Title3" as="h3" variant="h3">
                            <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              Traveler Why Choose
                              <br />
                            </span>
                            <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                              Our Tent Camping
                            </span>
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Img
                              src="images/img_computer.svg"
                              className="lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] mt-[1px] lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                              alt="computer"
                            />
                            <Column className="justify-start w-[77%]">
                              <Text
                                className="font-semibold text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Facilities/Prices
                              </Text>
                              <Text
                                className="description_Five"
                                variant="body9"
                              >
                                Undertakes laborious physical exercise except to
                                <br />
                                obtain some advantage has any right
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Button
                              className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] items-center justify-center rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                              size="mdIcn"
                              variant="icbFillLightgreen70019"
                            >
                              <Img
                                src="images/img_cut_85X85.svg"
                                className="flex items-center justify-center lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px]"
                                alt="cut Two"
                              />
                            </Button>
                            <Column className="w-[77%]">
                              <Text
                                className="font-semibold text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Outdoor Sports
                              </Text>
                              <Text className="description_Six" variant="body9">
                                These cases are perfectly simple and distinguish
                                <br />
                                power of choice untrammelled nothing
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Img
                              src="images/img_computer_85X85.svg"
                              className="lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                              alt="computer One"
                            />
                            <Column className="w-[77%]">
                              <Text
                                className="font-semibold text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Well Canoeing
                              </Text>
                              <Text className="description_Six" variant="body9">
                                Quis autem vel eum sure reprehenderit voluptate
                                <br />
                                velit esse quam molestiae consequatur
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Stack>
              </Stack>
              <Stack className="absolute lg:h-[1963px] xl:h-[2456px] 2xl:h-[2762px] 3xl:h-[3314px] top-[28%] w-[100%]">
                <Stack className="absolute lg:h-[1963px] xl:h-[2456px] 2xl:h-[2762px] 3xl:h-[3314px] w-[100%]">
                  <Stack className="absolute lg:h-[1689px] xl:h-[2113px] 2xl:h-[2377px] 3xl:h-[2852px] top-[0] w-[100%]">
                    <div className="absolute bg-light_green_700 lg:h-[131px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] top-[0] w-[100%]"></div>
                    <Img
                      src="images/img_group_3137X998.png"
                      className="absolute lg:h-[1674px] xl:h-[2093px] 2xl:h-[2355px] 3xl:h-[2825px] inset-y-[0] my-[auto] right-[0] w-[52%]"
                      alt="Group Two"
                    />
                  </Stack>
                  <Stack className="absolute lg:h-[1943px] xl:h-[2431px] 2xl:h-[2735px] 3xl:h-[3281px] inset-y-[0] my-[auto] right-[0] w-[84%]">
                    <Img
                      src="images/img_group_3129X1615.png"
                      className="absolute lg:h-[1669px] xl:h-[2088px] 2xl:h-[2349px] 3xl:h-[2818px] top-[0] w-[100%]"
                      alt="Group Three"
                    />
                    <Column className="absolute items-center justify-start left-[1%] top-[1%] w-[81%]">
                      <Row className="items-center justify-between w-[98%]">
                        <Text className="rowenjoythebette" as="h3" variant="h3">
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
                      <Column className="items-center justify-start lg:mt-[547px] xl:mt-[684px] 2xl:mt-[770px] 3xl:mt-[923px] w-[100%]">
                        <Row className="items-start w-[100%]">
                          <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[34%]">
                            <Column className="justify-start w-[100%]">
                              <Row className="items-center w-[60%]">
                                <Text className="Seven" variant="body6">
                                  07
                                </Text>
                                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[32%]" />
                                <Text className="Testimonils" variant="body6">
                                  Testimonils
                                </Text>
                              </Row>
                              <Text className="Title4" as="h3" variant="h3">
                                <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                                  What Our Client Say
                                  <br />
                                </span>
                                <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                                  About Us
                                </span>
                              </Text>
                            </Column>
                            <Img
                              src="images/img_navigation.svg"
                              className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[32%]"
                              alt="navigation"
                            />
                          </Column>
                          <Column className="bg-gray_50 items-center justify-end lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] rounded-radius7 w-[50%]">
                            <Column className="items-center justify-start mt-[1px] w-[62%]">
                              <Row className="items-center justify-between w-[100%]">
                                <div className="bg-bluegray_100 lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"></div>
                                <Column className="w-[67%]">
                                  <Text
                                    className="font-semibold text-gray_900 w-[auto]"
                                    variant="body2"
                                  >
                                    Malcolm K. Monks
                                  </Text>
                                  <Text className="CEOFounder" variant="body8">
                                    CEO & Founder
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Text className="Say" variant="body4">
                              Sit amet consectetur adipiscing congue pose <br />
                              habit ante dignissim faucibus tincidunt vulputate
                              <br />
                              ullamcorper mattis quisque esta sidiculus
                            </Text>
                            <Img
                              src="images/img_star.svg"
                              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[25%]"
                              alt="Star"
                            />
                          </Column>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:ml-[41px] xl:ml-[52px] 2xl:ml-[58px] 3xl:ml-[70px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[81px] w-[2%]"
                            alt="overflowmenu"
                          />
                        </Row>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[98%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start w-[43%]">
                            <Row className="items-start justify-center w-[52%]">
                              <Text className="One_One" variant="body6">
                                08
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
                          <List
                            className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
                            orientation="horizontal"
                          >
                            <Column className="items-center justify-start pb-[1px] w-[100%]">
                              <div className="bg-gray_800 lg:h-[155px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] w-[100%]"></div>
                              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[91%]">
                                <Row className="items-start w-[90%]">
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
                                      alt="computer Two"
                                    />
                                    <Text className="date" variant="body9">
                                      Comments (05)
                                    </Text>
                                  </Row>
                                </Row>
                                <Text
                                  className="columncalendar"
                                  variant="body2"
                                >
                                  It’s That Time Of (December
                                  <br />
                                  2022) Desktop Edition
                                </Text>
                                <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[29%]">
                                  <Text className="Link2" variant="body11">
                                    read more
                                  </Text>
                                  <Img
                                    src="images/img_arrowright_1.svg"
                                    className="arrowright_Three"
                                    alt="arrowright Three"
                                  />
                                </Row>
                              </Column>
                            </Column>
                            <Column className="items-center justify-start pb-[1px] w-[100%]">
                              <div className="bg-gray_800 lg:h-[155px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] w-[100%]"></div>
                              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[86%]">
                                <Row className="items-start w-[94%]">
                                  <Row className="items-start w-[50%]">
                                    <Img
                                      src="images/img_calendar_12X12.svg"
                                      className="calendar_Two"
                                      alt="calendar Three"
                                    />
                                    <Text className="date" variant="body9">
                                      November 23,2022
                                    </Text>
                                  </Row>
                                  <Row className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[41%]">
                                    <Img
                                      src="images/img_computer_12X13.svg"
                                      className="computer_Two"
                                      alt="computer Three"
                                    />
                                    <Text className="date" variant="body9">
                                      Comments (05)
                                    </Text>
                                  </Row>
                                </Row>
                                <Text className="lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] underline columncalendar">
                                  Meet Touch Design Mobile
                                  <br />
                                  Interfaces Smashing
                                </Text>
                                <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[31%]">
                                  <Text
                                    className="font-medium text-light_green_700 uppercase w-[auto]"
                                    variant="body11"
                                  >
                                    read more
                                  </Text>
                                  <Img
                                    src="images/img_forward_1.svg"
                                    className="arrowright_Three"
                                    alt="forward Two"
                                  />
                                </Row>
                              </Column>
                            </Column>
                            <Column className="items-center justify-start pb-[1px] w-[100%]">
                              <div className="bg-gray_800 lg:h-[155px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] w-[100%]"></div>
                              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[90%]">
                                <Row className="items-start w-[90%]">
                                  <Row className="items-start w-[50%]">
                                    <Img
                                      src="images/img_calendar_12X12.svg"
                                      className="calendar_Two"
                                      alt="calendar Four"
                                    />
                                    <Text className="date" variant="body9">
                                      November 23,2022
                                    </Text>
                                  </Row>
                                  <Row className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[41%]">
                                    <Img
                                      src="images/img_computer_12X13.svg"
                                      className="computer_Two"
                                      alt="computer Four"
                                    />
                                    <Text className="date" variant="body9">
                                      Comments (05)
                                    </Text>
                                  </Row>
                                </Row>
                                <Text
                                  className="columncalendar"
                                  variant="body2"
                                >
                                  Powerful Terminal Comaney
                                  <br />
                                  Modern Development
                                </Text>
                                <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[29%]">
                                  <Text className="Link2" variant="body11">
                                    read more
                                  </Text>
                                  <Img
                                    src="images/img_arrowright_1.svg"
                                    className="arrowright_Three"
                                    alt="arrowright Four"
                                  />
                                </Row>
                              </Column>
                            </Column>
                          </List>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                </Stack>
                <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[9%] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="items-center justify-start w-[39%]">
                      <Row className="items-start justify-center w-[44%]">
                        <Text className="One_One" variant="body6">
                          06
                        </Text>
                        <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[28%]" />
                        <Text className="EnjoyAdventure" variant="body6">
                          Recent Gallery
                        </Text>
                      </Row>
                      <Text className="Title" as="h3" variant="h3">
                        <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                          Take a Look About Our Recent
                          <br />
                        </span>
                        <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                          Camping Photo
                        </span>
                      </Text>
                    </Column>
                    <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                      <div className="bg-gray_800 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] w-[24%]"></div>
                      <Column className="bg-gray_800 items-center w-[24%]">
                        <Column className="bg-gray_900_d8 items-center justify-end lg:p-[36px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] w-[100%]">
                          <Button
                            className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] items-center justify-center xl:mt-[109px] 2xl:mt-[123px] 3xl:mt-[147px] lg:mt-[87px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                            size="2xlIcn"
                            variant="icbFillYellow900"
                          >
                            <Img
                              src="images/img_icon_85X85.svg"
                              className="flex items-center justify-center lg:h-[8px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                              alt="Icon Seven"
                            />
                          </Button>
                          <Text
                            className="font-semibold lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            Tent Camping
                          </Text>
                          <Row className="items-start justify-center lg:mb-[25px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                            <Line className="bg-white_A700 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[18%]" />
                            <Text
                              className="font-light lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] text-white_A700 w-[auto]"
                              variant="body8"
                            >
                              Forest Traveling
                            </Text>
                            <Line className="bg-white_A700 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[18%]" />
                          </Row>
                        </Column>
                      </Column>
                      <div className="bg-gray_800 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] w-[24%]"></div>
                      <div className="bg-gray_800 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] w-[24%]"></div>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute bg-gray_900 bottom-[14%] items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] w-[100%]">
                  <Column className="items-center justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[69%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="rowsubscribeourn"
                              as="h3"
                              variant="h3"
                            >
                              <span className="text-white_A700 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                                Subscribe Our Newsletter
                                <br />
                              </span>
                              <span className="text-white_A700 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                                Get Every Update
                              </span>
                            </Text>
                            <Row className="bg-white_A700 items-center justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius5 w-[44%]">
                              <Img
                                src="images/img_mail.svg"
                                className="mail"
                                alt="mail"
                              />
                              <Text className="rowmail" variant="body9">
                                Email Address
                              </Text>
                              <Button
                                className="2xl:ml-[170px] 3xl:ml-[204px] flex items-center justify-center lg:ml-[121px] text-center w-[29%] xl:ml-[151px]"
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
                                  subscribe
                                </div>
                              </Button>
                            </Row>
                          </Row>
                          <Line className="bg-white_A700_19 h-[1px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]" />
                        </Column>
                      </Column>
                      <Row className="items-start justify-between lg:mt-[40px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]">
                        <Column className="justify-start mt-[4px] w-[21%]">
                          <Row className="items-start w-[76%]">
                            <Img
                              src="images/img_campingtent1_45X45.svg"
                              className="campingtentOne_One"
                              alt="campingtentOne One"
                            />
                            <Text className="Logo" as="h4" variant="h4">
                              Vedhak
                            </Text>
                          </Row>
                          <Text className="Link11" variant="body9">
                            Sit amet consectetur adipiscinelit
                            <br />
                            Sem et aliquam enimdeassa ornare
                            <br />
                            vulputate neque feugiat secursun
                            <br />
                            blandit volutpat hendr mauris
                          </Text>
                          <Img
                            src="images/img_social.svg"
                            className="Social"
                            alt="Social"
                          />
                        </Column>
                        <Column className="justify-start w-[6%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Links
                          </Text>
                          <Text className="HomePricingAb" variant="body9">
                            Home
                            <br />
                            <br />
                            Pricing
                            <br />
                            <br />
                            About us
                            <br />
                            <br />
                            Careers
                            <br />
                            <br />
                            Features
                            <br />
                            <br />
                            Blog
                          </Text>
                        </Column>
                        <Column className="justify-start mt-[1px] w-[13%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Services
                          </Text>
                          <Text className="HomePricingAb" variant="body9">
                            Caravan Soler Tent
                            <br />
                            Family Tent Camping
                            <br />
                            Classic Tent Camping
                            <br />
                            Wild Tent Camping
                            <br />
                            Bell Glamp One
                            <br />
                            Small Cabin Wood
                          </Text>
                        </Column>
                        <Column className="justify-start mt-[2px] w-[10%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Support
                          </Text>
                          <Text className="description_Eleven" variant="body9">
                            Meet Our Team
                            <br />
                            Item Support
                            <br />
                            <br />
                            Contact Foram
                            <br />
                            <br />
                            Report Abuse
                            <br />
                            <br />
                            Live
                          </Text>
                        </Column>
                        <Column className="justify-start mt-[1px] w-[16%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Location
                          </Text>
                          <Text className="country" variant="body9">
                            55 Main Street, 2nd-Block
                            <br />
                            melbourne, Australia
                          </Text>
                          <Text className="Contact" variant="body5">
                            Contact
                          </Text>
                          <Text className="email" variant="body9">
                            support@gmail.com
                          </Text>
                          <Text className="test_000123456" variant="body9">
                            <span className="text-gray_300 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              +000{" "}
                            </span>
                            <span className="text-gray_300 font-prompt lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                              (
                            </span>
                            <span className="text-gray_300 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              123
                            </span>
                            <span className="text-gray_300 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                              )
                            </span>
                            <span className="text-gray_300 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              {" "}
                              45 66
                            </span>
                          </Text>
                        </Column>
                      </Row>
                      <Stack className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                        <Line className="absolute bg-white_A700_19 bottom-[44%] h-[1px] w-[100%]" />
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
                      <Row className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                        <Text className="Copy2022Vedha" variant="body9">
                          <span className="text-gray_300 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            Copy@2022{" "}
                          </span>
                          <span className="text-yellow_900 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            Vedhak,
                          </span>
                          <span className="text-gray_300 font-prompt lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            {" "}
                            All Right Reserved
                          </span>
                        </Text>
                        <Text className="language_Two1" variant="body9">
                          Setting & privacy Faqs Support
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Stack>
            <Column className="absolute justify-start right-[22%] top-[0] w-[23%]">
              <Row className="items-center w-[56%]">
                <Text className="Seven" variant="body6">
                  03
                </Text>
                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[34%]" />
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
            <div className="absolute bg-gray_400 lg:h-[307px] xl:h-[384px] 2xl:h-[432px] 3xl:h-[518px] left-[21%] top-[0] w-[27%]"></div>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default HomeOnePage;
