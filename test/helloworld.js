const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  it("should initialise the greeting", async () => {
    const HelloWorldInstance = await HelloWorld.deployed();
    const greeting = await HelloWorldInstance.greeting.call();

    assert.equal(
      greeting,
      "Initial Greeting",
      "The initial greeting was not set"
    );
  });

  it("should update the greeting", async () => {
    const HelloWorldInstance = await HelloWorld.deployed();
    await HelloWorldInstance.setGreeting("Howzit!");

    const greeting = await HelloWorldInstance.greeting.call();
    assert.equal(greeting, "Howzit!", "The greeting was not updated");
  });
});
