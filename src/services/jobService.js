import axiosInstance from "../utils/axiosInstance"

const jobService = {
    createJob: async (jobData) => {
        const response = await axiosInstance.post("/jobs", jobData)
        return response
    },

    updateJob: async (jobId, updatedData) => {
        const response = await axiosInstance.put(`/jobs/${jobId}`, updatedData)
        return response
    },

    deleteJob: async (jobId) => {
        const response = await axiosInstance.delete(`/jobs/${jobId}`)
        return response
    },

    getAllJobs: async (
        searchQuery = "",
        location = "",
        jobType = "",
        minSalary = 10000,
        maxSalary = 70000
    ) => {
        const queryParams = new URLSearchParams({
            searchQuery,
            location,
            jobType,
            minSalary: minSalary.toString(),
            maxSalary: maxSalary.toString(),
        }).toString()

        const response = await axiosInstance.get(`/jobs?${queryParams}`)
        return response
    },
}

export default jobService
