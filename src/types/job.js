export const Job = {
    _id: String,
    title: String,
    companyName: String,
    location: String,
    jobType: String,
    salaryMin: String,
    salaryMax: String,
    applicationDeadline: [Date, String],
    description: String,
    createdAt: Date,
    updatedAt: Date,
    __v: Number
};

export const FilterValues = {
    searchQuery: String,
    location: String,
    jobType: String,
    salaryMin: Number,
    salaryMax: Number,
    isFilterOpen: Boolean
};
