import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  Button,
  Input,
  SelectBox,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HomeThreePage = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate5() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] w-[100%]">
        <Stack className="bg-gray_900 2xl:h-[1062px] 3xl:h-[1275px] lg:h-[755px] xl:h-[945px] lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] w-[100%]">
          <Stack className="absolute 2xl:h-[1040px] 3xl:h-[1248px] lg:h-[739px] xl:h-[925px] inset-[0] justify-center m-[auto] w-[93%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[96%]">
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_vector_white_A700.svg"
                  className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[42%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_video.svg"
                  className="lg:h-[390px] xl:h-[488px] 2xl:h-[548px] 3xl:h-[658px] lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:mt-[126px] xl:mt-[158px] 2xl:mt-[177px] 3xl:mt-[213px] w-[96%]"
                  alt="Video"
                />
              </Column>
            </Column>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[6%] w-[92%]">
              <Row className="items-start w-[100%]">
                <Row className="items-start mt-[4px] w-[13%]">
                  <Img
                    src="images/img_warning.svg"
                    className="campingtentOne_One"
                    alt="warning"
                  />
                  <Text className="Logo" as="h4" variant="h4">
                    Vedhak
                  </Text>
                </Row>
                <Row className="items-start justify-center lg:ml-[112px] xl:ml-[140px] 2xl:ml-[158px] 3xl:ml-[190px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[47%]">
                  <Stack className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[92%]">
                    <Text className="language8" variant="body6">
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        Home Accommodation
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        {" "}
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        Gallery
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        {" "}
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        Blog
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        {" "}
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        Pages
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        {" "}
                      </span>
                      <span className="text-white_A700 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
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
                  variant="FillYellow900"
                >
                  <div className="bg-transparent font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
                    book now
                  </div>
                </Button>
                <Row className="items-center justify-evenly lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[5%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
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
              <Row className="items-start justify-between lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[84%]">
                <Text
                  className="leading-[100.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-white_A700 tracking-ls1 w-[41%]"
                  variant="body14"
                >
                  Travel & <br />
                  Adventure
                  <br />
                  Camping
                </Text>
                <Column className="bg-gray_50 items-center justify-center lg:p-[32px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-radius20 w-[50%]">
                  <Column className="items-center justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="w-[47%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body8"
                        >
                          Check In
                        </Text>
                        <Input
                          className="placeholder:text-gray_800 GroupNine"
                          wrapClassName="2xl:mt-[12px] 3xl:mt-[15px] flex lg:mt-[9px] w-[100%] xl:mt-[11px]"
                          name="Group114"
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
                      <Column className="w-[47%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body8"
                        >
                          Check Out
                        </Text>
                        <Input
                          className="placeholder:text-gray_800 GroupNine"
                          wrapClassName="2xl:mt-[12px] 3xl:mt-[15px] flex lg:mt-[9px] w-[100%] xl:mt-[11px]"
                          name="Group115"
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
                    </Row>
                    <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[100%]">
                      <Column className="w-[47%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body8"
                        >
                          Guest
                        </Text>
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="placeholder:text-gray_800 GroupNine"
                          wrapClassName="2xl:mt-[12px] 3xl:mt-[15px] flex lg:mt-[9px] w-[100%] xl:mt-[11px]"
                          name="Group116"
                          placeholder="Persons"
                          suffix={
                            inputvalue?.length > 0 ? (
                              <CloseSVG
                                className="cursor-pointer mr-[4px] lg:w-[6px] lg:ml-[18px] xl:w-[8px] xl:ml-[23px] 2xl:w-[9px] 2xl:ml-[26px] 3xl:w-[11px] 3xl:ml-[31px] my-[auto]"
                                onClick={() => setInputvalue("")}
                                color="#484848"
                              />
                            ) : (
                              <Img
                                src="images/img_search_light_green_700.svg"
                                className="cursor-pointer mr-[4px] lg:w-[6px] lg:ml-[18px] xl:w-[8px] xl:ml-[23px] 2xl:w-[9px] 2xl:ml-[26px] 3xl:w-[11px] 3xl:ml-[31px] my-[auto]"
                                alt="search"
                              />
                            )
                          }
                          shape="srcRoundedBorder5"
                          size="smSrc"
                          variant="srcOutlineGray90026"
                        ></Input>
                      </Column>
                      <Column className="w-[47%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body8"
                        >
                          Accommodations
                        </Text>
                        <SelectBox
                          className="font-light xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_800 w-[100%]"
                          placeholderClassName="text-gray_800"
                          name="Group117"
                          placeholder="Tent Camping"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_6X10.svg"
                              className="lg:w-[5px] lg:h-[4px] lg:mr-[13px] xl:w-[6px] xl:h-[5px] xl:mr-[16px] 2xl:w-[7px] 2xl:h-[5px] 2xl:mr-[18px] 3xl:w-[9px] 3xl:h-[6px] 3xl:mr-[22px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder5"
                        ></SelectBox>
                      </Column>
                    </Row>
                    <Button
                      className="font-semibold lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center uppercase w-[100%]"
                      shape="RoundedBorder5"
                      size="xl"
                      variant="FillLightgreen700"
                    >
                      check availability
                    </Button>
                  </Column>
                </Column>
              </Row>
            </Column>
            <header className="absolute top-[0] w-[100%]">
              <Row className="bg-light_green_700 items-center justify-end 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                <Row className="items-start justify-center w-[12%]">
                  <Img
                    src="images/img_mail_19X19.svg"
                    className="mail6"
                    alt="mail"
                  />
                  <Text
                    className="cursor-pointer hover:font-normal font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[1px] not-italic text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    support@gmail.com
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[20%]">
                  <Img
                    src="images/img_location_18X15.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[4%]"
                    alt="location"
                  />
                  <Text
                    className="cursor-pointer hover:font-normal font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] my-[1px] not-italic text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    552 Main Street, Melbourne, Australia
                  </Text>
                </Row>
                <Row className="items-center justify-center mb-[1px] lg:ml-[341px] xl:ml-[427px] 2xl:ml-[481px] 3xl:ml-[577px] w-[11%]">
                  <Img src="images/img_call.svg" className="mail" alt="call" />
                  <Text
                    className="cursor-pointer hover:font-normal font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] not-italic text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    <span className="text-white_A700 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                      +000{" "}
                    </span>
                    <span className="text-white_A700 font-prompt lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      (
                    </span>
                    <span className="text-white_A700 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                      123
                    </span>
                    <span className="text-white_A700 font-prompt lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      ){" "}
                    </span>
                    <span className="text-white_A700 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                      456 88
                    </span>
                  </Text>
                </Row>
                <div className="bg-white_A700 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                <Img
                  src="images/img_facebook.svg"
                  className="common-pointer lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[1%]"
                  onClick={handleNavigate5}
                  alt="facebook"
                />
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] calendar"
                  onClick={handleNavigate}
                  alt="twitter"
                />
                <Img
                  src="images/img_camera.svg"
                  className="lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] calendar"
                  alt="camera"
                />
                <Img
                  src="images/img_linkedin.svg"
                  className="lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mr-[28px] xl:mr-[36px] 2xl:mr-[40px] 3xl:mr-[48px] calendar"
                  alt="linkedin"
                />
              </Row>
            </header>
          </Stack>
        </Stack>
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
              <Stack className="lg:h-[175px] xl:h-[219px] 2xl:h-[246px] 3xl:h-[295px] w-[23%]">
                <Column className="absolute bg-white_A700 bottom-[0] justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius7 shadow-bs2 w-[100%]">
                  <Text
                    className="font-medium lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] text-gray_900 w-[auto] columnprivatecottage"
                    variant="body4"
                  >
                    Private Cottages
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-gray_800 w-[83%] columnprivatecottage"
                    variant="body9"
                  >
                    Sit amet consece adipiscing
                    <br />
                    donec et fusce tellus
                  </Text>
                  <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%] columnprivatecottage" />
                  <Row className="items-start mr-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[42%] columnprivatecottage">
                    <Text className="Link7" variant="body11">
                      read more
                    </Text>
                    <Img
                      src="images/img_arrowright_20X20.svg"
                      className="arrowright_Three"
                      alt="arrowright"
                    />
                  </Row>
                </Column>
                <Img
                  src="images/img_cut_100X100.svg"
                  className="absolute lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[12%] top-[0] lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                  alt="cut"
                />
              </Stack>
              <Stack className="lg:h-[175px] xl:h-[219px] 2xl:h-[246px] 3xl:h-[295px] w-[23%]">
                <Column className="absolute bg-gray_900 bottom-[0] items-center justify-start rounded-radius7 shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group986.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lg:mt-[36px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] text-white_A700 w-[auto] columnprivatecottage"
                      variant="body4"
                    >
                      Tents on Rent
                    </Text>
                    <Text
                      className="font-light leading-[175.00%] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-white_A700 w-[83%] columnprivatecottage"
                      variant="body9"
                    >
                      Sit amet consece adipiscing
                      <br />
                      donec et fusce tellus
                    </Text>
                    <Line className="bg-white_A700_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%] columnprivatecottage" />
                    <Row className="items-start mr-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[42%] columnprivatecottage">
                      <Text
                        className="font-medium mt-[2px] text-light_green_700 uppercase w-[auto]"
                        variant="body11"
                      >
                        read more
                      </Text>
                      <Img
                        src="images/img_forward_3.svg"
                        className="arrowright_Three"
                        alt="forward"
                      />
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-yellow_900 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[12%] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 top-[0] lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
                  <Img
                    src="images/img_map.svg"
                    className="absolute lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] inset-[0] justify-center m-[auto] lg:w-[30px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[52px]"
                    alt="map"
                  />
                </Stack>
              </Stack>
              <List
                className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-2 min-h-[auto] w-[49%]"
                orientation="horizontal"
              >
                <Stack className="lg:h-[175px] xl:h-[219px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Column className="absolute bg-white_A700 bottom-[0] justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius7 shadow-bs2 w-[100%]">
                    <Text
                      className="font-medium lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] text-gray_900 w-[auto] columnprivatecottage"
                      variant="body4"
                    >
                      Summer Camp
                    </Text>
                    <Text
                      className="font-light leading-[175.00%] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-gray_800 w-[83%] columnprivatecottage"
                      variant="body9"
                    >
                      Sit amet consece adipiscing
                      <br />
                      donec et fusce tellus
                    </Text>
                    <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%] columnprivatecottage" />
                    <Row className="items-start mr-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[42%] columnprivatecottage">
                      <Text className="Link7" variant="body11">
                        read more
                      </Text>
                      <Img
                        src="images/img_arrowright_20X20.svg"
                        className="arrowright_Three"
                        alt="arrowright One"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_icon_100X100.svg"
                    className="absolute lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[12%] top-[0] lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    alt="Icon Five"
                  />
                </Stack>
                <Stack className="lg:h-[175px] xl:h-[219px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Column className="absolute bg-white_A700 bottom-[0] justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius7 shadow-bs2 w-[100%]">
                    <Text
                      className="font-medium lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] text-gray_900 w-[auto] columnprivatecottage"
                      variant="body4"
                    >
                      Wood Fire
                    </Text>
                    <Text
                      className="font-light leading-[175.00%] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_800 w-[83%] columnprivatecottage"
                      variant="body9"
                    >
                      Sit amet consece adipiscing
                      <br />
                      donec et fusce tellus
                    </Text>
                    <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%] columnprivatecottage" />
                    <Row className="items-start mr-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[42%] columnprivatecottage">
                      <Text className="Link7" variant="body11">
                        read more
                      </Text>
                      <Img
                        src="images/img_arrowright_20X20.svg"
                        className="arrowright_Three"
                        alt="arrowright Two"
                      />
                    </Row>
                  </Column>
                  <Stack className="absolute bg-light_green_700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[12%] lg:px-[11px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 top-[0] lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
                    <Img
                      src="images/img_fire_56X56.svg"
                      className="absolute lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] inset-[0] justify-center m-[auto] lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="fire"
                    />
                  </Stack>
                </Stack>
              </List>
            </Row>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Row className="items-start justify-between w-[100%]">
            <Stack className="lg:h-[315px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[532px] w-[62%]">
              <div className="absolute bg-gray_400 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] left-[0] top-[0] w-[92%]"></div>
              <Column className="absolute bg-white_A700 bottom-[0] justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] right-[0] rounded-radius12 shadow-bs2 w-[52%]">
                <Text
                  className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-gray_900 w-[auto]"
                  variant="body6"
                >
                  We Have a Awesome Team
                </Text>
                <Stack className="lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] mb-[3px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[95%]">
                  <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[94%]">
                    <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[90%]">
                      <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[89%]">
                        <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[88%]">
                          <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[87%]">
                            <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[85%]">
                              <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[82%]">
                                <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[78%]">
                                  <Stack className="absolute lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] left-[0] w-[71%]">
                                    <div className="absolute bg-bluegray_100 left-[0] rounded-radius50 campingtentOne_One"></div>
                                    <div className="absolute bg-gray_500 right-[0] rounded-radius50 campingtentOne_One"></div>
                                  </Stack>
                                  <div className="absolute bg-gray_700 right-[0] rounded-radius50 campingtentOne_One"></div>
                                </Stack>
                                <div className="absolute bg-gray_402 right-[0] rounded-radius50 campingtentOne_One"></div>
                              </Stack>
                              <div className="absolute bg-gray_601 right-[0] rounded-radius50 campingtentOne_One"></div>
                            </Stack>
                            <div className="absolute bg-gray_403 right-[0] rounded-radius50 campingtentOne_One"></div>
                          </Stack>
                          <div className="absolute bg-gray_501 right-[0] rounded-radius50 campingtentOne_One"></div>
                        </Stack>
                        <div className="absolute bg-bluegray_101 right-[0] rounded-radius50 campingtentOne_One"></div>
                      </Stack>
                      <div className="absolute bg-gray_502 right-[0] rounded-radius50 campingtentOne_One"></div>
                    </Stack>
                    <div className="absolute bg-gray_602 right-[0] rounded-radius50 campingtentOne_One"></div>
                  </Stack>
                  <Button
                    className="absolute flex items-center justify-center right-[0] rounded-radius50 campingtentOne_One"
                    size="mdIcn"
                    variant="icbFillYellow900"
                  >
                    <Img
                      src="images/img_plus_45X45.svg"
                      className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                      alt="plus"
                    />
                  </Button>
                </Stack>
              </Column>
            </Stack>
            <Column className="justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[36%]">
              <Column className="justify-start w-[97%]">
                <Row className="items-center w-[56%]">
                  <Text className="Seven" variant="body6">
                    02
                  </Text>
                  <Line className="bg-gray_800 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[34%]" />
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
              <Text className="Link12" variant="body9">
                Sit amet consectetur adipiscing elit. At donec etfusce orci
                tellus aliquam vitae. Metus nibh laoreet velit diam enimusto
                <br />
                sagittis fringilla ulputatey honcus justo, cras sed
              </Text>
              <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[90%]">
                <Button
                  className="flex items-center justify-center text-center w-[46%]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="bg-light_green_700 text-center lg:w-[6px] lg:mr-[3px] xl:w-[8px] xl:mr-[4px] 2xl:w-[9px] 2xl:mr-[5px] 3xl:w-[10px] 3xl:mr-[6px] rounded-radius125"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder25"
                  size="lg"
                  variant="OutlineLightgreen70033"
                >
                  <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                    Tent Camping
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[11px] 3xl:ml-[13px] flex items-center justify-center lg:ml-[8px] text-center w-[50%] xl:ml-[10px]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="bg-light_green_700 text-center lg:w-[6px] lg:mr-[3px] xl:w-[8px] xl:mr-[4px] 2xl:w-[9px] 2xl:mr-[5px] 3xl:w-[10px] 3xl:mr-[6px] rounded-radius125"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder25"
                  size="lg"
                  variant="OutlineLightgreen70033"
                >
                  <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                    Family Camping
                  </div>
                </Button>
              </Row>
              <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[91%]">
                <Button
                  className="flex items-center justify-center text-center w-[51%]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="bg-light_green_700 text-center lg:w-[6px] lg:mr-[3px] xl:w-[8px] xl:mr-[4px] 2xl:w-[9px] 2xl:mr-[5px] 3xl:w-[10px] 3xl:mr-[6px] rounded-radius125"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder25"
                  size="lg"
                  variant="OutlineLightgreen70033"
                >
                  <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                    Couple Camping
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[11px] 3xl:ml-[13px] flex items-center justify-center lg:ml-[8px] text-center w-[45%] xl:ml-[10px]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="bg-light_green_700 text-center lg:w-[6px] lg:mr-[3px] xl:w-[8px] xl:mr-[4px] 2xl:w-[9px] 2xl:mr-[5px] 3xl:w-[10px] 3xl:mr-[6px] rounded-radius125"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder25"
                  size="lg"
                  variant="OutlineLightgreen70033"
                >
                  <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                    Wid Camping
                  </div>
                </Button>
              </Row>
            </Column>
          </Row>
        </Column>
        <Column className="bg-gray_400 items-end justify-end lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:p-[37px] xl:p-[46px] 2xl:p-[52px] 3xl:p-[63px] w-[93%]">
          <Column className="bg-gray_50 justify-center 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[98px] lg:p-[28px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] rounded-radius14 w-[29%]">
            <Text
              className="font-medium leading-[120.00%] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_900 w-[98%]"
              as="h5"
              variant="h5"
            >
              Discover Luxury Hotel and Restaurant
              <br />
              Food Menus
            </Text>
            <Line className="bg-light_green_700 h-[5.01px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[16%]" />
            <Text
              className="font-light leading-[175.00%] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-gray_800 w-[96%]"
              variant="body9"
            >
              Sit amet consectetur adipiscing elit donec etfusce orci tellus
              aliquam vitae. Metus nibhey
              <br />
              laoreet velit diam enimusto
            </Text>
            <Button
              className="2xl:mb-[5px] 2xl:ml-[5px] 2xl:mt-[30px] 3xl:mb-[6px] 3xl:ml-[6px] 3xl:mt-[36px] flex items-center justify-center lg:mb-[3px] lg:ml-[3px] lg:mt-[21px] text-center w-[53%] xl:mb-[4px] xl:ml-[4px] xl:mt-[26px]"
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
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[36%]">
              <Row className="items-start justify-center w-[67%]">
                <Text className="One_One" variant="body6">
                  03
                </Text>
                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[27%]" />
                <Text className="EnjoyAdventure" variant="body6">
                  Why Choose Us
                </Text>
              </Row>
              <Text className="Title" as="h3" variant="h3">
                <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  Traveler Why Choose
                  <br />
                </span>
                <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  Our Tent Camping
                </span>
              </Text>
            </Column>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                <Column className="bg-white_A700 items-center lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] shadow-bs2 w-[49%]">
                  <Row className="items-start mb-[1px] w-[90%]">
                    <Img
                      src="images/img_icon_1.svg"
                      className="lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] mt-[1px] lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                      alt="Icon Six"
                    />
                    <Column className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[77%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Facilities/Prices
                      </Text>
                      <Text className="description_Five" variant="body9">
                        Undertakes laborious physical exercise except to
                        <br />
                        obtain some advantage has any right
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-white_A700 border border-gray_900_19 border-solid items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius7 w-[49%]">
                  <Row className="items-center w-[90%]">
                    <Button
                      className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] items-center justify-center rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                      size="mdIcn"
                      variant="icbFillLightgreen70019"
                    >
                      <Img
                        src="images/img_cut_85X85.svg"
                        className="flex items-center justify-center lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px]"
                        alt="cut One"
                      />
                    </Button>
                    <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[77%]">
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
              </Row>
              <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                <Column className="bg-white_A700 border border-gray_900_19 border-solid items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius7 w-[49%]">
                  <Row className="items-center w-[91%]">
                    <Img
                      src="images/img_computer_1.svg"
                      className="lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                      alt="computer"
                    />
                    <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[77%]">
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
                <Column className="bg-white_A700 border border-gray_900_19 border-solid items-center lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius7 w-[49%]">
                  <Row className="items-center mb-[1px] w-[90%]">
                    <Button
                      className="flex lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] items-center justify-center mt-[1px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                      size="mdIcn"
                      variant="icbFillLightgreen70019"
                    >
                      <Img
                        src="images/img_map_85X85.svg"
                        className="flex items-center justify-center lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px]"
                        alt="map One"
                      />
                    </Button>
                    <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[77%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Adventure Park
                        <br />
                      </Text>
                      <Text className="description_Five" variant="body9">
                        Quis autem vel eum sure reprehenderit voluptate
                        <br />
                        velit esse quam molestiae consequatur
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </List>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Row className="items-center justify-between w-[100%]">
            <div className="bg-gray_400 lg:h-[267px] xl:h-[334px] 2xl:h-[376px] 3xl:h-[451px] w-[49%]"></div>
            <Column className="w-[43%]">
              <Column className="justify-start w-[97%]">
                <Row className="items-start w-[55%]">
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
                    Explore Better Camping
                    <br />
                  </span>
                  <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    to Better Acceptions
                  </span>
                </Text>
              </Column>
              <Text className="Link12" variant="body9">
                Sit amet consectetur adipiscing elit. Venenatis amet ut elemen
                tumsem
                <br />
                nec ipsum, tincidunt risus maecenas. Ut volutpat quis mollis
                neque nunc
                <br />
                aliquet et. Condimentum habitant arcu malesuada odio luct
                ultrices. A felis, ipsum sit tempor praesent eu vitae tellus
                porttitor
              </Text>
              <Button
                className="2xl:mt-[37px] 3xl:mt-[45px] flex items-center justify-center lg:mt-[26px] text-center w-[36%] xl:mt-[33px]"
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
            </Column>
          </Row>
        </Column>
        <Row className="items-center lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[93%]">
          <div className="bg-gray_400 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] w-[24%]"></div>
          <Column className="bg-gray_400 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[24%]">
            <Column className="bg-gray_900_3f justify-center lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[45px] w-[100%]">
              <Button
                className="font-medium lg:mt-[189px] xl:mt-[236px] 2xl:mt-[266px] 3xl:mt-[319px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[37%]"
                size="md"
                variant="FillWhiteA700"
              >
                Tree House
              </Button>
              <Button
                className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[61%]"
                size="md"
                variant="FillLightgreen700"
              >
                Couple Camping
              </Button>
            </Column>
          </Column>
          <div className="bg-gray_400 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[24%]"></div>
          <div className="bg-gray_400 lg:h-[294px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[496px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[24%]"></div>
        </Row>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[81%]">
          <Column className="items-center justify-start w-[29%]">
            <Row className="items-center justify-center w-[60%]">
              <Text className="Seven" variant="body6">
                05
              </Text>
              <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[32%]" />
              <Text className="Testimonils" variant="body6">
                Testimonils
              </Text>
            </Row>
            <Text className="Title6" as="h3" variant="h3">
              <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                What Our Client Say
                <br />
              </span>
              <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                About Us
              </span>
            </Text>
          </Column>
          <Stack className="lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
            <Img
              src="images/img_navigation_gray_900.svg"
              className="absolute lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] inset-y-[39%] w-[100%]"
              alt="Navigation"
            />
            <Row className="absolute inset-x-[9%] items-center justify-between w-[83%]">
              <Line className="bg-gray_900_19 lg:h-[150px] xl:h-[187px] 2xl:h-[211px] 3xl:h-[253px] w-[1px]" />
              <Stack className="lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] w-[72%]">
                <div className="absolute bg-bluegray_100 lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] left-[0] rounded-bl-[150px] rounded-br-[150px] rounded-tl-[150px] rounded-tr-[30px] w-[32%]"></div>
                <Stack className="absolute lg:h-[106px] xl:h-[133px] 2xl:h-[149px] 3xl:h-[179px] right-[0] top-[7%] w-[60%]">
                  <Text
                    className="absolute font-semibold left-[0] text-gray_900 top-[4%] w-[auto]"
                    variant="body2"
                  >
                    Malcolm K. Monks
                  </Text>
                  <Text
                    className="absolute font-light left-[0] text-gray_800 top-[23%] w-[auto]"
                    variant="body8"
                  >
                    CEO & Founder
                  </Text>
                  <Stack className="absolute lg:h-[106px] xl:h-[133px] 2xl:h-[149px] 3xl:h-[179px] w-[100%]">
                    <Img
                      src="images/img_icon_gray_900.svg"
                      className="absolute xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] right-[1%] top-[0] w-[36%]"
                      alt="Icon Seven"
                    />
                    <Text
                      className="absolute bottom-[0] font-light leading-[165.00%] text-gray_800 w-[100%]"
                      variant="body4"
                    >
                      Sit amet consectetur adipiscing congue pose <br />
                      habit ante dignissim faucibus tincidunt vulputate
                      <br />
                      ullamcorper mattis quisque esta sidiculus
                    </Text>
                  </Stack>
                </Stack>
                <Img
                  src="images/img_star.svg"
                  className="absolute bottom-[11%] lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] left-[40%] w-[15%]"
                  alt="Star"
                />
              </Stack>
              <Line className="bg-gray_900_19 lg:h-[150px] xl:h-[187px] 2xl:h-[211px] 3xl:h-[253px] w-[1px]" />
            </Row>
          </Stack>
          <Img
            src="images/img_overflowmenu.svg"
            className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[4%]"
            alt="overflowmenu"
          />
        </Column>
        <Stack className="lg:h-[2380px] xl:h-[2977px] 2xl:h-[3349px] 3xl:h-[4018px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Stack className="absolute lg:h-[2380px] xl:h-[2977px] 2xl:h-[3349px] 3xl:h-[4018px] left-[4%] w-[96%]">
            <Stack className="absolute lg:h-[1007px] xl:h-[1259px] 2xl:h-[1417px] 3xl:h-[1700px] top-[0] w-[100%]">
              <div className="absolute bg-light_green_700 lg:h-[160px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[270px] inset-x-[0] mx-[auto] top-[0] w-[96%]"></div>
              <Img
                src="images/img_image_1848X1005.png"
                className="absolute xl:h-[1233px] 2xl:h-[1387px] 3xl:h-[1665px] lg:h-[986px] inset-y-[0] my-[auto] right-[0] w-[54%]"
                alt="Image Seventeen"
              />
            </Stack>
            <Stack className="absolute lg:h-[2354px] xl:h-[2945px] 2xl:h-[3313px] 3xl:h-[3974px] inset-y-[0] my-[auto] right-[0] w-[95%]">
              <Img
                src="images/img_image_1839X1751.png"
                className="absolute xl:h-[1227px] 2xl:h-[1381px] 3xl:h-[1657px] lg:h-[981px] top-[0] w-[100%]"
                alt="Image Eighteen"
              />
              <Column className="absolute items-center justify-start left-[8%] top-[0] w-[74%]">
                <Row className="items-center w-[100%]">
                  <Column className="mb-[1px] w-[12%]">
                    <Img
                      src="images/img_cut_65X64.svg"
                      className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] ml-[1px] w-[42%]"
                      alt="cut Two"
                    />
                    <Text
                      className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      365k+
                    </Text>
                    <Text className="HappyTraveler2" variant="body8">
                      Happy Traveler
                    </Text>
                  </Column>
                  <Column className="lg:ml-[128px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[217px] w-[8%]">
                    <Img
                      src="images/img_map_65X65.svg"
                      className="cut_One"
                      alt="map Two"
                    />
                    <Text
                      className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      135+
                    </Text>
                    <Text className="HappyTraveler2" variant="body8">
                      Tent Sites
                    </Text>
                  </Column>
                  <Column className="lg:ml-[153px] xl:ml-[191px] 2xl:ml-[215px] 3xl:ml-[258px] w-[9%]">
                    <Img
                      src="images/img_group_65X65.svg"
                      className="cut_One"
                      alt="Group"
                    />
                    <Text
                      className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      458+
                    </Text>
                    <Text
                      className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic text-white_A700 w-[auto]"
                      variant="body8"
                    >
                      Global Branch
                    </Text>
                  </Column>
                  <Column className="lg:ml-[126px] xl:ml-[158px] 2xl:ml-[177px] 3xl:ml-[213px] w-[11%]">
                    <Img
                      src="images/img_computer_65X65.svg"
                      className="cut_One"
                      alt="computer One"
                    />
                    <Text
                      className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      985+
                    </Text>
                    <Text className="HappyTraveler2" variant="body8">
                      Family Camping
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center justify-start xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[140px] lg:mt-[83px] w-[100%]">
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
                    <List
                      className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
                      orientation="horizontal"
                    >
                      <Column
                        className="bg-cover bg-repeat hover:cursor-pointer justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] hover:shadow-bs3 hover:w-[100%] w-[100%]"
                        style={{ backgroundImage: "url('images/img_2.svg')" }}
                      >
                        <Button
                          className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[36%]"
                          shape="CircleBorder20"
                          size="md"
                          variant="FillLightgreen700"
                        >
                          Camping
                        </Button>
                        <Text
                          className="leading-[130.00%] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-gray_900 w-[85%]"
                          variant="body3"
                        >
                          It’s Was Time December
                          <br />
                          2022 Desktop Edition
                        </Text>
                        <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[60%]">
                          <div className="bg-bluegray_100 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                          <Text className="Avatar1" variant="body8">
                            William H. Jackson
                          </Text>
                        </Row>
                        <Row className="items-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[90px] w-[48%]">
                          <Img
                            src="images/img_calendar.svg"
                            className="calendar_Two"
                            alt="calendar Two"
                          />
                          <Text className="date1" variant="body9">
                            November 23,2022
                          </Text>
                        </Row>
                        <Line className="bg-gray_900_19 h-[1px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[86%]" />
                        <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[30%]">
                          <Text className="Link2" variant="body11">
                            read more
                          </Text>
                          <Img
                            src="images/img_arrowright_2.svg"
                            className="arrowright_Three"
                            alt="arrowright Three"
                          />
                        </Row>
                      </Column>
                      <Column
                        className="bg-cover bg-repeat hover:cursor-pointer items-center justify-start hover:shadow-bs3 hover:w-[100%] w-[100%]"
                        style={{ backgroundImage: "url('images/img_2.svg')" }}
                      >
                        <Column className="bg-gray_900_a5 justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius7 w-[100%]">
                          <Button
                            className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[39%]"
                            shape="CircleBorder20"
                            size="md"
                            variant="FillYellow900"
                          >
                            Adventure
                          </Button>
                          <Text
                            className="leading-[130.00%] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-white_A700 w-[83%]"
                            variant="body3"
                          >
                            Building Dynamic Head
                            <br />
                            With Inter Observer
                          </Text>
                          <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[53%]">
                            <div className="bg-bluegray_100 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                            <Text
                              className="font-medium xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] text-white_A700 w-[auto]"
                              variant="body8"
                            >
                              James D. Garcia
                            </Text>
                          </Row>
                          <Row className="items-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[90px] w-[48%]">
                            <Img
                              src="images/img_calendar_1.svg"
                              className="calendar_Two"
                              alt="calendar Three"
                            />
                            <Text
                              className="font-light lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] text-white_A700 uppercase w-[auto]"
                              variant="body9"
                            >
                              November 23,2022
                            </Text>
                          </Row>
                          <Line className="bg-white_A700_4c h-[1px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[86%]" />
                          <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[30%]">
                            <Text className="Link1" variant="body11">
                              read more
                            </Text>
                            <Img
                              src="images/img_forward.svg"
                              className="arrowright_Three"
                              alt="forward One"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column
                        className="bg-cover bg-repeat hover:cursor-pointer justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] hover:shadow-bs3 hover:w-[100%] w-[100%]"
                        style={{ backgroundImage: "url('images/img_2.svg')" }}
                      >
                        <Button
                          className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[36%]"
                          shape="CircleBorder20"
                          size="md"
                          variant="FillLightgreen700"
                        >
                          Woodfire
                        </Button>
                        <Text
                          className="leading-[130.00%] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-gray_900 w-[86%]"
                          variant="body3"
                        >
                          Rise Of Design Thinking
                          <br />
                          Solving Strategy
                        </Text>
                        <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[58%]">
                          <div className="bg-bluegray_100 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                          <Text className="Avatar1" variant="body8">
                            Dale V. Hornback
                          </Text>
                        </Row>
                        <Row className="items-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[90px] w-[48%]">
                          <Img
                            src="images/img_calendar.svg"
                            className="calendar_Two"
                            alt="calendar Four"
                          />
                          <Text className="date1" variant="body9">
                            November 23,2022
                          </Text>
                        </Row>
                        <Line className="bg-gray_900_19 h-[1px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[86%]" />
                        <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[30%]">
                          <Text className="Link2" variant="body11">
                            read more
                          </Text>
                          <Img
                            src="images/img_arrowright_2.svg"
                            className="arrowright_Three"
                            alt="arrowright Four"
                          />
                        </Row>
                      </Column>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Stack>
          </Stack>
          <footer className="absolute bg-gray_900 top-[25%] w-[100%]">
            <Column className="justify-start w-[78%]">
              <Column className="items-center justify-start w-[86%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="rowsubscribeourn" as="h3" variant="h3">
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
                        alt="mail One"
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
              <Row className="items-start ml-[1px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] w-[86%]">
                <Column className="justify-start w-[21%]">
                  <Text
                    className="font-semibold lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    About
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_300 w-[100%]"
                    variant="body9"
                  >
                    Sit amet consectetur adipiscinelit
                    <br />
                    Semet aliquam enimdeassa ornare
                    <br />
                    vulputate neque secursun
                  </Text>
                  <Row className="items-start ml-[3px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[78%]">
                    <Img
                      src="images/img_campingtent1_3.svg"
                      className="campingtentOne_One"
                      alt="campingtentOne"
                    />
                    <Text className="Logo" as="h4" variant="h4">
                      Vedhak
                    </Text>
                  </Row>
                </Column>
                <Column className="justify-start xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[152px] lg:ml-[90px] mt-[1px] w-[13%]">
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
                <Column className="justify-start xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[152px] lg:ml-[90px] mt-[2px] w-[10%]">
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
                <Column className="items-center justify-start xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[152px] lg:ml-[90px] mt-[1px] w-[18%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-semibold text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Location
                    </Text>
                    <Row className="items-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]">
                      <Img
                        src="images/img_location_1.svg"
                        className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[7%]"
                        alt="location Two"
                      />
                      <Text
                        className="font-light leading-[165.00%] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-gray_300 w-[88%]"
                        variant="body9"
                      >
                        55 Main Street, 2nd-Block
                        <br />
                        melbourne, Australia
                      </Text>
                    </Row>
                    <Text className="Contact" variant="body5">
                      Contact
                    </Text>
                    <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[79%]">
                      <Img
                        src="images/img_mail_12X16.svg"
                        className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] w-[9%]"
                        alt="mail Two"
                      />
                      <Text
                        className="font-light lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-gray_300 w-[auto]"
                        variant="body9"
                      >
                        support@gmail.com
                      </Text>
                    </Row>
                    <Row className="items-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[70%]">
                      <Img
                        src="images/img_call_16X16.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="call One"
                      />
                      <Text
                        className="font-light 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-white_A700 w-[auto]"
                        variant="body9"
                      >
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
                    </Row>
                  </Column>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Line className="bg-white_A700_19 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[86%]" />
                <Button
                  className="flex lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] items-center justify-center rounded-radius50 lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                  size="mdIcn"
                  variant="icbFillYellow900"
                >
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="flex items-center justify-center"
                    alt="arrowup"
                  />
                </Button>
              </Row>
              <Row className="items-start ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[86%]">
                <Text className="language_Two1" variant="body9">
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
                <Img
                  src="images/img_social_gray_401.svg"
                  className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mb-[1px] lg:ml-[137px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] w-[13%]"
                  alt="Social"
                />
                <Text
                  className="font-light lg:ml-[133px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[225px] mt-[2px] text-gray_300 w-[auto]"
                  variant="body9"
                >
                  Setting & privacy Faqs Support
                </Text>
              </Row>
            </Column>
          </footer>
        </Stack>
      </Column>
    </>
  );
};

export default HomeThreePage;
