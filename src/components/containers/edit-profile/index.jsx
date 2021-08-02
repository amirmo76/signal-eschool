import Card from '../../atoms/card';
import Section from '../../molecules/section';

import faLang from '../../../statics/values/langs/fa.json';

function Index() {
  return (
    <Card>
      <Section title={faLang.my_info}></Section>
    </Card>
  );
}

export default Index;
