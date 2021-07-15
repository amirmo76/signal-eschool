import faLang from "../../../statics/values/langs/fa.json";

import { Wrapper } from "./footer.styles";

function Footer(props) {
  return <Wrapper {...props}>{faLang.footer}</Wrapper>;
}

export default Footer;
