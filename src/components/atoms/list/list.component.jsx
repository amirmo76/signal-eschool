import { Wrapper, ListItem, Index } from './list.styles';

function List({ items }) {
  return (
    <Wrapper>
      {items.map((cur, i) => (
        <ListItem key={i}>
          <Index>{i + 1}</Index>
          {cur}
        </ListItem>
      ))}
    </Wrapper>
  );
}

export default List;
