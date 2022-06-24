import {useState} from "react";
import { Box, Button, TextField }from"@mui/material";
import { getData } from "../../service";

const Home = () => {

  const [user, setUser] = useState({});

  const [username, setUsername] = useState("");

  const getUserFromGitHub = async () => {
  
    const user = await getData(`/users/${username}`);
    setUsername("");
    setUser(user);
  };

 return (
  <Box sx={{
    display:"flex",
    flexDirection:"column",
  }} m={5}>
    <div>
      <h1>Buscar usuario</h1>
    </div>
    <div>
    <TextField 
    size="small" 
    label="Escriba el nombre del Usuario" 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    />

    <Button variant="contained"color="primary" onClick={getUserFromGitHub}>
     Buscar
    </Button>
    </div>
    <div>
      <h3>User data</h3>
      <img src={user?.avatar_url} alt=""/>
      <h6>{user?.login}</h6>
    </div>
  </Box>
 );
};

export default Home;