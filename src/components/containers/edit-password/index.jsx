import Card from '../../atoms/card';
import Section from '../../molecules/section';
import PasswordForm from '../../organisms/password-form';

import faLang from '../../../statics/values/langs/fa.json';

function Index() {
  return (
    <Card>
      <Section title={faLang.change_password}>
        <PasswordForm />
      </Section>
    </Card>
  );
}

export default Index;
