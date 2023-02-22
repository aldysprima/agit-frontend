import { useState, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const Login = () => {
  const email = useRef();
  const password = useRef();
  // Toggle Visibility
  const [visible, setVisible] = useState(false);
  const showPassword = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Handle login
  const handleLogin = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#fbfdfc"
    >
      <Box
        display={"flex"}
        width="1000px"
        borderRadius="30px"
        border="1px solid #acabab"
      >
        <Stack flex={1} padding="10px 30px" spacing={3}>
          <Typography fontSize="30px" fontWeight={500}>
            Hi, Welcome Back!
          </Typography>
          <Typography textAlign="center" fontSize="40px">
            Search Jobs That Suites you Best
          </Typography>
        </Stack>
        <Stack flex={1} padding="10px 30px" spacing={2}>
          <Typography fontSize="30px" fontWeight={500}>
            Sign in to Jobsearch
          </Typography>
          <TextField label="Email Address" inputRef={email} />
          <TextField
            label="Password"
            type={visible ? "text" : "password"}
            inputRef={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={showPassword}>
                    {visible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              bgcolor: "#212B36",
              "&:hover": {
                backgroundColor: "#200B36",
              },
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
