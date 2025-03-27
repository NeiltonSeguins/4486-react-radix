import { RadioGroup } from "radix-ui";
import "./style.css";

const genero = [
  { id: 1, opcao: "Masculino" },
  { id: 2, opcao: "Feminino" },
  { id: 3, opcao: "Outro" },
];

const RadioGroupDemo = () => {
  return (
    <form>
      <h1 className="Titulo">Gênero</h1>
      <RadioGroup.Root
        className="RadioGroupRoot"
        defaultValue="Outro"
        aria-label="Gênero"
      >
        {genero.map((g) => (
          <div className="RadioGroupWrapper">
            <RadioGroup.Item
              className="RadioGroupItem"
              value={g.opcao}
              id={`${g.id}`}
            >
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor={`${g.id}`}>
              {g.opcao}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
};

export default RadioGroupDemo;
