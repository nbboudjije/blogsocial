import { Navbar, Sidebar, Rightbar, Feed } from "./components/rout";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stack
        direction="row"
        spacing={{ xs: 0, md: 2 }}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
