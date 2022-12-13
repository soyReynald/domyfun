import React from "react";

import { Column, Row, Img, Text, Stack, Button, Line, Grid } from "components";
import Footer1 from "components/Footer/Footer1";

const GalleryPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center justify-start w-[93%]">
          <header className="w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-center w-[92%]">
                <Row className="items-center justify-between w-[93%]">
                  <Row className="items-start w-[14%]">
                    <Img
                      src="images/img_campingtent1_20.svg"
                      className="campingtentOne_One"
                      alt="campingtentOne"
                    />
                    <Text className="Logo1" as="h4" variant="h4">
                      Vedhak
                    </Text>
                  </Row>
                  <Row className="items-center justify-between w-[73%]">
                    <Row className="items-start justify-between w-[70%]">
                      <Stack className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[92%]">
                        <Text
                          className="absolute font-medium text-gray_900 w-[auto]"
                          variant="body6"
                        >
                          <span className="text-gray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            Home Accommodation
                          </span>
                          <span className="text-bluegray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                          </span>
                          <span className="text-gray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            Gallery
                          </span>
                          <span className="text-bluegray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                          </span>
                          <span className="text-gray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            Blog
                          </span>
                          <span className="text-bluegray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                          </span>
                          <span className="text-gray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            Pages
                          </span>
                          <span className="text-bluegray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                          </span>
                          <span className="text-gray_900 font-prompt lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            Contact
                          </span>
                        </Text>
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[9%] my-[auto] w-[75%]">
                          <Img
                            src="images/img_icon_black_900.svg"
                            className="Icon"
                            alt="Icon"
                          />
                          <Img
                            src="images/img_icon_black_900.svg"
                            className="Icon_One"
                            alt="Icon One"
                          />
                          <Img
                            src="images/img_icon_black_900.svg"
                            className="Icon_Two"
                            alt="Icon Two"
                          />
                          <Img
                            src="images/img_icon_black_900.svg"
                            className="Icon_Three"
                            alt="Icon Three"
                          />
                          <Img
                            src="images/img_icon_black_900.svg"
                            className="Icon_Four"
                            alt="Icon Four"
                          />
                        </Row>
                      </Stack>
                      <Img
                        src="images/img_search.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="search"
                      />
                    </Row>
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
                      variant="FillLightgreen700"
                    >
                      <div className="bg-transparent font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
                        book now
                      </div>
                    </Button>
                  </Row>
                </Row>
                <Row className="items-center justify-evenly lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[5%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body6"
                  >
                    English
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="arrowdown"
                    alt="arrowdown"
                  />
                </Row>
              </Row>
              <Line className="bg-gray_900_19 h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]" />
            </Column>
          </header>
          <Column className="items-center justify-end 3xl:mt-[116px] lg:mt-[68px] xl:mt-[86px] 2xl:mt-[96px] w-[17%]">
            <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
              Gallery
            </Text>
            <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[72%]">
              <Img
                src="images/img_arrowright_gray_900.svg"
                className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] left-[43%] top-[4%] w-[5%]"
                alt="arrowright"
              />
              <Text
                className="absolute font-medium text-gray_900 w-[auto]"
                variant="body4"
              >
                <span className="text-gray_900 font-prompt lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Home{" "}
                </span>
                <span className="text-light_green_700 font-prompt lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Gallery
                </span>
              </Text>
            </Stack>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Text
                className="font-medium text-gray_900 w-[auto]"
                variant="body8"
              >
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Show All Tent Camping
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Couple Cabin
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Family Tent
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Campfiring
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                </span>
                <span className="text-gray_900 font-prompt lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Luxury Cabin
                </span>
              </Text>
              <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[100%]">
                <Line className="absolute bg-gray_900_19 h-[2px] inset-y-[25%] w-[100%]" />
                <Line className="absolute bg-light_green_700 h-[4px] left-[14%] w-[12%]" />
              </Stack>
            </Column>
            <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Column className="w-[32%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[60%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Luxury Double Cabin
                  </Text>
                  <Text className="test_0001234561" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Column className="bg-gray_900_66 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] items-center justify-start xl:px-[113px] 2xl:px-[127px] 3xl:px-[153px] lg:px-[90px] w-[100%]">
                  <Button
                    className="flex lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[63px]"
                    size="xlIcn"
                    variant="icbFillYellow900"
                  >
                    <Img
                      src="images/img_icon_85X85.svg"
                      className="flex items-center justify-center lg:h-[8px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                      alt="Icon Five"
                    />
                  </Button>
                </Column>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[61%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Classic Tent Camping
                  </Text>
                  <Text className="test_0001234561" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[48%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Couple Camping
                  </Text>
                  <Text className="test_0001234561" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
            </Row>
            <Grid className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[34%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Safari Cabin
                  </Text>
                  <Text className="CEOFounder" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[100%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[69%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Reto Camper Mountains
                  </Text>
                  <Text className="Author" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[100%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[60%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Luxury Double Cabin
                  </Text>
                  <Text className="test_0001234561" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[100%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[60%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Tree House Camping
                  </Text>
                  <Text className="Author" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[100%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[59%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Family Tent Camping
                  </Text>
                  <Text className="test_0001234561" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[100%]">
                <div className="bg-gray_800 lg:h-[219px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[370px] lg:w-[218px] xl:w-[273px] 2xl:w-[307px] 3xl:w-[369px]"></div>
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[61%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Single Tent Camping
                  </Text>
                  <Text className="test_0001234561" variant="body9">
                    Travel & Camping
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Footer1 className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
      </Column>
    </>
  );
};

export default GalleryPage;
