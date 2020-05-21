import React from 'react';
import '../styles/index.css';
import { css } from 'emotion';

const Home = () => {
	return <div className={cn.container}></div>;
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
};

export default Home;
