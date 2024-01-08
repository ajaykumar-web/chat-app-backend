const Messages = require("../models/messageModel");
exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });
    const projectedMessages = messages.map((msg) => ({
      fromSelf: msg.sender.toString() === from,
      message: msg.message.text,
      createdAt: new Date(msg.createdAt).toLocaleTimeString(),
    }));
    res.json(projectedMessages);
  } catch (error) {
    next(error);
  }
};

exports.addMessage = async (req, res, next) => {
  console.log(req.body);
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) {
      res.json({ msg: "Message added successfully." });
    } else {
      res.json({ msg: "Failed to add message to the database" });
    }
  } catch (error) {
    next(error);
  }
};
