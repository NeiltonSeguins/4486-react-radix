import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import "./style.css";

const CheckboxDemo = () => (
  <form>
    <div className="CheckboxWrapper">
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        Li e aceito os termos e condições deste cadastro.
      </label>
    </div>
  </form>
);

export default CheckboxDemo;
