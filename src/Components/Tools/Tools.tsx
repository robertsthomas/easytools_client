import React, { useEffect, EffectCallback } from "react";

import { connect } from "react-redux";

import { getTools } from "../../redux/actions/toolActions";

interface Props {
	toolState: any;
	getTools: any;
}

const Tools: React.FC<Props> = ({ toolState, getTools }) => {
	useEffect(() => {
		getTools();
	}, []);

	return (
		<div>
			<p>{toolState.loadingTools ? "loading" : "not loading"}</p>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	toolState: state.tools
});

const mapActionsToProps = {
	getTools
};

export default connect(mapStateToProps, mapActionsToProps)(Tools);
