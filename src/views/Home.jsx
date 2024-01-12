import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Form from "../components/Form";
import { connect } from "react-redux";
import { tableHeaders } from "../utils/constants";
import { updateLocationAction } from "../store/locationActions";
import "../components/styles.css";

const Home = (props) => {
  const { locationStore, locationActions } = props;
  const { selectedLocations } = locationStore;
  const [openModal, setOpenModal] = useState(false);
  const [newValue, setNewValue] = useState("Location");
  const [selectedLocationsData, setSelectedLocationData] = useState([]);

  useEffect(() => {
    setSelectedLocationData(
      selectedLocations.length
        ? selectedLocations.map((item) => {
            return {
              ...item,
              action: (
                <Button
                  className="editBtn"
                  label={"Edit"}
                  onClick={() => {
                    handleModal(true);
                    locationActions.updateLocation(item);
                  }}
                />
              ),
            };
          })
        : []
    );
  }, [selectedLocations,locationActions]);

  const tabList = [
    {
      key: 1,
      title: "Location",
      eventKey: "Location",
      content: (
        <>
          <div className={"addButton"}>
            <Button label={"+"} onClick={() => handleModal(true)} />
          </div>

          <Table headers={tableHeaders} data={selectedLocationsData} />
        </>
      ),
    },
    {
      key: 2,
      title: "Companies",
      eventKey: "Companies",
      content: (
        <>
          <div className={"addButton"}>
            <Button label={"+"} onClick={() => handleModal(true)} />
          </div>
          <Table headers={tableHeaders} data={selectedLocationsData} />
        </>
      ),
    },
    {
      key: 3,
      title: "Stats",
      eventKey: "Stats",
      content: (
        <>
          <div className={"addButton"}>
            <Button label={"+"} onClick={() => handleModal(true)} />
          </div>
          <Table headers={tableHeaders} data={selectedLocationsData} />
        </>
      ),
    },
  ];

  const handleChange = (newValue) => {
    setNewValue(newValue);
  };

  const handleModal = (val) => {
    setOpenModal(val);
  };

  return (
    <div className="container">
      <Header title={"Inventory"} />
      <Tabs tabList={tabList} onChange={handleChange} value={newValue} />
      <Modal
        show={openModal}
        header={"Add New Location"}
        handleClose={() => {
          handleModal(false);
          locationActions.updateLocation(null);
        }}
      >
        <Form handleModal={handleModal} />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locationStore: state.locationStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    locationActions: {
      updateLocation: (args) => dispatch(updateLocationAction(args)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
