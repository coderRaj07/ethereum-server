// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStorage {
    string private message;
    address private admin;

    event MessageChanged(string newMessage);

    constructor(string memory initialMessage) {
        admin = msg.sender;
        _setMessage(initialMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        require(msg.sender == admin, "Only admin can set the message");
        _setMessage(newMessage);
    }

    function _setMessage(string memory newMessage) internal {
        message = newMessage;
        emit MessageChanged(newMessage);
    }
}