import { Wrapper } from './rich-text.styles';

function RichText({ value }) {
  return (
    <Wrapper>
      {value.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i}>
                {block.children.map((inlineBlock, i) => (
                  <span key={i}>{inlineBlock.text}</span>
                ))}
              </p>
            );
          case 'image':
            return (
              <img
                src={block.children[0].url}
                alt={block.children[0].alt}
                key={i}
              />
            );
          default:
            return null;
        }
      })}
    </Wrapper>
  );
}

export default RichText;
