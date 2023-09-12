import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "rgba( 255, 255, 255, 0.5 )" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button sx={{ mr: 2, color: "#3B5659" }} component={Link} to="/">
              Home
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button component={Link} to="/login" sx={{ color: "#3B5659" }}>
              로그인
            </Button>
            <Button component={Link} to="/signup" sx={{ color: "#3B5659" }}>
              가입하기
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
