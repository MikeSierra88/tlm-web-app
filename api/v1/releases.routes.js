const express = require('express');
const router = new express.Router();

/**
 * @swagger
 * tags:
 *  - name: Releases
 *    description: Songs, albums, collections or future releases
 */

/**
 * @swagger
 * /api/v1/releases:
 *  get:
 *    description: Get all Release
 *    tags: [Releases]
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/releases', (req, res) => {
  res.status(200).send({status: 'UP'});
});

module.exports = router;
