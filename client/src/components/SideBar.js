import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { getLoggedInUserData } from "../utils/storage";

export default ({
  visible,
  activeItem,
  handleSidebarHide,
  handleItemClick
}) => {
  const id = getLoggedInUserData() && getLoggedInUserData().user.user_id;
  const admin =
    getLoggedInUserData() && getLoggedInUserData().user.role === "moderator";
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      color={"blue"}
      onHide={handleSidebarHide}
      visible={visible}
      width="thin"
    >
      {admin && (
        <Menu.Item
          name="Home"
          onClick={handleItemClick}
          as={Link}
          active={activeItem === "Home"}
          to="/admin-Profiles"
        >
          <Icon name="user plus"></Icon>
          Admin Profiles
        </Menu.Item>
      )}
      <Menu.Item
        name="Home"
        onClick={handleItemClick}
        as={Link}
        active={activeItem === "Home"}
        to="/"
      >
        <Icon name="home"></Icon>
        Home
      </Menu.Item>
      <Menu.Item
        name="Opportunities"
        active={activeItem === "Opportunities"}
        onClick={handleItemClick}
        as={Link}
        to="/opportunities"
      >
        <Icon name="clipboard list"></Icon>
        Opportunity List
      </Menu.Item>
      <Menu.Item
        name="ApplicantsList"
        active={activeItem === "ApplicantsList"}
        onClick={handleItemClick}
        as={Link}
        to="/applicants-list"
      >
        <Icon name="clipboard list"></Icon>
        Applicants List
      </Menu.Item>
      {getLoggedInUserData() && getLoggedInUserData().user.role === "company" && (
        <Menu.Item
          name="Opportunity"
          onClick={handleItemClick}
          as={Link}
          active={activeItem === "Opportunity"}
          to="/create-opportunity"
        >
          <Icon name="idea"></Icon>
          Create Opportunity
        </Menu.Item>
      )}
      {getLoggedInUserData() &&
        getLoggedInUserData().user.role === "applicant" && (
          <Menu.Item
            name="My Profile"
            onClick={handleItemClick}
            as={Link}
            active={activeItem === "My Profile"}
            to={`/applicant-profile/${id}`}
          >
            <Icon name="address card outline"></Icon>
            My Profile
          </Menu.Item>
        )}
      {getLoggedInUserData() && getLoggedInUserData().user.role === "company" && (
        <Menu.Item
          name="My Company"
          active={activeItem === "My Company"}
          onClick={handleItemClick}
          as={Link}
          to={`/company-profile/${id}`}
        >
          <Icon name="cubes" />
          My Company
        </Menu.Item>
      )}
    </Sidebar>
  );
};
