import { Switch } from "radix-ui";
import "./style.css";

const SwitchDemo = () => (
  <form>
    <div className="SwitchWrapper">
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <label
        className="Label"
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        Primeira classe
      </label>
    </div>
  </form>
);

export default SwitchDemo;
