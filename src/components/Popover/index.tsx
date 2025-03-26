import "./style.css";
import { Popover } from "radix-ui";

function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">
        Mais informações
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Mais algumas informações...
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default PopoverDemo;