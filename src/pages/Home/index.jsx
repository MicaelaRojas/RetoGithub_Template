import { useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";
import { Typography } from '@mui/material';
import { getData } from "../../service";
import { IconButton } from '@mui/material';

const Home = () => {

  const [user, setUser] = useState({});

  const [username, setUsername] = useState("");

  const getUserFromGitHub = async () => {

    const user = await getData(`/users/${username}`);
    setUsername("");
    setUser(user);
  };

  return (


    <table>
      <tbody>
        <tr>
          <td>
          <img src={user?.avatar_url} alt="" />
          </td>
          <td >
     
          <Box sx={{
            
              flexDirection: "column",
            }} m={5}>
            
            <h1>Nombre: {user?.name}</h1>

             <div>
               <h3>Usuario: {user?.login}</h3>
               <h4>Biografía: {user?.bio}</h4>
               <h4>Número de Seguidores: {user?.followers}</h4>
               <h4>Número de repositorios: {user?.public_repos}</h4>
             </div>
           
             </Box>

          </td>
          <td>

            <Box sx={{
              display: "flex",
              flexDirection: "column",
              
            }} m={5}>
              <div>
                <h1>Buscar usuario de GitHub</h1>
              </div>
              <div>
                <TextField
                  size="small"
                  label="Nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div>
                  &nbsp;
                </div>
                <Button size="large" variant="contained" color="primary" onClick={getUserFromGitHub} >
                  Buscar
                </Button>
              </div>
            </Box>
          </td>
        </tr>
      </tbody>
    </table>

  );
};

export default Home;