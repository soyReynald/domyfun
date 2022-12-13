import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  List,
  CheckBox,
  Input,
  SelectBox,
  Button,
  Radio,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer from "components/Footer/Footer";

const AccommodationDetailsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-end mx-[auto] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[85%]" />
          <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
            <Row className="items-center w-[93%]">
              <div className="bg-gray_800 lg:h-[347px] xl:h-[434px] 2xl:h-[488px] 3xl:h-[586px] w-[50%]"></div>
              <Img
                src="images/img_image_650X885.png"
                className="lg:h-[347px] xl:h-[434px] 2xl:h-[488px] 3xl:h-[586px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[50%]"
                alt="Image One"
              />
            </Row>
            <Column className="items-center justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] w-[67%]">
              <Row className="items-start justify-between w-[99%]">
                <Column className="justify-start w-[67%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Couple Tent Camping
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_800 w-[100%]"
                    variant="body9"
                  >
                    Donec malesuada pellentesque dictum vel at eu. Sollicitudin
                    integer quam accumsan habitasse turpis massa <br />
                    eu sapien scelerisque. Et eu sit sem sed. Fames sodales
                    euismod mattis mattis arcu tempor tincidunt interdum
                    <br />
                    Vel id aliquam quis ullamcorper morbi fringilla sodales
                    ullamcorper molestie. Urna iaculis consequat vitae eget
                    <br />
                    laoreet malesuada. In porttitor integer faucibus amet,
                    pretium porttitor gravida fermentum. Erat sit mi urna
                    facilisis mattis molestie tincidunt velit, mauris
                  </Text>
                  <Text
                    className="font-medium lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    Camping Facilities
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-gray_800 w-[100%]"
                    variant="body9"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo
                    <br />
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magne
                  </Text>
                  <Stack className="lg:h-[561px] xl:h-[702px] 2xl:h-[789px] 3xl:h-[947px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Stack className="absolute border border-gray_900_19 border-solid lg:h-[561px] xl:h-[702px] 2xl:h-[789px] 3xl:h-[947px] right-[0] w-[100%]">
                      <Stack className="absolute lg:h-[561px] xl:h-[702px] 2xl:h-[789px] 3xl:h-[947px] w-[100%]">
                        <Row className="absolute bg-gray_50 items-start justify-between xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] top-[0] w-[100%]">
                          <Text
                            className="font-medium lg:ml-[56px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[3px] text-gray_900 w-[auto]"
                            variant="body6"
                          >
                            Indoor Equipment
                          </Text>
                          <Text
                            className="font-medium lg:mr-[51px] xl:mr-[64px] 2xl:mr-[72px] 3xl:mr-[86px] mt-[3px] text-gray_900 w-[auto]"
                            variant="body6"
                          >
                            Outdoor Equipment
                          </Text>
                        </Row>
                        <Line className="absolute bg-gray_900_19 lg:h-[561px] xl:h-[702px] 2xl:h-[789px] 3xl:h-[947px] inset-x-[50%] w-[1px]" />
                      </Stack>
                      <Stack className="absolute h-[1px] inset-x-[0] top-[12%] w-[100%]">
                        <Line className="absolute bg-gray_900_19 h-[1px] rotate-[180deg] w-[100%]" />
                        <Line className="absolute bg-gray_900 h-[1px] left-[0] rotate-[180deg] w-[50%]" />
                      </Stack>
                      <Row className="absolute items-center justify-between left-[8%] top-[8%] w-[69%]">
                        <Row className="items-center justify-between w-[13%]">
                          <Img
                            src="images/img_vector_30X30.svg"
                            className="Vector2"
                            alt="Vector"
                          />
                          <Text
                            className="font-light text-gray_900 w-[auto]"
                            variant="body8"
                          >
                            Sink
                          </Text>
                        </Row>
                        <Row className="items-end w-[27%]">
                          <Img
                            src="images/img_car.svg"
                            className="Vector2"
                            alt="car"
                          />
                          <Text className="rowcar" variant="body8">
                            Music & Party
                          </Text>
                        </Row>
                      </Row>
                      <Column className="absolute bottom-[2%] justify-start left-[8%] w-[65%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="items-center justify-between lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                            <Row className="items-end w-[15%]">
                              <Img
                                src="images/img_qrcode.svg"
                                className="lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[24%]"
                                alt="qrcode"
                              />
                              <Text className="rowcar" variant="body8">
                                Fridge
                              </Text>
                            </Row>
                            <Row className="items-center w-[23%]">
                              <Img
                                src="images/img_computer_30X30.svg"
                                className="Vector2"
                                alt="computer"
                              />
                              <Text className="rowcomputer" variant="body8">
                                Wood Fire
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-between lg:mr-[2px] 2xl:mr-[3px] xl:mr-[3px] 3xl:mr-[4px] lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[99%]">
                            <Row className="items-center mb-[1px] w-[21%]">
                              <Img
                                src="images/img_television.svg"
                                className="lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[17%]"
                                alt="television"
                              />
                              <Text className="rowcomputer" variant="body8">
                                Gas stove
                              </Text>
                            </Row>
                            <Row className="items-center mt-[1px] w-[22%]">
                              <Img
                                src="images/img_airplane_30X30.svg"
                                className="Vector2"
                                alt="airplane"
                              />
                              <Text className="rowcomputer" variant="body8">
                                Sunshade
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-center lg:mr-[15px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[95%]">
                            <Row className="items-end w-[28%]">
                              <Img
                                src="images/img_ticket.svg"
                                className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
                                alt="ticket"
                              />
                              <Text className="rowticket" variant="body8">
                                Cokking Pot
                              </Text>
                            </Row>
                            <Row className="items-end mb-[1px] lg:ml-[149px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px] w-[19%]">
                              <Img
                                src="images/img_airplane_1.svg"
                                className="Vector2"
                                alt="airplane One"
                              />
                              <Text className="rowcar" variant="body8">
                                Bicycle
                              </Text>
                            </Row>
                          </Row>
                        </List>
                        <Row className="items-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[90%]">
                          <Row className="items-end 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[36%]">
                            <Img
                              src="images/img_notification.svg"
                              className="lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[15%]"
                              alt="notification"
                            />
                            <Text className="rowcar" variant="body8">
                              Plates & Cutlery
                            </Text>
                          </Row>
                          <Row className="items-end justify-between 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[131px] xl:ml-[164px] 2xl:ml-[185px] 3xl:ml-[222px] w-[14%]">
                            <Img
                              src="images/img_icon_30X30.svg"
                              className="Vector2"
                              alt="Icon Five"
                            />
                            <Text
                              className="font-light mb-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_900 w-[auto]"
                              variant="body8"
                            >
                              Spa
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[27%]">
                          <Img
                            src="images/img_icon_27X27.svg"
                            className="laptop"
                            alt="Icon Six"
                          />
                          <Text
                            className="mb-[3px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rowcomputer"
                            variant="body8"
                          >
                            Solar-energy
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[27%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="Vector2"
                            alt="trophy"
                          />
                          <Text className="rowcomputer" variant="body8">
                            Private Toilet
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[19%]">
                          <Img
                            src="images/img_shower1.svg"
                            className="Vector2"
                            alt="showerOne"
                          />
                          <Text className="rowcomputer" variant="body8">
                            Shower
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[31%]">
                          <Img
                            src="images/img_computer_2.svg"
                            className="Vector2"
                            alt="computer One"
                          />
                          <Text className="rowcomputer" variant="body8">
                            Bathroom linen
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[23%]">
                          <Img
                            src="images/img_cut_30X28.svg"
                            className="lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[22%]"
                            alt="cut"
                          />
                          <Text className="rowcar" variant="body8">
                            Hair-dryer
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[20%]">
                          <Img
                            src="images/img_vector_30X19.svg"
                            className="lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[17%]"
                            alt="Vector One"
                          />
                          <Text className="rowcomputer" variant="body8">
                            Essentials
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[20%]">
                          <Img
                            src="images/img_menu.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
                            alt="menu"
                          />
                          <Text className="rowticket" variant="body8">
                            Bedding
                          </Text>
                        </Row>
                        <Row className="items-start lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[28%]">
                          <Img
                            src="images/img_computer_20X30.svg"
                            className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[19%]"
                            alt="computer Two"
                          />
                          <Text
                            className="mt-[1px] rowcomputer"
                            variant="body8"
                          >
                            Air Condition
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[26%]">
                          <Img
                            src="images/img_television_30X30.svg"
                            className="Vector2"
                            alt="television One"
                          />
                          <Text className="rowcomputer" variant="body8">
                            Double-bed
                          </Text>
                        </Row>
                      </Column>
                    </Stack>
                    <Line className="absolute bg-gray_900_19 h-[1px] rotate-[180deg] top-[19%] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 h-[1px] rotate-[180deg] top-[26%] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 h-[1px] rotate-[180deg] top-[33%] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 h-[1px] rotate-[180deg] top-[39%] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 h-[1px] rotate-[180deg] top-[46%] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[47%] h-[1px] rotate-[180deg] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[40%] h-[1px] rotate-[180deg] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[33%] h-[1px] rotate-[180deg] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[26%] h-[1px] rotate-[180deg] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[19%] h-[1px] rotate-[180deg] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[13%] h-[1px] rotate-[180deg] w-[100%]" />
                    <Line className="absolute bg-gray_900_19 bottom-[7%] h-[1px] rotate-[180deg] w-[100%]" />
                  </Stack>
                  <Text
                    className="font-medium lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    Conditions and Rules
                  </Text>
                  <Text
                    className="font-light leading-[175.00%] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_800 w-[93%]"
                    variant="body9"
                  >
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are beguiled and demoralized by the
                    charms of pleasure of the moment blinded by desire that they
                    cannot foresee the
                    <br />
                    pain and trouble that are bound to ensue; and equal blame
                    belongs to those duty
                  </Text>
                  <CheckBox
                    className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                    inputClassName="h-[19.5px] mr-[5px] w-[19.5px]"
                    name="CanIuseater"
                    label="Can I use a terms and conditions template?"
                    size="sm"
                    variant="FillLightgreen700_1"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                    inputClassName="h-[19.5px] mr-[5px] w-[19.5px]"
                    name="Howiubendacan"
                    label="How iubenda can help generate and manage a Terms and Conditions"
                    size="sm"
                    variant="FillLightgreen700_1"
                  ></CheckBox>
                  <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[65%]">
                    <Img
                      src="images/img_checkmark_19X19.svg"
                      className="mail6"
                      alt="checkmark"
                    />
                    <Text className="rowcheckmark" variant="body8">
                      Start Generating and select the Generate Now button under
                    </Text>
                  </Row>
                  <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[56%]">
                    <Img
                      src="images/img_checkmark_19X19.svg"
                      className="mail6"
                      alt="checkmark One"
                    />
                    <Text className="rowcheckmark" variant="body8">
                      Fill out your web / app owner and contact details .
                    </Text>
                  </Row>
                  <CheckBox
                    className="font-normal ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic pb-[1px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                    inputClassName="h-[19.5px] mr-[5px] w-[19.5px]"
                    name="Whatshouldbas"
                    label="What should basic terms and conditions include?"
                    size="sm"
                    variant="FillLightgreen700_1"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal ml-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                    inputClassName="h-[19.5px] mr-[5px] w-[19.5px]"
                    name="TipsforaGood"
                    label="Tips for a Good Terms and Conditions Agreement"
                    size="sm"
                    variant="FillLightgreen700_1"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_900"
                    inputClassName="h-[19.5px] mr-[5px] w-[19.5px]"
                    name="DownloadFreeT"
                    label="Download Free Terms and Conditions Template"
                    size="sm"
                    variant="FillLightgreen700_1"
                  ></CheckBox>
                  <Column className="bg-gray_50 items-center justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] lg:p-[26px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[100%]">
                    <Column className="justify-start w-[95%]">
                      <Text
                        className="font-semibold leading-[120.00%] text-gray_900 w-[59%]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                          Find Best Camping
                          <br />
                        </span>
                        <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                          Availability
                        </span>
                      </Text>
                      <List
                        className="lg:gap-[20px] xl:gap-[26px] 2xl:gap-[29px] 3xl:gap-[35px] grid grid-cols-2 min-h-[auto] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                        orientation="horizontal"
                      >
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
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Text
                                className="font-medium text-gray_900 w-[auto]"
                                variant="body6"
                              >
                                Check Out
                              </Text>
                              <Img
                                src="images/img_calendar.svg"
                                className="calendar"
                                alt="calendar One"
                              />
                            </Row>
                            <Line className="bg-gray_900_26 h-[1px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] shadow-bs w-[100%]" />
                          </Column>
                        </Column>
                      </List>
                      <Row className="items-start justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="font-medium p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                          wrapClassName="flex w-[47%]"
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
                          className="font-medium mt-[1px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_900 w-[47%]"
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
                      </Row>
                      <Button
                        className="2xl:mt-[22px] 3xl:mt-[27px] flex items-center justify-center lg:mt-[16px] text-center w-[32%] xl:mt-[20px]"
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
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start mt-[2px] lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] shadow-bs2 w-[28%]">
                  <Column className="justify-start w-[99%]">
                    <Text
                      className="font-medium text-gray_900 w-[auto]"
                      variant="body5"
                    >
                      Check Availability
                    </Text>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          variant="body8"
                        >
                          December 2022
                        </Text>
                        <Img
                          src="images/img_rewind.svg"
                          className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] w-[14%]"
                          alt="rewind"
                        />
                      </Row>
                      <Column className="font-inter items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="my-[3px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              Mo
                            </Text>
                          </Column>
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="my-[1px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              Tu
                            </Text>
                          </Column>
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="my-[3px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              We
                            </Text>
                          </Column>
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="my-[1px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              Th
                            </Text>
                          </Column>
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="flex items-center my-[1px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              Fr
                            </Text>
                          </Column>
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="my-[1px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              Sa
                            </Text>
                          </Column>
                          <Column className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                            <Text
                              className="my-[1px] text-black_900 w-[auto]"
                              variant="body13"
                            >
                              Su
                            </Text>
                          </Column>
                        </Row>
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="items-center justify-evenly my-[0] w-[100%]">
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              1
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              2
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              3
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              4
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              5
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              6
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              7
                            </Button>
                          </Row>
                          <Row className="items-center justify-evenly my-[0] w-[100%]">
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              8
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              9
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              10
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              11
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              12
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              13
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              14
                            </Button>
                          </Row>
                          <Row className="items-center justify-evenly my-[0] w-[100%]">
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              15
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              16
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              17
                            </Button>
                            <Button
                              className="font-semibold lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301_1"
                            >
                              18
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              19
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              20
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              21
                            </Button>
                          </Row>
                          <Row className="items-center justify-evenly my-[0] w-[100%]">
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              22
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              23
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              24
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              25
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              26
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              27
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              28
                            </Button>
                          </Row>
                          <Row className="items-center justify-evenly my-[0] w-[100%]">
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              29
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301"
                            >
                              30
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301_2"
                            >
                              1
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301_2"
                            >
                              2
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301_2"
                            >
                              3
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301_2"
                            >
                              4
                            </Button>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              size="lg"
                              variant="OutlineGray301_2"
                            >
                              5
                            </Button>
                          </Row>
                        </List>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[99%]">
                    <Text
                      className="font-medium text-gray_900 w-[auto]"
                      variant="body5"
                    >
                      Trending Places
                    </Text>
                    <Column
                      className="bg-cover bg-repeat items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_image_gray_400.svg')",
                      }}
                    >
                      <Column className="bg-gradient3  justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                        <Text
                          className="font-medium lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[112px] xl:mt-[140px] 2xl:mt-[157px] 3xl:mt-[189px] text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Morton Sea Beach
                        </Text>
                        <Row className="items-start lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mr-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[45%]">
                          <Img
                            src="images/img_location_15X12.svg"
                            className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[11%]"
                            alt="location"
                          />
                          <Text
                            className="font-light lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] mt-[1px] text-white_A700 w-[auto]"
                            variant="body11"
                          >
                            United States
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[99%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Extra Benefits
                      </Text>
                      <Line className="bg-gray_900_19 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                    </Column>
                    <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center w-[100%]">
                          <Column className="bg-light_green_700 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] items-center lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]">
                            <div className="bg-white_A700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                          </Column>
                          <Text
                            className="font-light lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] text-gray_800 w-[auto]"
                            variant="body9"
                          >
                            Extra Transportations
                          </Text>
                          <Button
                            className="font-normal lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[16%]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillLightgreen700"
                          >
                            $15
                          </Button>
                        </Row>
                        <Line className="bg-gray_900_19 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                    <List
                      className="gap-[0] min-h-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="items-center justify-start lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Radio
                              value="SpaGYM"
                              className="font-light lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_800"
                              inputClassName="h-[20px] mr-[5px] w-[20px]"
                              checked={false}
                              name="SpaGYM"
                              label="Spa  GYM"
                            ></Radio>
                            <Button
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[16%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillYellow900"
                            >
                              $10
                            </Button>
                          </Row>
                          <Line className="bg-gray_900_19 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Radio
                              value="CleaningFee"
                              className="font-light pb-[1px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_800"
                              inputClassName="h-[20px] mr-[5px] w-[20px]"
                              checked={false}
                              name="CleaningFee"
                              label="Cleaning Fee"
                            ></Radio>
                            <Button
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[14%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillYellow900"
                            >
                              $5
                            </Button>
                          </Row>
                          <Line className="bg-gray_900_19 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Radio
                              value="FridgeRental"
                              className="font-light pb-[1px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_800"
                              inputClassName="h-[20px] mr-[5px] w-[20px]"
                              checked={false}
                              name="FridgeRental"
                              label="Fridge Rental"
                            ></Radio>
                            <Button
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[14%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillYellow900"
                            >
                              $7
                            </Button>
                          </Row>
                          <Line className="bg-gray_900_19 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Radio
                              value="SecurityDeposit"
                              className="font-light lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_800"
                              inputClassName="h-[20px] mr-[5px] w-[20px]"
                              checked={false}
                              name="SecurityDeposi"
                              label="Security Deposit"
                            ></Radio>
                            <Button
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[14%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillYellow900"
                            >
                              $9
                            </Button>
                          </Row>
                          <Line className="bg-gray_900_19 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Radio
                              value="SecurityDeposit"
                              className="font-light lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_800"
                              inputClassName="h-[20px] mr-[5px] w-[20px]"
                              checked={false}
                              name="SecurityDeposiOne"
                              label="Security Deposit"
                            ></Radio>
                            <Button
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[14%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillYellow900"
                            >
                              $9
                            </Button>
                          </Row>
                          <Line className="bg-gray_900_19 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                    </List>
                    <Button
                      className="font-semibold lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center uppercase w-[100%]"
                      shape="RoundedBorder5"
                      size="xl"
                      variant="FillLightgreen700"
                    >
                      booking now
                    </Button>
                  </Column>
                  <Column className="bg-gradient4  items-center justify-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs4 w-[99%]">
                    <Column className="justify-start mt-[3px] w-[97%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text
                          className="font-light font-prompt mt-[2px] text-white_A700 w-[auto]"
                          variant="body9"
                        >
                          Senin, 20 Sep 2022
                        </Text>
                        <Text
                          className="font-normal font-sfprodisplay mb-[1px] not-italic text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          3.30 PM
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]">
                        <Img
                          src="images/img_partlycloudy.png"
                          className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[23%]"
                          alt="partlycloudy"
                        />
                        <Column className="w-[67%]">
                          <Text
                            className="font-medium text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            18º C
                          </Text>
                          <Text
                            className="font-medium mt-[2px] text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Hujan Berawan
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[86%]">
                        <Text
                          className="font-light mt-[1px] text-white_A700 w-[auto]"
                          variant="body9"
                        >
                          Terakhir update 3.00 PM
                        </Text>
                        <Img
                          src="images/img_refresh.svg"
                          className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mb-[1px] ml-[2px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                          alt="refresh"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-gradient5  justify-end mb-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] w-[99%]">
                    <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[75%]">
                      <Text
                        className="font-medium text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        Tree House Camping
                      </Text>
                      <Row className="items-center ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[31%]">
                        <div className="bg-white_A700 h-[1px] w-[35%]"></div>
                        <Text
                          className="font-light lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] text-white_A700 w-[auto]"
                          variant="body9"
                        >
                          $29
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="font-semibold leading-[120.00%] text-center text-gray_900 w-[38%]"
                    as="h3"
                    variant="h3"
                  >
                    <span className="text-gray_900 font-prompt lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                      Amazing Camping For
                      <br />
                    </span>
                    <span className="text-gray_900 font-prompt font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                      Real Adventure
                    </span>
                  </Text>
                  <List
                    className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Stack className="listrectanglesix_four">
                      <div className="absolute bg-gray_800 lg:h-[144px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]"></div>
                      <Column
                        className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group100.svg')",
                        }}
                      >
                        <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
                          <Row className="items-center w-[70%]">
                            <Line className="bg-gray_900 h-[1px] w-[22%]" />
                            <Text className="Title1" variant="body4">
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
                              src="images/img_laptop_17.svg"
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
                              alt="airplane Two"
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
                          backgroundImage: "url('images/img_group100.svg')",
                        }}
                      >
                        <Column className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[89%]">
                          <Row className="items-center w-[78%]">
                            <Line className="bg-gray_900 h-[1px] w-[20%]" />
                            <Text className="Title1" variant="body4">
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
                              src="images/img_laptop_18.svg"
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
                              alt="airplane Three"
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
                          backgroundImage: "url('images/img_group100.svg')",
                        }}
                      >
                        <Column className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[89%]">
                          <Row className="items-center w-[71%]">
                            <Line className="bg-gray_900 h-[1px] w-[21%]" />
                            <Text className="Title1" variant="body4">
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
                              src="images/img_laptop_19.svg"
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
                              alt="airplane Four"
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
                </Column>
              </Column>
            </Column>
            <Footer className="bg-gray_900 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AccommodationDetailsPage;
