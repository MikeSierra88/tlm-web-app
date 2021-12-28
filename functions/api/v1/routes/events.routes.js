const express = require('express');
const router = new express.Router();

const events = [
  {
    date: new Date("2021-12-18T17:00:00"),
    name: "Live performance",
    venue: "Twin Barns Brewing Co.",
    town: "Meredith, NH",
    venueLink: "https://www.facebook.com/twinbarnsbrewing"
  },
  {
    date: new Date('2021-12-31T18:00:00'),
    name: 'Live performance',
    venue: 'The Foundry',
    town: 'Manchester, NH',
    venueLink: 'https://www.facebook.com/foundrynh'
  },
  {
    date: new Date('2022-02-26T17:00:00'),
    name: 'Live performance',
    venue: 'Twin Barns Brewing Co.',
    town: 'Meredith, NH',
    venueLink: 'https://www.facebook.com/twinbarnsbrewing'
  }
];

/**
 * @swagger
 * tags:
 *  - name: Events
 *    description: Live events
 */

/**
 * @swagger
 * /api/v1/events:
 *  get:
 *    description: Get all Events
 *    tags: [Events]
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/events', (req, res) => {
  res.status(200).send(events);
});

module.exports = router;
