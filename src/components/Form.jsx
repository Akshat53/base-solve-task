import React from "react";
import { Formik, Form } from "formik";
import Select from "./Select";
import Button from "./Button";
import { regionList } from "../utils/constants";
import {
  getRegionsDataAction,
  selectLocationAction,
  updateSelectedLocationAction,
} from "../store/locationActions";
import { connect } from "react-redux";
import "../components/styles.css";

const formikRef = React.createRef();

const AppForm = (props) => {
  const { locationStore, locationActions, handleModal } = props;
  const { locationList, selectedLocation } = locationStore;

  console.log(
    selectedLocation,
    "selectedLocationselectedLocationselectedLocation"
  );
  return (
    <Formik
      initialValues={{
        region: selectedLocation ? selectedLocation.region : "",
        country: selectedLocation ? selectedLocation.countryName : "",
      }}
      innerRef={formikRef}
      onSubmit={async (values) => {
        if (!selectedLocation) {
          locationActions.selectLocation(values.country);
        } else {
          locationActions.updateSelectedLocation(values.country);
        }
        handleModal(false);
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Select
            placeholder={"Select Region"}
            onChange={(e) => {
              let selectedRegion = e.target.value;
              locationActions.getRegionsData(selectedRegion);
              setFieldValue("region", selectedRegion);
            }}
            name={"region"}
            value={values.region}
            options={regionList.map((item) => {
              return {
                value: item,
                label: item,
              };
            })}
          />
          <Select
            placeholder={"Select Country"}
            onChange={(e) => setFieldValue("country", e.target.value)}
            name={"country"}
            value={values.country}
            options={locationList.map((item) => {
              return {
                value: item.value,
                label: item.countryName,
              };
            })}
          />
          <div className="modalButton">
            <Button label={"Add"} type="submit" />
          </div>
        </Form>
      )}
    </Formik>
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
      getRegionsData: (args) => dispatch(getRegionsDataAction(args)),
      selectLocation: (args) => dispatch(selectLocationAction(args)),
      updateSelectedLocation: (args) =>
        dispatch(updateSelectedLocationAction(args)),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppForm);
