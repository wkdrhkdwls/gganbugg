import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Time from "../../utils/CurrentTime";
import styled from "styled-components";
import Wukong from "../../images/Champions/1Cost/Wukong.jpg";
import Alistar from "../../images/Champions/3Cost/Alistar.jpg";
import Samira from "../../images/Champions/4Cost/Samira.jpg";

const Deck = () => {
  return (
    <body>
      <Navbar />
      <DeckMain>
        <main class="container">
          <DeckHeader>
            <DeckHeaderText>
              <DeckHeaderH2>메타 통계</DeckHeaderH2>
              <DeckHeaderP>
                최종 업데이트: <Time />
              </DeckHeaderP>
            </DeckHeaderText>
          </DeckHeader>

          <DeckBody>
            <FirstBox>
              <BoxMain>
                <BoxHeader>
                  <BoxHeaderText>
                    <strong class="text-[16px] font-bold leading-none text-white">
                      사미라 세트
                    </strong>
                    <span class="text-[12px] leading-none text-[#999]"></span>
                  </BoxHeaderText>
                  <BoxHeaderReinForceMain>
                    <BoxHeaderReinForceMain2>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                    </BoxHeaderReinForceMain2>
                  </BoxHeaderReinForceMain>
                </BoxHeader>

                <BoxBody>
                  <BoxBodyImage>
                    <BoxBodyMain>
                      <BoxChampionBody>
                        <BoxChampionBody2>
                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail bdColor="var(--cost1-color)">
                                  <img
                                    src={Wukong}
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail bdColor="var(--cost3-color)">
                                  <img
                                    src={Alistar}
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail bdColor="var(--cost4-color)">
                                  <img
                                    src={Samira}
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                              <BoxChampionCoreItems>
                                <BoxChampionCoreItem>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png"
                                    width="3"
                                    height="3"
                                    alt=""
                                  />
                                </BoxChampionCoreItem>
                                <BoxChampionCoreItem>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/GiantSlayer_1670462997-giant_slayer.png"
                                    width="12"
                                    height="12"
                                    alt=""
                                  />
                                </BoxChampionCoreItem>
                                <BoxChampionCoreItem>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png"
                                    width="12"
                                    height="12"
                                    alt=""
                                  />
                                </BoxChampionCoreItem>
                              </BoxChampionCoreItems>
                            </BoxChampionImgAndItems>
                            <div class="absolute top-0 left-1/2 flex -translate-x-1/2">
                              <div class="inline-flex items-center justify-center rounded-[4px] bg-purple-500 p-[2px] text-center lg:h-[18px] lg:w-[38px]">
                                <strong class="text-[9px] font-bold leading-none text-white lg:text-[11px]">
                                  CORE
                                </strong>
                              </div>
                            </div>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>
                        </BoxChampionBody2>
                      </BoxChampionBody>

                      <BoxSider>
                        <BoxSiderHighReinforce>
                          <BoxSiderHighReinforceHeader>
                            <BoxSiderHighReinforceHeaderText>
                              상위 증강체
                            </BoxSiderHighReinforceHeaderText>
                          </BoxSiderHighReinforceHeader>
                          <BoxSiderHighReinforceBody>
                            <BoxSiderHighReinforceBodyImg>
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/Galio2HeroAugment_1668223910-Galio.jpg"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </BoxSiderHighReinforceBodyImg>
                            <BoxSiderHighReinforceBodyImg>
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/Ascension_1655945403.png"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </BoxSiderHighReinforceBodyImg>
                            <BoxSiderHighReinforceBodyImg>
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/standunited1.tft_set6.png"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </BoxSiderHighReinforceBodyImg>
                          </BoxSiderHighReinforceBody>
                        </BoxSiderHighReinforce>
                        <BoxSiderAvg>
                          <BoxSiderAvgText>평균 등수</BoxSiderAvgText>
                        </BoxSiderAvg>
                        <BoxSiderTopRate>
                          <BoxSiderTopRateThreeIndex>
                            <BoxSiderTopRateIndex>TOP4</BoxSiderTopRateIndex>
                            <BoxSiderTopRateRate>
                              <span>62.1%</span>
                            </BoxSiderTopRateRate>
                          </BoxSiderTopRateThreeIndex>
                          <BoxSiderTopRateThreeIndex>
                            <BoxSiderTopRateIndex>승률</BoxSiderTopRateIndex>
                            <BoxSiderTopRateRate>
                              <span>27.2%</span>
                            </BoxSiderTopRateRate>
                          </BoxSiderTopRateThreeIndex>
                          <BoxSiderTopRateThreeIndex>
                            <BoxSiderTopRateIndex>픽률</BoxSiderTopRateIndex>
                            <BoxSiderTopRateRate>
                              <span>1.07%</span>
                            </BoxSiderTopRateRate>
                          </BoxSiderTopRateThreeIndex>
                        </BoxSiderTopRate>
                      </BoxSider>
                    </BoxBodyMain>
                  </BoxBodyImage>
                </BoxBody>
              </BoxMain>
            </FirstBox>
            <SecondBox>
              <BoxMain>
                <BoxHeader>
                  <BoxHeaderText>
                    <strong class="text-[16px] font-bold leading-none text-white">
                      사미라 세트
                    </strong>
                    <span class="text-[12px] leading-none text-[#999]"></span>
                  </BoxHeaderText>
                  <BoxHeaderReinForceMain>
                    <BoxHeaderReinForceMain2>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                      <BoxHeaderReinForceDummy>
                        <img
                          src="//cdn.lolchess.gg/upload/images/traits/Arsenal_black_1668169947-Arsenal.svg"
                          alt=""
                          class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                        />
                      </BoxHeaderReinForceDummy>
                    </BoxHeaderReinForceMain2>
                  </BoxHeaderReinForceMain>
                </BoxHeader>

                <BoxBody>
                  <BoxBodyImage>
                    <BoxBodyMain>
                      <BoxChampionBody>
                        <BoxChampionBody2>
                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                              <BoxChampionCoreItems>
                                <BoxChampionCoreItem>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png"
                                    width="3"
                                    height="3"
                                    alt=""
                                  />
                                </BoxChampionCoreItem>
                                <BoxChampionCoreItem>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/GiantSlayer_1670462997-giant_slayer.png"
                                    width="12"
                                    height="12"
                                    alt=""
                                  />
                                </BoxChampionCoreItem>
                                <BoxChampionCoreItem>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png"
                                    width="12"
                                    height="12"
                                    alt=""
                                  />
                                </BoxChampionCoreItem>
                              </BoxChampionCoreItems>
                            </BoxChampionImgAndItems>
                            <div class="absolute top-0 left-1/2 flex -translate-x-1/2">
                              <div class="inline-flex items-center justify-center rounded-[4px] bg-purple-500 p-[2px] text-center lg:h-[18px] lg:w-[38px]">
                                <strong class="text-[9px] font-bold leading-none text-white lg:text-[11px]">
                                  CORE
                                </strong>
                              </div>
                            </div>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>

                          <BoxChampionMain>
                            <BoxChampionImgAndItems>
                              <BoxChampionImg>
                                <BoxChampionImgDetail>
                                  <img
                                    src="//cdn.lolchess.gg/upload/images/champions/Galio_1668167832-Galio.jpg"
                                    class="h-full w-full object-cover object-center"
                                    alt=""
                                  />
                                </BoxChampionImgDetail>
                              </BoxChampionImg>
                            </BoxChampionImgAndItems>
                          </BoxChampionMain>
                        </BoxChampionBody2>
                      </BoxChampionBody>

                      <BoxSider>
                        <BoxSiderHighReinforce>
                          <BoxSiderHighReinforceHeader>
                            <BoxSiderHighReinforceHeaderText>
                              상위 증강체
                            </BoxSiderHighReinforceHeaderText>
                          </BoxSiderHighReinforceHeader>
                          <BoxSiderHighReinforceBody>
                            <BoxSiderHighReinforceBodyImg>
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/Galio2HeroAugment_1668223910-Galio.jpg"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </BoxSiderHighReinforceBodyImg>
                            <BoxSiderHighReinforceBodyImg>
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/Ascension_1655945403.png"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </BoxSiderHighReinforceBodyImg>
                            <BoxSiderHighReinforceBodyImg>
                              <img
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="//cdn.lolchess.gg/upload/images/items/standunited1.tft_set6.png"
                                alt=""
                                width="34"
                                height="34"
                              />
                            </BoxSiderHighReinforceBodyImg>
                          </BoxSiderHighReinforceBody>
                        </BoxSiderHighReinforce>
                        <BoxSiderAvg>
                          <BoxSiderAvgText>평균 등수</BoxSiderAvgText>
                        </BoxSiderAvg>
                        <BoxSiderTopRate>
                          <BoxSiderTopRateThreeIndex>
                            <BoxSiderTopRateIndex>TOP4</BoxSiderTopRateIndex>
                            <BoxSiderTopRateRate>
                              <span>62.1%</span>
                            </BoxSiderTopRateRate>
                          </BoxSiderTopRateThreeIndex>
                          <BoxSiderTopRateThreeIndex>
                            <BoxSiderTopRateIndex>승률</BoxSiderTopRateIndex>
                            <BoxSiderTopRateRate>
                              <span>27.2%</span>
                            </BoxSiderTopRateRate>
                          </BoxSiderTopRateThreeIndex>
                          <BoxSiderTopRateThreeIndex>
                            <BoxSiderTopRateIndex>픽률</BoxSiderTopRateIndex>
                            <BoxSiderTopRateRate>
                              <span>1.07%</span>
                            </BoxSiderTopRateRate>
                          </BoxSiderTopRateThreeIndex>
                        </BoxSiderTopRate>
                      </BoxSider>
                    </BoxBodyMain>
                  </BoxBodyImage>
                </BoxBody>
              </BoxMain>
            </SecondBox>
          </DeckBody>
        </main>
      </DeckMain>
      <Footer />
    </body>
  );
};

const DeckMain = styled.div`
  position: relative;
  min-height: 150vh;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgb(34 34 34 / var(--tw-bg-opacity));
  padding-bottom: 80px;
`;
const DeckHeader = styled.div`
  min-height: 20vh;
  margin-bottom: 20px;
  background: url("https://cdn.dak.gg/tft/images2/tft/bg/meta-stats.jpeg?20221208")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

const DeckHeaderText = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeckHeaderH2 = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(202 147 114 / var(--tw-text-opacity));
`;

const DeckHeaderP = styled.p`
  font-size: 12px;
  line-height: 130%;
  --tw-text-opacity: 1;
  color: rgb(214 214 214 / var(--tw-text-opacity));
`;

const DeckBody = styled.div`
  flex-direction: column;
  gap: 16px;
`;
const FirstBox = styled.div`
  margin-bottom: 50px;
`;
const SecondBox = styled.div`
  margin-bottom: 50px;
`;

const BoxMain = styled.div`
  flex-direction: column;
  gap: 1px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(50 50 50 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(50 50 50 / var(--tw-bg-opacity));
`;

const BoxHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: col;
  justify-content: space-between;
  gap: 16px;
  --tw-bg-opacity: 1;
  background-color: rgb(45 47 55 / var(--tw-bg-opacity));
  padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 54px;
  @media (min-width: 1024px) {
    min-height: 50px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
  @media (min-width: 1024px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  @media (min-width: 1024px) {
    padding-right: 16px;
  }
`;

const BoxHeaderText = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 768px) {
    gap: 4px;
  }
`;

const BoxHeaderReinForceMain = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  gap: 22px;
`;

const BoxHeaderReinForceMain2 = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const BoxHeaderReinForceDummy = styled.div`
  background-image: url("https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg");
  width: 26px;
  height: 26px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BoxBody = styled.div``;

const BoxBodyImage = styled.div`
  background: url("https://cdn.dak.gg/tft/images2/tft/meta/champions/TFT8_Samira.jpg");
  background-size: cover;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;
`;

const BoxBodyMain = styled.div`
  display: flex;
  min-height: 150px;
  flex-direction: column;
  align-items: center;
  --tw-bg-opacity: 1;
  background-color: rgb(39 40 46 / var(--tw-bg-opacity));
  padding-top: 16px;
  padding-bottom: 16px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    gap: 33px;
  }
  @media (min-width: 1024px) {
    background-color: transparent;
  }
  @media (min-width: 1024px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media (min-width: 1024px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (min-width: 1280px) {
    padding-left: 164px;
  }
  @media (min-width: 1280px) {
    padding-right: 24px;
  }
`;

const BoxChampionBody = styled.div`
  margin-bottom: 16px;
  max-width: 342px;
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    max-width: 456px;
  }
  @media (min-width: 1024px) {
    flex-shrink: 0;
  }
`;

const BoxChampionBody2 = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const BoxChampionMain = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding-top: 9px;
`;

const BoxChampionImgAndItems = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const BoxChampionImg = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
`;

const BoxChampionImgDetail = styled.div`
  position: relative;
  display: inline-flex;
  height: 45px;
  width: 45px;
  overflow: hidden;
  border-radius: 8px;
  border-width: 2.5px;
  border-color: ${(props) => props.bdColor};
`;

const BoxChampionCoreItems = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const BoxChampionCoreItem = styled.div`
  position: relative;
  height: 15px;
  width: 15px;
  overflow: hidden;
`;

const BoxSider = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5px;
  @media (min-width: 640px) {
    width: auto;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const BoxSiderHighReinforce = styled.div`
  display: flex;
  height: 98px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(29 29 29 / var(--tw-bg-opacity));
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: 640px) {
    width: 126px;
  }
  @media (min-width: 640px) {
    padding-left: 6px;
    padding-right: 6px;
  }
  @media (min-width: 1024px) {
    width: 130px;
  }
`;

const BoxSiderHighReinforceHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;

const BoxSiderHighReinforceHeaderText = styled.span`
  font-size: 12px;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity));
`;

const BoxSiderHighReinforceBody = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  @media (min-width: 1024px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  @media (min-width: 1024px) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const BoxSiderHighReinforceBodyImg = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 30px;
  width: 30px;
  overflow: hidden;
`;

const BoxSiderAvg = styled.div`
  //**text */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  //**text */
  height: 98px;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(29 29 29 / var(--tw-bg-opacity));
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: 640px) {
    width: 126px;
  }
`;

const BoxSiderAvgText = styled.span`
  color: white;
`;

const BoxSiderTopRate = styled.div`
  display: flex;
  height: 98px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(29 29 29 / var(--tw-bg-opacity));
  padding: 12px 16px;
  @media (min-width: 640px) {
    width: 126px;
  }
  @media (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const BoxSiderTopRateThreeIndex = styled.dl`
  display: flex;
  justify-content: space-between;
`;

const BoxSiderTopRateIndex = styled.dt`
  font-size: 12px;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity));
`;

const BoxSiderTopRateRate = styled.dt`
  font-size: 12px;
  line-height: 1;
  color: white;
`;

export default Deck;
