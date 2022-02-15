import React from "react";
// import { useQuery } from "@apollo/client";
// import ThoughtList from "../components/ThoughtList";
// import ThoughtForm from "../components/ThoughtForm";
import model from "../assets/gachapon_machine_red/scene.gltf";
// import { QUERY_THOUGHTS } from "../utils/queries";
// import "@google/model-viewer";
const Home = () => {
	// const { loading, data } = useQuery(QUERY_THOUGHTS);
	// const thoughts = data?.thoughts || [];

	return (
		<section class="hero">
			<div class="hero-head">
				<p class="title is-flex is-justify-content-center">
					GachaWorld
				</p>
				<p class="subtitle is-flex is-justify-content-center">
					A Toy Capsule Collection Game
				</p>
			</div>
			<div class="hero-body">
				<figure class="image is-flex is-justify-content-center">
					<img
						class="is-rounded"
						src="https://bulma.io/images/placeholders/128x128.png"
					/>
				</figure>
			</div>
			<div class="hero-foot is-flex is-justify-content-center">
				/////////
			</div>
		</section>
	);
};

export default Home;
