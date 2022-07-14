import "./styles.scss";
import Rendering from "./components/Rendering";

const menu = [
  {
    comp: <Rendering />,
    label: "Re-rendering",
    visible: true
  }
];

export default function App() {
  return (
    <div className="App">
      {menu.map((obj) => {
        const { comp, label } = obj;

        return (
          <section key={label}>
            <h4>{label}</h4>
            <div className="content">{comp}</div>
          </section>
        );
      })}
    </div>
  );
}
