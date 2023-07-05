const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const { calculatePayouts } = require('./payoutService');

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

app.post('/payouts', [
  body('expenses.*.name').notEmpty().withMessage('Name is required'),
  body('expenses.*.amount').isNumeric().withMessage('Amount should be a number')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const expenses = req.body.expenses;
  const payouts = calculatePayouts(expenses);
  res.json(payouts);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'An unexpected error occurred' });
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
