import React, { useState } from "react";
import { SideBar, SubTitle, Text, Button } from "slick-react-ui-components";
import FaceIcon from "@material-ui/icons/Face";
import avatar from "./assets/icons/avatar.svg";
import "./App.scss";
import Card from "./components/Card";

const userDetails = {
  name: "Raghavendra NK",
  role: "Developer",
};

const mainMenuItems = [
  {
    icon: <FaceIcon />,
    title: "BreadCrumbs",
  },
  {
    path: "/card",
    icon: <FaceIcon />,
    title: "Card",
  },
  {
    icon: <FaceIcon />,
    title: "Divider",
  },
  {
    icon: <FaceIcon />,
    title: "Form",
  },
  {
    icon: <FaceIcon />,
    title: "Grid Container",
  },
  {
    icon: <FaceIcon />,
    title: "Heading",
  },
  {
    icon: <FaceIcon />,
    title: "List",
  },
  {
    icon: <FaceIcon />,
    title: "SnackBar",
  },
  {
    icon: <FaceIcon />,
    title: "Sub Title",
  },
  {
    icon: <FaceIcon />,
    title: "Text",
  },
  {
    icon: <FaceIcon />,
    title: "Body",
  },
];

const App = (): JSX.Element => {
  const { name, role } = userDetails;
  const [selectedMenu, setSelectedMenu] = useState(mainMenuItems[0].title);
  return (
    <div className="App">
      <Card />
      <SideBar
        selectedItem={selectedMenu}
        handleMenuClick={(selected: any) => {
          setSelectedMenu(selected.title);
        }}
        mainMenuItems={mainMenuItems}
        profileDetails={
          <>
            <div className="profile-details-section">
              <div className="profile-image">
                <img width="45" height="45" src={avatar} alt="Rag" />
              </div>
              <div className="profile-detail">
                <SubTitle size={1} text={name} />
                <Text text="Adminstrator" type={role} />
              </div>
            </div>
            <div className="manage-profile">
              <Button
                id="manageProfile"
                label="Manage profile"
                variant="text"
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export default App;
