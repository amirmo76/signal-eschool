import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';

export const Wrapper = styled.ul`
  list-style-type: none;
  color: ${colors.grey};

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  .success {
    color: ${colors.success};
  }

  .danger {
    color: ${colors.danger};
  }

  .warning {
    color: ${colors.primary_2};
  }
`;
