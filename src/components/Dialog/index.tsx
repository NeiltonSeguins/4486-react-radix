import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./style.css";
import { Input } from "../Input";
import { Fieldset } from "../Fieldset";
import { Label } from "../Label";
import { Button, IconButton } from "../Button";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Editar perfil</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Editar perfil</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Faça as mudanças no seu perfil e selecione salvar.
        </Dialog.Description>
        <Fieldset>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" defaultValue="Neilton Seguins" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Sobrenome</Label>
          <Input id="username" defaultValue="@neilseg" />
        </Fieldset>
        <div className="ButtonWrapper">
          <Dialog.Close asChild>
            <Button>Salvar mudanças</Button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
