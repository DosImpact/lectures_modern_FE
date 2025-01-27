// 커맨드 패턴

// 목적 : 커맨드(요청)을 캡슐화 하여,
// 필요한 정보를 저장, 로깅, undo 등을 할 수 있다.

// https://ko.wikipedia.org/wiki/%EC%BB%A4%EB%A7%A8%EB%93%9C_%ED%8C%A8%ED%84%B4

// 1. Reciever
// - 커맨드를 받을 엔터티, 모든 기능들이 명시되어 있다.
class PrintingMachine {
  turnOn() {
    console.log("PrintingMachine turnOn");
  }
  turnOff() {
    console.log("PrintingMachine turnOff");
  }
  print() {
    console.log("PrintingMachine print");
  }
}

// 2.Command interface
class Command {
  execute() {}
}

// 3.Concrete Command
class TurnOnCommand extends Command {
  constructor(printingMachine) {
    super();
    this.printingMachine = printingMachine;
  }
  execute() {
    this.printingMachine.turnOn();
  }
}
class TurnOffCommand extends Command {
  constructor(printingMachine) {
    super();
    this.printingMachine = printingMachine;
  }
  execute() {
    this.printingMachine.turnOff();
  }
}
class PrintCommand extends Command {
  constructor(printingMachine) {
    super();
    this.printingMachine = printingMachine;
  }
  execute() {
    this.printingMachine.print();
  }
}

// 4. invoker
class PrinterControlPanel {
  constructor() {
    this.lastCommand = null;
  }
  pressButton(command) {
    this.lastCommand = command;
    command.execute();
  }
  pressLastCommand() {
    if (this.lastCommand) this.lastCommand.execute();
  }
}
const printingMachine = new PrintingMachine();
const printerControlPanel = new PrinterControlPanel();
const turnOnCommand = new TurnOnCommand(printingMachine);
const turnOffCommand = new TurnOffCommand(printingMachine);
const printCommand = new PrintCommand(printingMachine);

printerControlPanel.pressButton(turnOnCommand);
printerControlPanel.pressButton(turnOffCommand);
printerControlPanel.pressButton(printCommand);
printerControlPanel.pressLastCommand();
