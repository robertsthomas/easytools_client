import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getTools } from "../../redux/actions/toolActions";
import { IonSpinner } from "@ionic/react";

interface Props {
	toolState: any;
	getTools: any;
}

const Tools: React.FC<Props> = ({ toolState, getTools }) => {
	useEffect(() => {
		getTools();
	}, []);

	return (
		<div style={{ padding: "0px 10px" }}>
			<p>
				{toolState.loadingTools ? (
					<IonSpinner></IonSpinner>
				) : (
					JSON.stringify(toolState.tools)
				)}
			</p>
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
