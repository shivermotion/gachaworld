import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import CommentList from "../components/CommentList";
// import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const ToyCollection = () => {
	// Use `useParams()` to retrieve value of the route parameter `:profileId`
	const { thoughtId } = useParams();

	const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
		// pass URL parameter
		variables: { thoughtId: thoughtId },
	});

	const thought = data?.thought || {};

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div class="columns">
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<button
								class="card-header-icon"
								aria-label="more options"
							>
								<span class="icon">
									<i
										class="fas fa-angle-down"
										aria-hidden="true"
									></i>
								</span>
							</button>
						</header>
						<div class="card-content">
							<div class="content">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
						</div>
						<footer class="card-footer">
							<a
								href="#"
								class="card-footer-item"
							>
								Save
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Edit
							</a>
							<a
								href="#"
								class="card-footer-item"
							>
								Delete
							</a>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
};

export default ToyCollection;
