const feedbacks = [
  {
    author: "Raymond Feng",
    content: "Keep it up bro"
  }
]

const listFactsController = (req, res, next) => {
  const fact = {
    id: 0,
    content: "No one in this room has any fun facts",
    createdAt: new Date().toISOString(),
  }

  console.log(req.query);
  res.json(fact);

  next();
}

const addNewFeedbackController = (req, res, next) => {
  feedbacks.push(req.body);
  res.json(req.body);

  next();
}

const listFeedbackController = (req, res, next) => {
  res.json(feedbacks);

  next();
}

export {
  listFactsController,
  addNewFeedbackController,
  listFeedbackController
}