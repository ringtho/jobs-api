
const getAllJobs = (req, res) => {
    res.status(200).json({msg: 'All Jobs!'})
}

const createJob = (req, res) => {
    res.status(200).json({msg: 'Create Jobs!'})
}

const getSingleJob = (req, res) => {
    res.status(200).json({msg: 'Single Jobs!'})
}

const updateJob = (req, res) => {
    res.status(200).json({msg: 'Update Jobs!'})
}


module.exports = { getAllJobs, createJob, getSingleJob, updateJob }