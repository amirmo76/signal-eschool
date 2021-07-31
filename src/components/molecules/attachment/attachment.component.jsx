import Heading from '../../atoms/heading-3';
import IconButton from '../../atoms/icon-button';
import { ReactComponent as DownloadSVG } from '../../../statics/svgs/download.svg';
import {
  Wrapper,
  ContentWrapper,
  Description,
  Download,
} from './attachment.styles';

function Attachment({ title, description }) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading className="heading">{title}</Heading>
        <Description>{description}</Description>
        <Download>
          <IconButton Icon={DownloadSVG} bgLight />
        </Download>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Attachment;
