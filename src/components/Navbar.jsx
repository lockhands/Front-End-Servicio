import React from "react";
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const MenuButton = styled(Typography)(({ theme }) => ({
	marginRight: theme.spacing(2),
}));

const Container = styled(Typography)(({ theme }) => ({
	offset: theme.mixins.toolbar,
}));

const Navbar = ({ names }) => {
	const navigate = useNavigate();

	const navegador = (data) => {
		navigate(data, { state: names });
	};

	return (
		<div>
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<Box sx={{ flexGrow: 3, display: "flex", alignItems: "center" }}>
						<IconButton color="inherit" aria-label="menu" sx={{ spacing: 2 }}>
							<MenuIcon />
						</IconButton>
						{names.map((name, idx) => {
							return (
								<MenuButton
									key={idx}
									onClick={() => {
										navegador(name[1]);
									}}
									variant="h6"
								>
									{name[0]}
								</MenuButton>
							);
						})}
					</Box>
					<MenuButton variant="h6">Mi cuenta</MenuButton>
					<MenuButton
						onClick={() => {
							navigate("/");
						}}
						variant="h6"
					>
						Cerrar Sesión
					</MenuButton>
				</Toolbar>
			</AppBar>
			<Container></Container>
		</div>
	);
};

export default Navbar;
