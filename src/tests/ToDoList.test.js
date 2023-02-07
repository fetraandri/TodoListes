import React from "react";
import { create } from "react-test-renderer";
import ToDoList from "../App";
import { act } from "react-dom/test-utils"; 
import renderer from "react-test-renderer"


describe("ToDoList component", () => {
  test("it matches the snapshot", () => {
    const component = create(<ToDoList />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('ajout d"un tache dans la nouvelle liste', () => {
    const tasks = [
      { id: 1, name: 'Task 1', done: false },
      { id: 2, name: 'Task 2', done: false },
    ];
    const component = renderer.create(<ToDoList tasks={tasks} />);

   

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("qui va verifier la tache", () => {
    const component = create(<ToDoList />);
    const instance = component.getInstance();

    instance.handleCheck({ target: { checked: true, value: "Learn Jest" } });
    expect(instance.state.checkedTasks).toContain("Learn Jest");
  });

  it('should match the snapshot', () => {
    const task = { id: 1, name: 'Test task', done: false };
    const tree = renderer
      .create(<task task={task} />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
