import { BannerSubtitle, HomeBannerContainer, HomeBannerTitle, LearnMoreBtn } from './HomeBanner.style';

export default function HomeBanner() {
  return (
    <HomeBannerContainer>
      <HomeBannerTitle>
        <span>Powered by the Uniswap Protocol</span>
        <BannerSubtitle>
          <span>The leading decentralized crypto trading protocol, governed by a global community.</span>
        </BannerSubtitle>
      </HomeBannerTitle>
      <div>
        <LearnMoreBtn>Learn More</LearnMoreBtn>
      </div>
    </HomeBannerContainer>
  );
}
