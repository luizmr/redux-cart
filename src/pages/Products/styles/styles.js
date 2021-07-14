import styled from 'styled-components';

const SearchBox = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;

	svg {
		color: #fff;
		background-color: #f08e1c;
		padding: 8px;
		transform: scale(1.3);
		border-radius: 50%;
		z-index: 100;
		transition: all 0.3s ease-in-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.4);
		}
	}

	.filter__search {
		background-color: #f5d1ae;
		width: 90%;
		position: relative;
		transform: translateX(-10px);

		input {
			background-color: #f5d1ae;
			width: 100%;
			color: #004374;
			padding: 10px 10px 10px 30px;
			border: none;
			border-radius: 20px;
			font-weight: 600;
			font-family: 'Open Sans';

			&::placeholder {
				color: #004374;
			}

			&:active,
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
`;

export { SearchBox };
