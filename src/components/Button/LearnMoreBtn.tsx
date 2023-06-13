import { useScrollToBottom } from '../../hooks/useScrollToBottom';
import { LearnMoreBtnContainer, MoreInfoButton } from './LearnMoreBtn.style';

export default function LearnMoreBtn() {
  const scrollToBottom = useScrollToBottom();

  return (
    <LearnMoreBtnContainer>
      <span onClick={scrollToBottom}>Learn More</span>
      <MoreInfoButton alt="Logo" src="/images/angle.png" />
    </LearnMoreBtnContainer>
  );
}
