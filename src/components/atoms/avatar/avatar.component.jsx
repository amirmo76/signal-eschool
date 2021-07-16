import { Wrapper, Image } from "./avatar.styles";

function Avatar({ image, ...otherProps }) {
  return (
    <Wrapper {...otherProps}>
      <Image src={image} />
    </Wrapper>
  );
}

export default Avatar;
