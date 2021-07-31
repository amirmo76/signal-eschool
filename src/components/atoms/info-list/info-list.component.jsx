import { Wrapper, ListItem } from './info-list.styles';

function InfoList({ items }) {
  return (
    <Wrapper>
      {items.map((cur) => (
        <ListItem key={cur.id}>
          {cur.title}
          {cur.value}
        </ListItem>
      ))}
    </Wrapper>
  );
}

export default InfoList;
