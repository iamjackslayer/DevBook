import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profile.action";
import ProfileItem from "./ProfileItem";

const Profiles = ({ dispatch, profile: { profiles, loading } }) => {
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 &&
              profiles.map((profile) =>
                profile.user ? (
                  <ProfileItem key={profile._id} profile={profile} />
                ) : null
              )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Profiles);