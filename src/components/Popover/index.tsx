import "./style.css";
import { Popover } from "radix-ui";

function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild className="PopoverTrigger">
        <a href="#">Mais informações</a>
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
