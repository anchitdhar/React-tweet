import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
	return(
		<div className="tweet">
			<Avatar />
			<div className="content">
				<NameWithHandle />
				<Time />
				<Message />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton />
					<LikeButton />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	);
}

const Time = () => (
	<span className="time">3h ago</span>
);

const ReplyButton = () => (
<i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
	<i className="fa fa-retweet retweet-button" />
	);

const LikeButton = () => (
	<i className="fa fa-heart like-button" />
	);

const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button" />
	);

function Message() {
	return(
	<div className="message">
		This is lesss
	</div>
	);
}

function NameWithHandle(){
	return(
		<span className="name-with-handle">
			<span className="name">Your Name</span>
			<span className="handle">@yourHandle</span>
		</span>
		);
}

function Avatar(){
	return(
	<img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
	);
}

ReactDOM.render(<Tweet />,
	document.querySelector('#root'));