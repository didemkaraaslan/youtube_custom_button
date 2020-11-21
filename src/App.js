import React from "react";
import Button from "./components/Button";
function App() {
  const handleClick = (event) => {
    console.log("Click!");
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginTop: 250,
        marginLeft: 450,
        width: "50%",
      }}
    >
      <Button color="purple" round onClick={handleClick}>
        Mor Buton
      </Button>

      <Button color="blue" round onClick={handleClick}>
        Mavi Buton
      </Button>

      <Button color="red" block fullWidth onClick={handleClick}>
        Kırmızı Buton
      </Button>
    </div>
  );
}

export default App;
