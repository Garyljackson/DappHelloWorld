// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld {
    string public greeting;

    constructor() {
        greeting = "Initial Greeting";
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
