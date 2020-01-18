import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getTools } from "../../redux/actions/toolActions";

interface Props {
  tools: any;
  getTools: any;
}

const Tools: React.FC<Props> = ({ tools, getTools }) => {
  useEffect(() => {
    getTools();
  }, []);

  return (
    <div>
      <p>{tools.length > 0 ? "Tools loaded" : "Tools not found"}</p>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tools: state.tools
});

const mapActionsToProps = {
  getTools
};

export default connect(mapStateToProps, mapActionsToProps)(Tools);
