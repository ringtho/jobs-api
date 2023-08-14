
const getAllJobs = async (req, res) => {
    res.status(200).json({msg: 'All Jobs!'})
}

const createJob = async (req, res) => {
    res.status(200).json({msg: 'Create Jobs!'})
}

const getSingleJob = async (req, res) => {
    res.status(200).json({msg: 'Single Jobs!'})
}

const updateJob = async (req, res) => {
    res.status(200).json({msg: 'Update Jobs!'})
}

const deleteJob = async (req, res) => {
    res.status(200).json({msg: 'Delete Jobs!'})
}


module.exports = {
    getAllJobs, 
    createJob, 
    getSingleJob, 
    updateJob, 
    deleteJob 
}