import React from 'react';

const Square = (props) => {

	const {value,SquareButton} = props

	return (
		<button className="square" onClick={() => SquareButton(value)}>{value}</button>
	);
};

export default Square;