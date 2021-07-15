import { useState } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../atoms/text-field";
import IconButton from "../../atoms/icon-button";

import { StyledNav, Title, SearchWrapper, Actions } from "./toolbar.styles";

import { ReactComponent as LogoSVG } from "../../../statics/svgs/logo.svg";
import { ReactComponent as SearchSVG } from "../../../statics/svgs/search.svg";
import { ReactComponent as BellSVG } from "../../../statics/svgs/bell.svg";
import { ReactComponent as BellBadgedSVG } from "../../../statics/svgs/bell-badged.svg";
import { ReactComponent as SettingsSVG } from "../../../statics/svgs/settings.svg";
import { ReactComponent as LogoutSVG } from "../../../statics/svgs/logout.svg";
import faLang from "../../../statics/values/langs/fa.json";

function Toolbar() {
  const [hasNotification, setHasNotification] = useState(false);
  const { handleSubmit, register } = useForm();

  const onSearchSubmit = (data) => console.log(data);

  return (
    <StyledNav>
      <LogoSVG className="logo" />
      <Title>{faLang.main.title}</Title>
      <SearchWrapper onSubmit={handleSubmit(onSearchSubmit)}>
        <TextField
          placeholder={faLang.search}
          RightIcon={SearchSVG}
          id="search"
          formRef={register("search", { required: true })}
        />
      </SearchWrapper>
      <Actions>
        <IconButton Icon={hasNotification ? BellBadgedSVG : BellSVG} />
        <IconButton Icon={SettingsSVG} />
        <IconButton Icon={LogoutSVG} />
      </Actions>
    </StyledNav>
  );
}

export default Toolbar;
