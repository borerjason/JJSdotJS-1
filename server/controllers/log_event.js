const { postEvent } = require('../../database/models/log_event');
const { likePost, likePage} = require('../helpers/post_content');

const logEvent = (req, res) => {
  const eventInfo = req.body;
  postEvent(eventInfo)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  postContentService(eventInfo)
    .then(() => {
      res.send();
    })
    .catch(() => {
      res.send();

    });
  postAdvertService(eventInfo)
    .then(() => {
    })
    .catch(() => {
    });
};

module.exports.logEvent = logEvent;
