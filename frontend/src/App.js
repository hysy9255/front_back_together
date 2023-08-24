import "./App.css";
import PostBox from "./components/PostBox";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div className="outer">
        <PostBox>
          <Button></Button>
        </PostBox>
        <PostBox></PostBox>
      </div>
    </div>
  );
}

export default App;
