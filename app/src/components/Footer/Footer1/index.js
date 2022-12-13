import React from "react";

import { Column, Row, Text, Img, Button, Line, Stack } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="items-center justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mx-[auto] w-[67%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="rowsubscribeourn1" as="h3" variant="h3">
                  <span className="text-white_A700 lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Subscribe Our Newsletter
                    <br />
                  </span>
                  <span className="text-white_A700 font-hairline lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                    Get Every Update
                  </span>
                </Text>
                <Row className="bg-white_A700 items-center justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius5 w-[44%]">
                  <Img src="images/img_mail.svg" className="mail" alt="mail" />
                  <Text className="rowmail1" variant="body9">
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
                    <div className="bg-transparent font-prompt font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] uppercase">
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
                  src="images/img_campingtent1_21.svg"
                  className="campingtentOne_One"
                  alt="campingtentOne One"
                />
                <Text className="Logo2" as="h4" variant="h4">
                  Vedhak
                </Text>
              </Row>
              <Text className="Link13" variant="body9">
                Sit amet consectetur adipiscinelit
                <br />
                Sem et aliquam enimdeassa ornare
                <br />
                vulputate neque feugiat secursun
                <br />
                blandit volutpat hendr mauris
              </Text>
              <Img
                src="images/img_social_9.svg"
                className="Social"
                alt="Social"
              />
            </Column>
            <Column className="justify-start w-[6%]">
              <Text className="Links" variant="body5">
                Links
              </Text>
              <Text className="HomePricingAb1" variant="body9">
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
              <Text className="Links" variant="body5">
                Services
              </Text>
              <Text className="HomePricingAb1" variant="body9">
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
              <Text className="Links" variant="body5">
                Support
              </Text>
              <Text className="font-prompt description_Eleven" variant="body9">
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
              <Text className="Links" variant="body5">
                Location
              </Text>
              <Text className="font-prompt country" variant="body9">
                55 Main Street, 2nd-Block
                <br />
                melbourne, Australia
              </Text>
              <Text className="font-prompt Contact" variant="body5">
                Contact
              </Text>
              <Text className="font-prompt email" variant="body9">
                support@gmail.com
              </Text>
              <Text className="font-prompt test_000123456" variant="body9">
                <span className="text-gray_300 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                  +000{" "}
                </span>
                <span className="text-gray_300 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  (
                </span>
                <span className="text-gray_300 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                  123
                </span>
                <span className="text-gray_300 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  )
                </span>
                <span className="text-gray_300 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
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
            <Text className="font-prompt Copy2022Vedha" variant="body9">
              <span className="text-gray_300 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                Copy@2022{" "}
              </span>
              <span className="text-yellow_900 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                Vedhak,
              </span>
              <span className="text-gray_300 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                {" "}
                All Right Reserved
              </span>
            </Text>
            <Text className="font-prompt language_Two1" variant="body9">
              Setting & privacy Faqs Support
            </Text>
          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer1;
