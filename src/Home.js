import Button from "./Components/Button";
import Typography from "./Components/Typography";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import Selectoptions from "./Components/SelectOption";

function Home() {
  return (
    <div>
      <Navbar text="Whizzy Academy" color="#1e88e5" />

      <h1>My Components</h1>
      <Button text="Login" color="#d50000" />
      <Button text="Signup" color="#1e88e5" />
      <Button text="Cancel" color="#880e4f" />
      <Button text="Submit" color="#003300" />
      <h1>Radio Input Field</h1>
      <input type="radio" />

      <h1>Checkbox Input Field</h1>
      <input type="checkbox" />
      <h1>Text Area</h1>
      <Textarea />
      <h1>Input Field </h1>
      <div className="inputT">
        <input className="username" type="text" placeholder="Enter Username" />
        <input
          className="password"
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <h1>Select Options</h1>
      <Selectoptions />
      <h1>Typography</h1>
      <Typography fontStyle="italic" text="A quick brown fox jumps over a lazy dog" />
      <Typography fontFamily="cursive" text="A quick brown fox jumps over a lazy dog" />
      <Typography fontFamily="fantasy" text="A quick brown fox jumps over a lazy dog" />
      
    </div>
  );
}

export default Home;
