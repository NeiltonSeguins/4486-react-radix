import { CheckIcon } from "@radix-ui/react-icons";
import { Toast } from "radix-ui";
import { useState } from "react";
import "./style.css";

const ToastDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="Button large" onClick={() => setOpen(true)}>
        Adicionar produto
      </button>
      <Toast.Provider swipeDirection="right">
        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
          <Toast.Description className="ToastDescription">
            <CheckIcon />
            Produto adicionado ao carrinho!
          </Toast.Description>
          <Toast.Action className="ToastAction" asChild altText="Fechar">
            <button className="Button small">x</button>
          </Toast.Action>
        </Toast.Root>

        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </>
  );
};

export default ToastDemo;
