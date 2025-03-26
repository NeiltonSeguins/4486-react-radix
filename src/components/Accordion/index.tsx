import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import styled from "styled-components";

const faqData = [
  {
    question: "O que é React?",
    answer:
      "React é uma biblioteca JavaScript para construção de interfaces de usuário interativas e reutilizáveis.",
  },
  {
    question:
      "Qual a diferença entre um componente de classe e um componente funcional?",
    answer:
      "Componentes de classe usam `class` e têm métodos de ciclo de vida, enquanto componentes funcionais são funções que podem usar hooks para gerenciar estado e efeitos colaterais.",
  },
  {
    question: "O que são hooks no React?",
    answer:
      "Hooks são funções que permitem o uso de estado e outras funcionalidades do React em componentes funcionais, como `useState` e `useEffect`.",
  },
  {
    question: "Como funciona o Virtual DOM?",
    answer:
      "O Virtual DOM é uma representação leve do DOM real. O React usa ele para otimizar as atualizações, minimizando alterações diretas no DOM real e melhorando o desempenho.",
  },
  {
    question: "O que é a Context API no React?",
    answer:
      "A Context API permite compartilhar valores entre componentes sem precisar passar props manualmente em cada nível da árvore.",
  },
];

const StyledAccortionItem = styled(Accordion.Item)`
  overflow: hidden;
  margin-top: 4px;

  &:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--mauve-12);
  }
`;

const AccordionDemo = () => {
  return (
    <Accordion.Root className="AccordionRoot" type="single" collapsible>
      {faqData.map((faq, index) => {
        return (
          <StyledAccortionItem
            className="AccordionItem"
            key={index}
            value={`item-${index}`}
          >
            <Accordion.Trigger className="AccordionTrigger">
              {faq.question}
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent">
              {faq.answer}
            </Accordion.Content>
          </StyledAccortionItem>
        );
      })}
    </Accordion.Root>
  );
};

export default AccordionDemo;
