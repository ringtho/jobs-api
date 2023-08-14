const express = require('express')
const router = express.Router()

const { getAllJobs, getSingleJob, createJob, updateJob } = require('../controllers/jobs')


router.route('/')
    .get(getAllJobs)
    .post(createJob)

router.route('/:id')
    .get(getSingleJob)
    .patch(updateJob)


module.exports = router