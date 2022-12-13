import React from "react";

import {
  Column,
  Text,
  Stack,
  Img,
  Row,
  Line,
  Button,
  List,
  Input,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer from "components/Footer/Footer";

const BlogDetailsPage = () => {
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Header className="w-[85%]" />
            <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[114px] 2xl:p-[129px] 3xl:p-[154px] lg:p-[91px] w-[100%]">
              <Column className="items-center justify-start mb-[2px] w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Blog Details
                  </Text>
                  <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[54%]">
                    <Img
                      src="images/img_arrowright_white_A700_16X10.svg"
                      className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] left-[34%] top-[4%] w-[4%]"
                      alt="arrowright"
                    />
                    <Text className="language8" variant="body4">
                      Home Blog Details
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="items-start justify-center lg:ml-[167px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
            <Column className="items-center justify-start w-[66%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="justify-start w-[100%]">
                  <div className="bg-gray_800 lg:h-[267px] xl:h-[334px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]"></div>
                  <Row className="items-start ml-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[39%]">
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
                    className="leading-[130.00%] ml-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-gray_900 w-[94%]"
                    as="h6"
                    variant="h6"
                  >
                    50 Resources And Tools To Turbocharge Amazon
                    <br />
                    Product Scraper Copywriting Skills
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] ml-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-gray_800 w-[98%]"
                    variant="body9"
                  >
                    Sit amet consectetur adipiscing elit. Phasellus viverra
                    justo, orci, interdum purus purus vitae vulputate nec
                    <br />
                    Vel nunc vivamus felis sit est, mus aliquam massa volutpat.
                    Consectetur scelerisque tincidunt vulputate quis.
                    <br />
                    Metus eu, nisi nibh et adipiscing natoque tincidunt. Sed
                    morbi arcu integer vestibulum scelerisque tincidunt
                    <br />
                    mauris. Lectus molestie vestibulum ac, nec. Nisl rutrum cras
                    dictum lectus molestie leoenim sapien aenean
                    <br />
                    lectus. Platea enim nunc feugiat mauris, ut in volutpat
                    nunc. Nulla sit rhoncus consequat malesuada magna diam
                    tempor mauris proin vulputate tortorpurus nunc elementum
                    quam pharetra mauris Habitant massa turpis nunc eu. Aliquet
                    at velit etiam turpis a arcu consectetur sed.
                  </Text>
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <div className="bg-gray_800 lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] w-[48%]"></div>
                    <div className="bg-gray_800 lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] w-[48%]"></div>
                  </Row>
                  <Text className="ml-[1px] columnglobe" variant="body2">
                    Build Camping Easily
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-gray_800 w-[98%]"
                    variant="body9"
                  >
                    Metus eu, nisi nibh et adipiscing natoque tincidunt. Sed
                    morbi arcu integer vestibulum scelerisque tincidunt
                    <br />
                    mauris. Lectus molestie vestibulum ac, nec. Nisl rutrum cras
                    dictum lectus molestie leoenim sapien aenean
                    <br />
                    lectus. Platea enim nunc feugiat mauris, ut in volutpat
                    nunc. Nulla sit rhoncus consequat
                  </Text>
                  <Stack className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[90px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[89%]">
                    <div className="absolute bg-gray_50 3xl:h-[115px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] left-[1%] rounded-radius50 top-[0] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]"></div>
                    <Text
                      className="absolute font-medium leading-[120.00%] right-[0] text-gray_900 top-[23%] w-[91%]"
                      variant="body1"
                    >
                      Handling Mounting And Unmounting Of Given
                      <br />
                      Navigation Routes In React Native
                    </Text>
                    <Line className="absolute bg-yellow_900 bottom-[7%] h-[2px] left-[9%] w-[10%]" />
                    <Text
                      className="absolute bottom-[0] left-[21%] Tag"
                      variant="body8"
                    >
                      Johnny M. Martin
                    </Text>
                    <Img
                      src="images/img_volume.svg"
                      className="absolute lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[0] top-[23%] w-[7%]"
                      alt="volume"
                    />
                  </Stack>
                  <Line className="bg-gray_900_19 h-[1px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]" />
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-end justify-between rounded-radius5 w-[58%]">
                      <Text
                        className="font-medium mb-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_900 w-[auto]"
                        variant="body8"
                      >
                        Popular Tag
                      </Text>
                      <Button
                        className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[20%]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="FillLightgreen700"
                      >
                        Camping
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[23%]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="OutlineGray90019"
                      >
                        Tent Camp
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[27%]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="OutlineGray90019"
                      >
                        Couple Cabin
                      </Button>
                    </Row>
                    <Row className="items-start justify-between w-[22%]">
                      <Text className="SaticfiedClien" variant="body8">
                        Share
                      </Text>
                      <Img
                        src="images/img_facebook_18X9.svg"
                        className="common-pointer lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mt-[1px] w-[5%]"
                        onClick={handleNavigate1}
                        alt="facebook"
                      />
                      <Img
                        src="images/img_twitter_11X14.svg"
                        className="common-pointer 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[3px] w-[8%]"
                        onClick={handleNavigate2}
                        alt="twitter"
                      />
                      <Img
                        src="images/img_camera_18X18.svg"
                        className="mt-[1px] calendar"
                        alt="camera"
                      />
                      <Img
                        src="images/img_linkedin_14X14.svg"
                        className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] mt-[2px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                        alt="linkedin"
                      />
                    </Row>
                  </Row>
                  <Line className="bg-gray_900_19 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-center w-[94%]">
                    <div className="bg-bluegray_100 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] rounded-radius7 w-[24%]"></div>
                    <Column className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Bruno R. Bouchard
                      </Text>
                      <Text className="Author" variant="body9">
                        Author
                      </Text>
                      <Text className="columnrectanglesix_one1" variant="body9">
                        Donec duis enim ipsum odio at cursus. Fames semper enim
                        integer eget
                        <br />
                        neque. Ipsum ultricies faucibus lorem augue enim semper
                      </Text>
                      <Img
                        src="images/img_social_gray_800.svg"
                        className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[21%]"
                        alt="Social"
                      />
                    </Column>
                  </Row>
                  <Line className="bg-gray_900_19 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]" />
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <List
                    className="lg:gap-[58px] xl:gap-[73px] 2xl:gap-[82px] 3xl:gap-[99px] grid grid-cols-2 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
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
                              alt="calendar One"
                            />
                            <Text className="date" variant="body9">
                              November 23,2022
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
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
                              alt="calendar Two"
                            />
                            <Text className="date" variant="body9">
                              November 23,2022
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                  </List>
                  <Line className="bg-gray_900_19 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] w-[100%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  variant="body4"
                >
                  Popular Comments
                </Text>
                <List
                  className="gap-[0] lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="items-center justify-start lg:mr-[37px] xl:mr-[46px] 2xl:mr-[52px] 3xl:mr-[63px] lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] pb-[1px] w-[92%]">
                    <Row className="items-start justify-between w-[100%]">
                      <div className="bg-gray_800 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] mt-[4px] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"></div>
                      <Column className="justify-start w-[82%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body5"
                        >
                          Jonathan M. Dickinson
                        </Text>
                        <Text className="test_0001234561" variant="body9">
                          September 25, 2022
                        </Text>
                        <Text className="description_Five" variant="body9">
                          Nov ut perspiciatis unde omnis iste natus sit
                          voluptatem accusantium doloremque
                          <br />
                          laudantium, totam rem aperiam quae abillo inventore
                          veritatis
                        </Text>
                        <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[11%]">
                          <Text className="Link" variant="body11">
                            Reply
                          </Text>
                          <Img
                            src="images/img_arrowright_20X20.svg"
                            className="arrowright_Three"
                            alt="arrowright One"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="self-center w-[84%] h-[1px] bg-gray_900_19" />
                  <Column className="items-center justify-start lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] pb-[1px] w-[92%]">
                    <Row className="items-start justify-between w-[100%]">
                      <div className="bg-gray_800 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] mt-[4px] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"></div>
                      <Column className="justify-start w-[82%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body5"
                        >
                          Michael C. Paille
                        </Text>
                        <Text className="test_0001234561" variant="body9">
                          September 25, 2022
                        </Text>
                        <Text className="description_Five" variant="body9">
                          Nov ut perspiciatis unde omnis iste natus sit
                          voluptatem accusantium doloremque
                          <br />
                          laudantium, totam rem aperiam quae abillo inventore
                          veritatis
                        </Text>
                        <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[11%]">
                          <Text className="Link" variant="body11">
                            Reply
                          </Text>
                          <Img
                            src="images/img_arrowright_20X20.svg"
                            className="arrowright_Three"
                            alt="arrowright Two"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </List>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] w-[29%]">
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
                  name="GroupFortySix"
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
                  name="Group172"
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
                              alt="calendar Three"
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
                            Handling Mountin And mountin Of Navigation Routes In
                            Native
                          </Text>
                          <Line className="bg-gray_900_19 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
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
          <Column className="bg-gray_50 items-center justify-start lg:ml-[168px] xl:ml-[210px] 2xl:ml-[236px] 3xl:ml-[283px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[44%]">
            <Column className="justify-start mb-[3px] w-[94%]">
              <Text
                className="font-medium text-gray_900 w-[auto]"
                variant="body4"
              >
                Leave a Comments
              </Text>
              <Text
                className="font-light xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-gray_800 w-[auto]"
                variant="body9"
              >
                Send us your valuable feedback about our services
              </Text>
              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Input
                  className="placeholder:text-gray_900 One_One3"
                  wrapClassName="w-[48%]"
                  type="email"
                  name="One One"
                  placeholder="Email Address"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineGray900"
                ></Input>
                <Input
                  className="placeholder:text-gray_900 One_One3"
                  wrapClassName="w-[48%]"
                  type="number"
                  name="Two One"
                  placeholder="Phone Number"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillWhiteA700"
                ></Input>
              </Row>
              <Column className="bg-white_A700 justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 w-[100%]">
                <Text
                  className="font-normal lg:mb-[45px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[76px] ml-[3px] not-italic text-gray_900 w-[auto]"
                  variant="body9"
                >
                  Write Comments
                </Text>
              </Column>
              <Button
                className="2xl:mt-[15px] 3xl:mt-[18px] flex items-center justify-center lg:mt-[10px] text-center w-[29%] xl:mt-[13px]"
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
                  send comments
                </div>
              </Button>
            </Column>
          </Column>
          <Footer className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default BlogDetailsPage;
