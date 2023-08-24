import { Column } from "./components/column";

function App() {
  return (
    <div className="flex justify-center mt-7">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;
