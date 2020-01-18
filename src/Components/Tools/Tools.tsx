import React, { useEffect } from "react";
<<<<<<< HEAD

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
      <p>{tools ? "Tools loaded" : "Tools not found"}</p>
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
=======
import axios from "axios";

interface Props {}

const Tools: React.FC<Props> = () => {
	useEffect(() => {
		axios.get("/tools").then(() => console.log("searching tools"));
	}, []);

	return (
		<div>
			<p>No Tools Found</p>
		</div>
	);
};

export default Tools;
>>>>>>> e9ac60b9c0936a62140e3fbd5bdfffde273a06e6
