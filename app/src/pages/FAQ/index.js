import React from "react";

import {
  Column,
  Text,
  Stack,
  Img,
  Row,
  Button,
  Line,
  Input,
  SeekBar,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const FAQPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[85%]" />
          <Column className="bg-gradient  items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:p-[109px] 2xl:p-[123px] 3xl:p-[147px] lg:p-[87px] w-[100%]">
            <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[12%]">
              <Column className="items-center justify-start w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h1" variant="h1">
                  FAQ
                </Text>
                <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[96%]">
                  <Img
                    src="images/img_arrowright_white_A700_16X10.svg"
                    className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[42%] top-[13%] w-[6%]"
                    alt="arrowright"
                  />
                  <Text className="language8" variant="body4">
                    Home FAQ
                  </Text>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-center w-[81%]">
                <Row className="items-center justify-between w-[64%]">
                  <Row className="items-center w-[41%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      size="smIcn"
                      variant="icbFillLightgreen700"
                    >
                      <Img
                        src="images/img_map_80X80.svg"
                        className="flex items-center justify-center"
                        alt="map"
                      />
                    </Button>
                    <Text className="rowrectanglefortytwo" variant="body4">
                      Tent Camping
                    </Text>
                  </Row>
                  <Row className="items-center w-[44%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      size="mdIcn"
                      variant="icbFillLightgreen70026"
                    >
                      <Img
                        src="images/img_car_80X80.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="car"
                      />
                    </Button>
                    <Text className="rowrectanglefortytwo" variant="body4">
                      Family Camping
                    </Text>
                  </Row>
                </Row>
                <Row className="items-center lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] w-[26%]">
                  <Button
                    className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                    size="mdIcn"
                    variant="icbFillLightgreen70026"
                  >
                    <Img
                      src="images/img_fire_80X80.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="fire"
                    />
                  </Button>
                  <Text className="rowrectanglefortytwo" variant="body4">
                    Wild Camping
                  </Text>
                </Row>
              </Row>
              <Stack className="lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Line className="absolute bg-gray_900_19 bottom-[0] h-[2px] w-[100%]" />
                <Line className="absolute bg-light_green_700 h-[3px] left-[0] w-[23%]" />
              </Stack>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-start justify-between w-[100%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  variant="body4"
                >
                  Design For Mobile Interfaces, A New Smashing Book By Steven
                  Hoober
                </Text>
                <Img
                  src="images/img_maximize.svg"
                  className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"
                  alt="maximize"
                />
              </Row>
              <Line className="bg-gray_900_33 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
            </Column>
          </Column>
          <Input
            className="placeholder:text-black_900 Two20"
            wrapClassName="2xl:mt-[28px] 3xl:mt-[34px] flex lg:mt-[20px] w-[100%] xl:mt-[25px]"
            name="Two"
            placeholder="Terminal And Command-Line (CLI) Tools For Modern Web Development"
            suffix={
              <Img
                src="images/img_maximize_15X15.svg"
                className="lg:w-[8px] lg:h-[8px] lg:ml-[18px] xl:w-[10px] xl:h-[11px] xl:ml-[23px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[26px] 3xl:w-[13px] 3xl:h-[14px] 3xl:ml-[31px] my-[auto]"
                alt="maximize"
              />
            }
            size="lg"
            variant="UnderLineGray90026"
          ></Input>
          <Text
            className="font-light leading-[175.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-gray_800 w-[100%]"
            variant="body9"
          >
            Sit amet, consectetur adipiscing elit. Id massa hendrerit dis tellus
            ullamcorper sit convallis et dui. Scelerisque tortor nulla
            pellentesque augue. Vestibulum morbi eget venenatis elementum,
            pulvinar vel mauris pellentesque. Nulla elit sodales lacus risus
            tincidunt quis nec neque, sem. Donec varius montes, mi id sagittis
            tincidunt eu. Vulputate libero pellentesque morbi montes, morbi a
            tristique suspendisse nec. Lectus ac faucibus et a eu. Donec proin
            cursus molestie ut convallie
          </Text>
          <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-start justify-between w-[100%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  variant="body4"
                >
                  Useful React Hooks That You Can Use In Your Projects
                </Text>
                <Img
                  src="images/img_maximize.svg"
                  className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"
                  alt="maximize Two"
                />
              </Row>
              <Line className="bg-gray_900_33 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
            </Column>
          </Column>
          <Input
            className="placeholder:text-black_900 Two20"
            wrapClassName="2xl:mt-[28px] 3xl:mt-[34px] flex lg:mt-[20px] w-[100%] xl:mt-[25px]"
            name="Four"
            placeholder="Automatically Transforming And Optimizing Images And Videos"
            suffix={
              <Img
                src="images/img_maximize.svg"
                className="lg:w-[8px] lg:h-[8px] lg:ml-[18px] xl:w-[10px] xl:h-[11px] xl:ml-[23px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[26px] 3xl:w-[13px] 3xl:h-[14px] 3xl:ml-[31px] my-[auto]"
                alt="maximize"
              />
            }
            size="lg"
            variant="UnderLineGray90026"
          ></Input>
          <Input
            className="placeholder:text-black_900 Two20"
            wrapClassName="2xl:mt-[28px] 3xl:mt-[34px] flex lg:mt-[20px] w-[100%] xl:mt-[25px]"
            name="Five"
            placeholder="The Value Of Concept Testing As Part Of Product Design"
            suffix={
              <Img
                src="images/img_maximize.svg"
                className="lg:w-[8px] lg:h-[8px] lg:ml-[18px] xl:w-[10px] xl:h-[11px] xl:ml-[23px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[26px] 3xl:w-[13px] 3xl:h-[14px] 3xl:ml-[31px] my-[auto]"
                alt="maximize"
              />
            }
            size="lg"
            variant="UnderLineGray90026"
          ></Input>
          <Input
            className="placeholder:text-black_900 Two20"
            wrapClassName="2xl:mt-[28px] 3xl:mt-[34px] flex lg:mt-[20px] w-[100%] xl:mt-[25px]"
            name="Six"
            placeholder="50 Resources And Tools To Turbocharge Your Copywriting Skills"
            suffix={
              <Img
                src="images/img_maximize.svg"
                className="lg:w-[8px] lg:h-[8px] lg:ml-[18px] xl:w-[10px] xl:h-[11px] xl:ml-[23px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[26px] 3xl:w-[13px] 3xl:h-[14px] 3xl:ml-[31px] my-[auto]"
                alt="maximize"
              />
            }
            size="lg"
            variant="UnderLineGray90026"
          ></Input>
        </Column>
        <Column className="bg-gray_900_33 items-center justify-end lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:p-[163px] xl:p-[204px] 2xl:p-[230px] 3xl:p-[276px] w-[84%]">
          <Stack className="bg-white_A700 2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[91px] mt-[1px] lg:px-[32px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] rounded-radius50 2xl:w-[101px] 3xl:w-[121px] lg:w-[72px] xl:w-[90px]">
            <Img
              src="images/img_icon_14X12.svg"
              className="absolute xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] inset-[0] justify-center m-[auto] w-[9%]"
              alt="Icon Five"
            />
          </Stack>
        </Column>
        <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[67%]">
          <Row className="items-center justify-between w-[100%]">
            <Column className="w-[45%]">
              <Column className="justify-start w-[93%]">
                <Row className="items-start w-[55%]">
                  <Text className="One_One" variant="body6">
                    01
                  </Text>
                  <Line className="bg-gray_900 h-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[29%]" />
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
            <div className="bg-gray_400 lg:h-[355px] xl:h-[444px] 2xl:h-[500px] 3xl:h-[599px] w-[49%]"></div>
          </Row>
        </Column>
        <Footer className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
      </Column>
    </>
  );
};

export default FAQPage;
