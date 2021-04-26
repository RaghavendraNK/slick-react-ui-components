import React from "react";
import { Card as SlickCard } from "slick-react-ui-components";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const Card = (): JSX.Element => {
  return (
    <SlickCard
      cardDetails={{
        description: "Add, view and manage your institutional profiles",
        handleClick: () => {},
        icon: <AccountBalanceIcon />,
        title: "Institution Profiles",
      }}
      type="cardmenu"
    />
  );
};

export default Card;
