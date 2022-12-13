import React from "react";

import {
  Column,
  Text,
  Stack,
  Img,
  Row,
  Line,
  List,
  SeekBar,
  Button,
} from "components";
import Header from "components/Header/Header";

const AboutUsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Header className="w-[85%]" />
            <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[108px] 2xl:p-[122px] 3xl:p-[146px] lg:p-[86px] w-[100%]">
              <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[25%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    About Us
                  </Text>
                  <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[61%]">
                    <Img
                      src="images/img_arrowright_white_A700_16X10.svg"
                      className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] inset-y-[0] left-[39%] my-[auto] w-[4%]"
                      alt="arrowright"
                    />
                    <Text className="language8" variant="body4">
                      Home About Us
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end justify-between w-[98%]">
                <Column className="justify-start w-[35%]">
                  <Row className="items-center w-[55%]">
                    <Text className="Seven" variant="body6">
                      01
                    </Text>
                    <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[35%]" />
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
                  className="font-light leading-[175.00%] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-gray_800 w-[48%]"
                  variant="body9"
                >
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate volutpat bibendum imperdiet sit fermentum non. Vel
                  sed neque, fringilla facilisi neque
                  <br />
                  fusce faucibus erat. Tincidunt egestas morbi urna urna, at mi.
                  Velit tincidunt
                  <br />
                  pellentesque urna, leo lorem cursus lacinia. Amet viverra
                  habitasse euismod
                  <br />
                  scelerisque faucibus porttitor miey
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                <List
                  className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 min-h-[auto] w-[74%]"
                  orientation="horizontal"
                >
                  <Column className="bg-yellow_50 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_globe_100X100.svg"
                      className="globe4"
                      alt="globe"
                    />
                    <Text className="columnglobe" variant="body5">
                      Private Cottages
                    </Text>
                    <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[85%]">
                      <Text className="columnquisquevulputa" variant="body9">
                        Quisque vulputate amtacipe
                        <br />
                        aliuam diam sitis etia
                      </Text>
                      <Line className="bg-black_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                      <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[52%]">
                        <Text className="Link" variant="body11">
                          learn more
                        </Text>
                        <Img
                          src="images/img_arrowright_20X20.svg"
                          className="arrowright_Three"
                          alt="arrowright One"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-light_green_50 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_globe_1.svg"
                      className="globe4"
                      alt="globe One"
                    />
                    <Text className="columnglobe1" variant="body5">
                      Tents On Rent
                    </Text>
                    <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[85%]">
                      <Text className="columnquisquevulputa" variant="body9">
                        Quisque vulputate amtacipe
                        <br />
                        aliuam diam sitis etia
                      </Text>
                      <Line className="bg-black_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                      <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[52%]">
                        <Text className="Link" variant="body11">
                          learn more
                        </Text>
                        <Img
                          src="images/img_arrowright_20X20.svg"
                          className="arrowright_Three"
                          alt="arrowright Two"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-red_50 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_checkmark_100X100.svg"
                      className="globe4"
                      alt="checkmark"
                    />
                    <Text className="columnglobe" variant="body5">
                      Summer Camp
                    </Text>
                    <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[85%]">
                      <Text className="columnquisquevulputa" variant="body9">
                        Quisque vulputate amtacipe
                        <br />
                        aliuam diam sitis etia
                      </Text>
                      <Line className="bg-black_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                      <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[52%]">
                        <Text className="Link" variant="body11">
                          learn more
                        </Text>
                        <Img
                          src="images/img_arrowright_20X20.svg"
                          className="arrowright_Three"
                          alt="arrowright Three"
                        />
                      </Row>
                    </Column>
                  </Column>
                </List>
                <Column className="bg-light_blue_50 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 w-[23%]">
                  <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[42%]">
                    <Stack className="bg-light_blue_500 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:px-[13px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
                      <Img
                        src="images/img_fire_50X50.svg"
                        className="absolute lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] inset-[0] justify-center m-[auto] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                        alt="fire"
                      />
                    </Stack>
                    <Text className="columnglobe1" variant="body5">
                      Wood Fire
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[85%]">
                    <Text className="columnquisquevulputa" variant="body9">
                      Quisque vulputate amtacipe
                      <br />
                      aliuam diam sitis etia
                    </Text>
                    <Line className="bg-black_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[52%]">
                      <Text className="Link" variant="body11">
                        learn more
                      </Text>
                      <Img
                        src="images/img_arrowright_20X20.svg"
                        className="arrowright_Three"
                        alt="arrowright Four"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Stack className="lg:h-[430px] xl:h-[538px] 2xl:h-[605px] 3xl:h-[726px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[96%]">
            <Img
              src="images/img_image_806X1235.png"
              className="absolute lg:h-[430px] xl:h-[538px] 2xl:h-[605px] 3xl:h-[726px] left-[0] w-[67%]"
              alt="Image"
            />
            <Column className="absolute bg-gray_50 h-[max-content] inset-y-[0] items-center justify-end my-[auto] lg:p-[37px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[63px] right-[0] w-[58%]">
              <Column className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[94%]">
                <Column className="justify-start w-[67%]">
                  <Row className="items-center w-[48%]">
                    <Text className="Seven" variant="body6">
                      02
                    </Text>
                    <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[30%]" />
                    <Text className="Testimonils" variant="body6">
                      Who We Are
                    </Text>
                  </Row>
                  <Text className="font-semibold language" as="h3" variant="h3">
                    Company Mission & Vision
                  </Text>
                </Column>
                <Row className="items-center justify-between xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                  <Column className="w-[28%]">
                    <Img
                      src="images/img_checkmark_40X40.svg"
                      className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                      alt="checkmark One"
                    />
                    <Text
                      className="font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_900 w-[auto]"
                      variant="body4"
                    >
                      Our Mission
                    </Text>
                    <Text className="description_One1" variant="body9">
                      Tincidunt egestas morbi urna <br />
                      urnabelit tincidunt pellentesque
                      <br />
                      urnaleorem cursus lacinia. Amet
                      <br />
                      viverrascelerisque faucibus
                    </Text>
                    <Line className="bg-light_green_700 h-[3px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[35%]" />
                  </Column>
                  <Column className="bg-white_A700 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius12 shadow-bs2 w-[35%]">
                    <Column className="justify-start my-[1px] w-[100%]">
                      <Img
                        src="images/img_mail_40X36.svg"
                        className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[15%]"
                        alt="mail"
                      />
                      <Text
                        className="font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_900 w-[auto]"
                        variant="body4"
                      >
                        Our Vision
                      </Text>
                      <Text className="description_One1" variant="body9">
                        Accusamu dignissimos ducimu blanditiis praesentiu
                        voluptatum
                        <br />
                        deleniti atque corruptie dolores
                        <br />
                        molestias excepturie occa
                      </Text>
                      <Line className="bg-light_green_700 h-[3px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[35%]" />
                    </Column>
                  </Column>
                  <Column className="w-[28%]">
                    <Img
                      src="images/img_settings_37X37.svg"
                      className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      alt="settings"
                    />
                    <Text
                      className="font-medium lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] text-gray_900 w-[auto]"
                      variant="body4"
                    >
                      Company Goals
                    </Text>
                    <Text className="description_One1" variant="body9">
                      We denounce with righteous indignation and dislike mewho
                      are so beguiled demoe ralized of the moment blinded
                    </Text>
                    <Line className="bg-light_green_700 h-[3px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[35%]" />
                  </Column>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[38%]">
                <Row className="items-center justify-center w-[61%]">
                  <Text className="Seven" variant="body6">
                    03
                  </Text>
                  <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[28%]" />
                  <Text className="Testimonils" variant="body6">
                    Team Member
                  </Text>
                </Row>
                <Text className="Title6" as="h3" variant="h3">
                  <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Meet Our Professional
                    <br />
                  </span>
                  <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Team Member
                  </span>
                </Text>
              </Column>
              <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Column className="items-center w-[23%]">
                  <div className="bg-gray_800 lg:h-[174px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[293px] rounded-radius12 w-[100%]"></div>
                  <Text
                    className="font-medium columncalendar_one"
                    variant="body5"
                  >
                    Michael F. Jimenez
                  </Text>
                  <Text className="CEOFounder" variant="body9">
                    CEO & Founder
                  </Text>
                </Column>
                <Column className="items-center w-[23%]">
                  <Stack className="bg-gray_900_4c lg:h-[174px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[293px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_social_light_green_700.svg"
                      className="absolute bottom-[0] lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] w-[64%]"
                      alt="Social"
                    />
                  </Stack>
                  <Text
                    className="font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Kenneth I. Phillips
                  </Text>
                  <Text
                    className="font-light lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-gray_800 w-[auto]"
                    variant="body9"
                  >
                    Senior Manager
                  </Text>
                </Column>
                <List
                  className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-2 min-h-[auto] w-[49%]"
                  orientation="horizontal"
                >
                  <Column className="items-center justify-start w-[100%]">
                    <div className="bg-gray_800 lg:h-[174px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[293px] rounded-radius12 w-[100%]"></div>
                    <Text className="font-medium language" variant="body5">
                      Alfonso J. Marrero
                    </Text>
                    <Text className="CEOFounder" variant="body9">
                      Junior Consultant
                    </Text>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <div className="bg-gray_800 lg:h-[174px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[293px] rounded-radius12 w-[100%]"></div>
                    <Text
                      className="font-medium columncalendar_one"
                      variant="body5"
                    >
                      Jackie Y. Hickman
                    </Text>
                    <Text className="CEOFounder" variant="body9">
                      Business Consultant
                    </Text>
                  </Column>
                </List>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="items-end lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:pl-[166px] xl:pl-[208px] 2xl:pl-[234px] 3xl:pl-[280px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Column className="w-[36%]">
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
                  Sit amet consectetur adipiscing elit. Venenatis amet ut et,
                  elementum. In sem nec ipsum, tincidunt risus maecenas. Ut
                  volutpat quis a mollis neque nunc aliquet et. Condimentum
                  habitant arcu malesuada odio luct ultrices. A felis, ipsum sit
                  tempor praesent eu vitae tellus porttitor
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
              <Img
                src="images/img_image_645X945.png"
                className="lg:h-[344px] xl:h-[431px] 2xl:h-[485px] 3xl:h-[581px] w-[59%]"
                alt="Image Four"
              />
            </Row>
          </Column>
        </Column>
        <Column className="items-center w-[100%]">
          <footer className="w-[100%]">
            <Stack className="lg:h-[1963px] xl:h-[2456px] 2xl:h-[2762px] 3xl:h-[3314px] w-[100%]">
              <Stack className="absolute lg:h-[1963px] xl:h-[2456px] 2xl:h-[2762px] 3xl:h-[3314px] w-[100%]">
                <Stack className="absolute xl:h-[1179px] 2xl:h-[1327px] 3xl:h-[1592px] lg:h-[943px] top-[0] w-[100%]">
                  <div className="absolute bg-light_green_700 lg:h-[131px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] top-[0] w-[100%]"></div>
                  <Img
                    src="images/img_group_1738X998.png"
                    className="absolute xl:h-[1160px] 2xl:h-[1305px] 3xl:h-[1566px] lg:h-[927px] inset-y-[0] my-[auto] right-[0] w-[52%]"
                    alt="Group"
                  />
                </Stack>
                <Stack className="absolute lg:h-[1943px] xl:h-[2431px] 2xl:h-[2735px] 3xl:h-[3281px] inset-y-[0] my-[auto] right-[0] w-[84%]">
                  <Img
                    src="images/img_group_1730X1615.png"
                    className="absolute xl:h-[1155px] 2xl:h-[1299px] 3xl:h-[1558px] lg:h-[923px] top-[0] w-[100%]"
                    alt="Group One"
                  />
                  <Column className="absolute items-center justify-start left-[1%] top-[1%] w-[80%]">
                    <Row className="items-center justify-between w-[100%]">
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
                    <Column className="items-center justify-start lg:mt-[347px] xl:mt-[435px] 2xl:mt-[489px] 3xl:mt-[587px] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Line className="bg-gray_900_19 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
                          <Img
                            src="images/img_01.png"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[14%]"
                            alt="One One"
                          />
                          <Img
                            src="images/img_02.png"
                            className="Two_One1"
                            alt="Two One"
                          />
                          <Img
                            src="images/img_03.png"
                            className="Two_One1"
                            alt="Three One"
                          />
                          <Img
                            src="images/img_05.png"
                            className="Two_One1"
                            alt="Five"
                          />
                          <Img
                            src="images/img_04.png"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[12%]"
                            alt="Four One"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Stack>
              </Stack>
              <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[9%] w-[68%]">
                <Row className="items-start justify-between w-[100%]">
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[81px] w-[2%]"
                    alt="overflowmenu"
                  />
                  <Column className="bg-gray_50 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] rounded-radius7 w-[50%]">
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
                </Row>
              </Column>
              <Column className="absolute bg-gray_900 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] top-[28%] w-[100%]">
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
                    <Row className="items-start justify-between lg:mt-[40px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]">
                      <Column className="justify-start mt-[4px] w-[21%]">
                        <Row className="items-start w-[76%]">
                          <Img
                            src="images/img_campingtent1_5.svg"
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
                          src="images/img_social_1.svg"
                          className="Social"
                          alt="Social One"
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
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default AboutUsPage;
