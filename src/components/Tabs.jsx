import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const AppTab = (props) => {
  const { tabList, value ,onChange} = props;
  return (
    <Tabs
      defaultActiveKey={value}
      id="uncontrolled-tab-example"
      className="mb-3"
      onSelect={onChange}
    >
      {tabList.map((tab, index) => (
        <Tab eventKey={tab.eventKey} title={tab.title} key={index} >
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default AppTab;
