import React from "react";

import {
  Column,
  Text,
  Stack,
  Img,
  Row,
  Line,
  Button,
  Input,
  TextArea,
} from "components";
import Header from "components/Header/Header";

const ContactUsPage = () => {
  function handleNavigate3() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate4() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[85%]" />
          <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[109px] 2xl:p-[123px] 3xl:p-[147px] lg:p-[87px] w-[100%]">
            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[29%]">
              <Column className="items-center justify-start w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h1" variant="h1">
                  Contact Us
                </Text>
                <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[56%]">
                  <Img
                    src="images/img_arrowright_white_A700_16X10.svg"
                    className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] left-[35%] top-[13%] w-[4%]"
                    alt="arrowright"
                  />
                  <Text className="language8" variant="body4">
                    Home Contact Us
                  </Text>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Column>
        <Stack className="lg:h-[5510px] xl:h-[6893px] 2xl:h-[7753px] 3xl:h-[9303px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="absolute justify-start top-[1%] w-[100%]">
            <Column className="justify-start lg:ml-[167px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] w-[23%]">
              <Row className="items-center w-[59%]">
                <Text className="Tag" variant="body6">
                  01
                </Text>
                <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[33%]" />
                <Text
                  className="lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] Tag"
                  variant="body6"
                >
                  Contact Us
                </Text>
              </Row>
              <Text className="Title4" as="h3" variant="h3">
                <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  Ready to Travel Us
                  <br />
                </span>
                <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                  for Better Adventure
                </span>
              </Text>
            </Column>
            <Stack className="lg:h-[5380px] xl:h-[6730px] 2xl:h-[7571px] 3xl:h-[9084px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
              <Img
                src="images/img_group_1965X1920.png"
                className="absolute lg:h-[1048px] xl:h-[1312px] 2xl:h-[1475px] 3xl:h-[1770px] top-[0] w-[100%]"
                alt="Group"
              />
              <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[0] w-[83%]">
                <Column className="justify-start xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[82px] w-[40%]">
                  <Row className="items-start ml-[1px] w-[94%]">
                    <Column className="items-center justify-start mt-[3px] w-[50%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Img
                          src="images/img_location_1.svg"
                          className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] w-[11%]"
                          alt="location"
                        />
                        <Column className="justify-start w-[80%]">
                          <Text
                            className="font-medium text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            Locations
                          </Text>
                          <Text
                            className="font-light leading-[150.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_800 w-[100%]"
                            variant="body8"
                          >
                            532 Main Street, 2nd Block
                            <br />
                            melbourne, Australia
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[40%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[70%]">
                          <Img
                            src="images/img_mail.svg"
                            className="lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] mt-[3px] w-[24%]"
                            alt="mail"
                          />
                          <Text
                            className="rowrectanglefortytwo"
                            variant="body4"
                          >
                            Email Us
                          </Text>
                        </Row>
                        <Text
                          className="font-light leading-[150.00%] lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] mt-[2px] text-gray_800 w-[71%]"
                          variant="body8"
                        >
                          support@gmail.com
                          <br />
                          infovadhak.net
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                    <Column className="items-center justify-start w-[36%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[68%]">
                          <Img
                            src="images/img_call_16X16.svg"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[3px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                            alt="call"
                          />
                          <Text
                            className="rowrectanglefortytwo"
                            variant="body4"
                          >
                            Hotline
                          </Text>
                        </Row>
                        <Text
                          className="font-light leading-[150.00%] lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] mt-[1px] text-gray_800 w-[69%]"
                          variant="body8"
                        >
                          +000 (123) 456 88
                          <br />
                          +123456789
                        </Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start w-[44%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[64%]">
                          <Img
                            src="images/img_link.svg"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[3px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                            alt="link"
                          />
                          <Text
                            className="font-medium lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            Follow Us
                          </Text>
                        </Row>
                        <Row className="items-center justify-end ml-[auto] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[75%]">
                          <Button
                            className="common-pointer flex items-center justify-center rounded-radius50 campingtentOne_One"
                            onClick={handleNavigate3}
                            size="smIcn"
                            variant="icbFillYellow900"
                          >
                            <Img
                              src="images/img_facebook.svg"
                              className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px]"
                              alt="facebook"
                            />
                          </Button>
                          <Button
                            className="common-pointer flex items-center justify-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 campingtentOne_One"
                            onClick={handleNavigate4}
                            size="smIcn"
                            variant="icbFillGray200"
                          >
                            <Img
                              src="images/img_twitter_45X45.svg"
                              className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px]"
                              alt="twitter"
                            />
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 campingtentOne_One"
                            size="smIcn"
                            variant="icbFillGray200"
                          >
                            <Img
                              src="images/img_camera_45X45.svg"
                              className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px]"
                              alt="camera"
                            />
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 campingtentOne_One"
                            size="smIcn"
                            variant="icbFillGray200"
                          >
                            <Img
                              src="images/img_linkedin_45X45.svg"
                              className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px]"
                              alt="linkedin"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Stack
                  className="bg-cover bg-repeat lg:h-[347px] xl:h-[434px] 2xl:h-[488px] 3xl:h-[586px] lg:mt-[101px] xl:mt-[126px] 2xl:mt-[142px] 3xl:mt-[171px] lg:px-[117px] xl:px-[147px] 2xl:px-[165px] 3xl:px-[199px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_mapimage.png')" }}
                >
                  <Img
                    src="images/img_location_85X85.svg"
                    className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] lg:w-[45px] xl:w-[56px] 2xl:w-[63px] 3xl:w-[76px]"
                    alt="location One"
                  />
                </Stack>
              </Column>
              <Column className="absolute bg-gray_900 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] top-[12%] w-[100%]">
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
                            src="images/img_campingtent1_23.svg"
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
                          src="images/img_social_10.svg"
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
          </Column>
          <Column className="absolute bg-white_A700 justify-start lg:p-[30px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[52px] right-[16%] rounded-radius12 shadow-bs2 top-[0] w-[27%]">
            <Text
              className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-gray_900 w-[auto]"
              variant="body1"
            >
              Send Us Message
            </Text>
            <Text
              className="font-light leading-[175.00%] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] text-gray_800 w-[89%]"
              variant="body9"
            >
              Adipiscing magna varius imperdiet scelerisque
              <br />
              suspendisse amet sed ridiculus turpis.
            </Text>
            <Input
              className="placeholder:text-gray_900 One_One3"
              wrapClassName="2xl:ml-[8px] 2xl:mt-[30px] 3xl:ml-[9px] 3xl:mt-[36px] lg:ml-[5px] lg:mt-[21px] w-[94%] xl:ml-[7px] xl:mt-[26px]"
              type="text"
              name="One One"
              placeholder="Full Name"
              shape="RoundedBorder5"
              size="sm"
              variant="OutlineLightgreen700"
            ></Input>
            <Input
              className="placeholder:text-gray_900 One_One3"
              wrapClassName="2xl:ml-[8px] 2xl:mt-[7px] 3xl:ml-[9px] 3xl:mt-[9px] lg:ml-[5px] lg:mt-[5px] w-[94%] xl:ml-[7px] xl:mt-[6px]"
              type="email"
              name="Two"
              placeholder="Email Address"
              shape="RoundedBorder5"
              size="sm"
              variant="OutlineGray90019"
            ></Input>
            <TextArea
              className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-gray_900 text-gray_900 w-[94%]"
              name="Three"
              placeholder="Write Message"
            ></TextArea>
            <Button
              className="2xl:ml-[8px] 2xl:mt-[7px] 3xl:ml-[9px] 3xl:mt-[9px] flex items-center justify-center lg:ml-[5px] lg:mt-[5px] mb-[1px] text-center w-[47%] xl:ml-[7px] xl:mt-[6px]"
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
                send message
              </div>
            </Button>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default ContactUsPage;
