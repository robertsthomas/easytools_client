import React, { useEffect } from "react";
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
