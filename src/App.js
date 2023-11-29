import "./App.css"
import Cards from "./Cards"

import Me from "./Me.jpg"

function App() {
  const firstName = "Aymen"

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cards />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          Hello,{" "}
          <span className={firstName === "Mohamed" ? "case1" : "case2"}>
            {firstName ? firstName : "there"}
          </span>
          !
        </p>

        {firstName && (
          <img
            src={Me}
            alt="Me"
            style={{
              maxWidth: "450px",
              marginTop: "5px",
              marginBottom: "10px",
            }}
          />
        )}
      </div>
    </div>
  )
}

export default App
