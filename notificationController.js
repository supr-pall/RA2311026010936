const Log = require("../../logging_middleware/logger");

let notifications = [];

// Send notification
exports.sendNotification = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      await Log("backend", "error", "controller", "Message is missing");
      return res.status(400).json({ error: "Message required" });
    }

    const newNotification = {
      id: Date.now(),
      message
    };

    notifications.push(newNotification);

    await Log("backend", "info", "controller", "Notification sent");

    res.json(newNotification);

  } catch (err) {
    await Log("backend", "fatal", "controller", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get notifications
exports.getNotifications = async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Fetch notifications");

    res.json(notifications);

  } catch (err) {
    await Log("backend", "error", "controller", err.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};
