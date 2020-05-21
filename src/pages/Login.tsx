import React from 'react';
import '../styles/index.css';
import { css } from 'emotion';

const Login = () => {
	return (
		<div className={cn.container}>
			<div className={cn.form}>
				<h1 className={cn.headerText}>
					Welcome to Twitter TopLinks by Len Joseph
				</h1>
			</div>
		</div>
	);
};

const cn = {
	container: css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background: #00b4d8;
	`,
	form: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 600px;
		width: 600px;
		background: #f8f8f8;
		box-shadow: 0px 0px 5px grey;
		border-radius: 8px;
	`,
	headerText: css`
		display: flex;
		margin: 20px;
		text-align: center;
		font-family: Ubuntu, sans-serif;
		color: #909090;
	`,
};

export default Login;
