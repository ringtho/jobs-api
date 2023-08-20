const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  res.status(200).json({ msg: req.body })
}

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const getSingleJob = async (req, res) => {
  res.status(200).json({ msg: 'Single Jobs!' })
}

const updateJob = async (req, res) => {
  res.status(200).json({ msg: 'Update Jobs!' })
}

const deleteJob = async (req, res) => {
  res.status(200).json({ msg: 'Delete Jobs!' })
}

module.exports = {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob
}
