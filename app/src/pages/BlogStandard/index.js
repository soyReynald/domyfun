import React from "react";

import {
  Column,
  Text,
  Stack,
  Img,
  Row,
  Slider,
  PagerIndicator,
  Input,
  Line,
  List,
  Button,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer from "components/Footer/Footer";

const BlogStandardPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Header className="w-[85%]" />
            <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[114px] 2xl:p-[129px] 3xl:p-[154px] lg:p-[91px] w-[100%]">
              <Column className="items-center justify-start mb-[2px] w-[38%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Blog Standard
                  </Text>
                  <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[50%]">
                    <Img
                      src="images/img_arrowright_white_A700_16X10.svg"
                      className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] left-[32%] top-[4%] w-[3%]"
                      alt="arrowright"
                    />
                    <Text className="language8" variant="body4">
                      Home Blog Standard
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="items-start justify-center lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
            <Column className="justify-start w-[66%]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                slidesToShow={4}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-[100%]"
                items={[...Array(24)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Column className="justify-start lg:mx-[13px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[22px] pb-[1px]">
                      <div className="bg-gray_800 lg:h-[267px] xl:h-[334px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]"></div>
                      <Row className="items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[39%]">
                        <Row className="items-start w-[50%]">
                          <Img
                            src="images/img_calendar_12X12.svg"
                            className="calendar_Two"
                            alt="calendar"
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
                      <Text
                        className="leading-[130.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-gray_900 w-[94%]"
                        as="h6"
                        variant="h6"
                      >
                        50 Resources And Tools To Turbocharge Amazon
                        <br />
                        Product Scraper Copywriting Skills
                      </Text>
                      <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[13%]">
                        <Text className="Link2" variant="body11">
                          read more
                        </Text>
                        <Img
                          src="images/img_arrowright_2.svg"
                          className="arrowright_Three"
                          alt="arrowright One"
                        />
                      </Row>
                    </Column>
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
              <Row className="items-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[32%]">
                <Img src="images/img_prev.svg" className="cut_One" alt="Prev" />
                <PagerIndicator
                  className="h-[7px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[max-content]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-yellow_900"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-bluegray_100"
                  sliderRef={sliderRef}
                  selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                  unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                />
                <Img src="images/img_next.svg" className="Next" alt="Next" />
              </Row>
            </Column>
            <Column className="items-center justify-start lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] w-[29%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  variant="body4"
                >
                  Search
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="placeholder:text-gray_800 GroupNine"
                  wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] flex lg:mt-[11px] w-[100%] xl:mt-[14px]"
                  name="GroupEightySix"
                  placeholder="Keywords"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer mr-[2px] lg:w-[9px] lg:h-[10px] lg:ml-[18px] xl:w-[12px] xl:h-[13px] xl:ml-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[31px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#484848"
                      />
                    ) : (
                      <Img
                        src="images/img_search_gray_900.svg"
                        className="cursor-pointer mr-[2px] lg:w-[9px] lg:h-[10px] lg:ml-[18px] xl:w-[12px] xl:h-[13px] xl:ml-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[31px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder5"
                  size="mdSrc"
                  variant="srcOutlineGray90019"
                ></Input>
              </Column>
              <Column className="items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Category
                  </Text>
                  <Line className="bg-gray_900 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                </Column>
                <Input
                  className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-light_green_700 text-light_green_700 w-[100%]"
                  wrapClassName="2xl:mt-[22px] 3xl:mt-[27px] flex lg:mt-[16px] w-[100%] xl:mt-[20px]"
                  name="One"
                  placeholder="Tent Camping"
                  suffix={
                    <Img
                      src="images/img_maximize_15X15.svg"
                      className="lg:w-[6px] lg:h-[7px] lg:ml-[18px] xl:w-[8px] xl:h-[9px] xl:ml-[23px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[26px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[31px] my-[auto]"
                      alt="maximize"
                    />
                  }
                  size="md"
                  variant="UnderLineLightgreen700"
                ></Input>
                <Input
                  className="placeholder:text-gray_800 Two21"
                  wrapClassName="2xl:mt-[18px] 3xl:mt-[21px] flex lg:mt-[12px] w-[100%] xl:mt-[16px]"
                  name="Two"
                  placeholder="Family Camping"
                  suffix={
                    <Img
                      src="images/img_upload.svg"
                      className="lg:w-[6px] lg:h-[7px] lg:ml-[18px] xl:w-[8px] xl:h-[9px] xl:ml-[23px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[26px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[31px] my-[auto]"
                      alt="upload"
                    />
                  }
                  size="md"
                  variant="UnderLineLightgreen700"
                ></Input>
                <Input
                  className="placeholder:text-gray_800 Two21"
                  wrapClassName="2xl:mt-[18px] 3xl:mt-[21px] flex lg:mt-[12px] w-[100%] xl:mt-[16px]"
                  name="Three"
                  placeholder="Wild Camping"
                  suffix={
                    <Img
                      src="images/img_upload.svg"
                      className="lg:w-[6px] lg:h-[7px] lg:ml-[18px] xl:w-[8px] xl:h-[9px] xl:ml-[23px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[26px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[31px] my-[auto]"
                      alt="upload"
                    />
                  }
                  size="md"
                  variant="UnderLineLightgreen700"
                ></Input>
                <Input
                  className="placeholder:text-gray_800 Two21"
                  wrapClassName="2xl:mt-[18px] 3xl:mt-[21px] flex lg:mt-[12px] w-[100%] xl:mt-[16px]"
                  name="Four"
                  placeholder="Campfiring"
                  suffix={
                    <Img
                      src="images/img_upload.svg"
                      className="lg:w-[6px] lg:h-[7px] lg:ml-[18px] xl:w-[8px] xl:h-[9px] xl:ml-[23px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[26px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[31px] my-[auto]"
                      alt="upload"
                    />
                  }
                  size="md"
                  variant="UnderLineLightgreen700"
                ></Input>
                <Input
                  className="placeholder:text-gray_800 Two21"
                  wrapClassName="2xl:mt-[18px] 3xl:mt-[21px] flex lg:mt-[12px] w-[100%] xl:mt-[16px]"
                  name="Five"
                  placeholder="Luxury Cabin"
                  suffix={
                    <Img
                      src="images/img_upload.svg"
                      className="lg:w-[6px] lg:h-[7px] lg:ml-[18px] xl:w-[8px] xl:h-[9px] xl:ml-[23px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[26px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[31px] my-[auto]"
                      alt="upload"
                    />
                  }
                  size="md"
                  variant="UnderLineLightgreen700"
                ></Input>
              </Column>
              <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Group191"
                  placeholder="Recent News"
                  size="lg"
                  variant="UnderLineGray90026"
                ></Input>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listdescription_one">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <div className="bg-gray_800 3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] rounded-radius7 3xl:w-[117px] lg:w-[69px] xl:w-[86px] 2xl:w-[97px]"></div>
                        <Column className="w-[57%]">
                          <Text
                            className="columndescription_one1"
                            variant="body8"
                          >
                            Web Quality Assurance
                            <br />
                            Requirements To Web
                            <br />
                            Dev Risk Manage
                          </Text>
                          <Line className="bg-gray_900_19 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          <Row className="items-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[79%]">
                            <Img
                              src="images/img_calendar_12X12.svg"
                              className="calendar_Two"
                              alt="calendar Four"
                            />
                            <Text className="date" variant="body9">
                              November 23,2022
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="listdescription_one">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <div className="bg-gray_800 3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] rounded-radius7 3xl:w-[117px] lg:w-[69px] xl:w-[86px] 2xl:w-[97px]"></div>
                        <Column className="w-[57%]">
                          <Text className="columndeepdiveinto" variant="body8">
                            Deep Dive Into Wonder
                            <br />
                            World Of Displaements
                            <br />
                            Filtering
                          </Text>
                          <Line className="bg-gray_900_19 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          <Row className="items-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[79%]">
                            <Img
                              src="images/img_calendar_12X12.svg"
                              className="calendar_Two"
                              alt="calendar Five"
                            />
                            <Text className="date" variant="body9">
                              November 23,2022
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="listdescription_one">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <div className="bg-gray_800 3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] rounded-radius7 3xl:w-[117px] lg:w-[69px] xl:w-[86px] 2xl:w-[97px]"></div>
                        <Column className="w-[57%]">
                          <Text className="columndeepdiveinto" variant="body8">
                            Handling Mountin And mountin Of Navigation Routes In
                            Native
                          </Text>
                          <Line className="bg-gray_900_19 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          <Row className="items-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[79%]">
                            <Img
                              src="images/img_calendar_12X12.svg"
                              className="calendar_Two"
                              alt="calendar Six"
                            />
                            <Text className="date" variant="body9">
                              November 23,2022
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                    </Column>
                  </Column>
                </List>
              </Column>
              <Column className="bg-gradient6  items-center justify-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] w-[100%]">
                <Column className="justify-start lg:mt-[150px] xl:mt-[188px] 2xl:mt-[212px] 3xl:mt-[254px] w-[100%]">
                  <Line className="bg-white_A700 h-[3px] w-[23%]" />
                  <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Text
                      className="font-medium leading-[130.00%] text-white_A700 w-[62%]"
                      variant="body2"
                    >
                      Luxury Cauple
                      <br />
                      Cabin
                    </Text>
                    <Text
                      className="bg-yellow_900 flex font-medium items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 text-white_A700 w-[65px]"
                      variant="body8"
                    >
                      $193
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    Popular Tag
                  </Text>
                  <Line className="bg-gray_900 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[99%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[33%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="FillLightgreen700"
                    >
                      Camping
                    </Button>
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[37%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray90019"
                    >
                      Tent Camp
                    </Button>
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[24%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray90019"
                    >
                      Wild
                    </Button>
                  </Row>
                  <Row className="items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[78%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[42%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray90019"
                    >
                      Campfire
                    </Button>
                    <Button
                      className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[54%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray90019"
                    >
                      Luxury Cabin
                    </Button>
                  </Row>
                  <Row className="items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[77%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[47%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray90019"
                    >
                      Safari Tent
                    </Button>
                    <Button
                      className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[49%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray90019"
                    >
                      House Tree
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
          <Footer className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default BlogStandardPage;
