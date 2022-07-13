import { ReactTerminal } from "react-terminal";

export default function HeroTerminal() {
  const commands = {
    fetch: () => {
      return <div><span className="text-green-600">Success!<br></br></span><span>Cams Statement has been send to abc@gmail.com</span></div>;
    }
  };

  const welcomeMessage = (
    <span className="">
      Api key that will fetch the cams statement for the given email and pancard
      <br /><br />
      Email: abc@gmail.com<br />
      PanCard: ACXPBXXXXX
      <br /><br />
      available commands: {Object.keys(commands).join(", ")}
      <br /><br />
    </span>
  );

  return (
    <div className="max-w-lg ">
      <ReactTerminal prompt="$" welcomeMessage={welcomeMessage} 
          theme="material-dark" commands={commands} />
    </div>
  );
}
