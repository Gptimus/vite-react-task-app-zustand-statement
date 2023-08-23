import { Column } from "./components/column";

function App() {
  return (
    <div className="h-screen flex justify-center items-start">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;
