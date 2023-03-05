import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Button } from "@mui/material";

export default function SelectAño() {
	const [age, setAge] = React.useState("");

	const handleChange = (e) => {
		setAge(e.target.value);
	};

	return (
		<FormControl fullWidth mt="100%">
			<InputLabel id="demo-simple-select-label">Año</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={age}
				label="age"
				onChange={handleChange}
			>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
			</Select>

			<br></br>
			<TextField id="outlined-basic" label="Sección" variant="outlined" />
			<br></br>
			<Button size="large" variant="contained" color="success">
				Crear sección
			</Button>
		</FormControl>
	);
}
