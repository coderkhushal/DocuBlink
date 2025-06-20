import { SecureStorageKeyType, UserDataType } from "@/modules/secure-storage/types";
import { create } from "zustand";
interface UserDataStore extends UserDataType {
    getUserInfo: () => UserDataType;
    setUserDataState: (data: UserDataType) => void;
    getObjectKeys: () => string[];
    setKey: (key: SecureStorageKeyType) => void;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setContact: (contact: string) => void;
    setAdharNumber: (adhar_number: string) => void;
    setPanNumber: (pan_number: string) => void;
    setPassportNumber: (passport_number: string) => void;
    setVoterId: (voter_id: string) => void;
    setOccupation: (occupation: "STUDENT" | "WORKING_PROFESSIONAL") => void;
    setStudentInfo: (studentInfo: UserDataType["studentInfo"]) => void;   
    setCollegeName: (collegeName: string) => void;
    setBranch: (branch: string) => void;
    setCourse: (course: string) => void;
    setSection: (branch: string) => void;
    setYear: (year: string) => void;
    setGPA: (gpa: string) => void;
    setWorkingExperience: (workingExperience: string) => void;
    setJobTitle: (jobTitle: string) => void;
    setCompanyName: (companyName: string) => void;
    setYearsOfExperience: (yearsOfExperience: string) => void;
    setSkills: (skills: string) => void;
    setWorkingProfessionalInfo: (workingProfessionalInfo: UserDataType["WorkingProfessionaInfo"]) => void;
    setResumeLink: (resumeLink: string) => void;
    setGithubProfile: (githubProfile: string) => void;
    setLinkedinProfile: (linkedinProfile: string) => void;
    setTwitterProfile: (twitterProfile: string) => void;
    setAchievementsSummary: (achievementsSummary: string) => void;
    reset: () => void;

}

export const useUserDataStore = create<UserDataStore>((set, get) => ({
    key: "userData",
    name: "",
    email: "",
    contact: "",
    occupation: "STUDENT",
    adhar_number: "",
    pan_number: "",
    passport_number: "",
    voter_id: "",
    studentInfo: {
        college_name: "",
        course: "",
        section: "",
        year: "",
        branch:"",
        gpa: "",
        skills: "",
        working_experience: ""
    },
    WorkingProfessionaInfo: {
        company_name: "",
        job_title: "",
        years_of_experience: "",
        skills: "",
    },
    resume_link: "",
    github_profile: "",
    linkedin_profile: "",
    twitter_profile: "",
    achievements_summary: "",
    setKey: (key: SecureStorageKeyType) => set((state: UserDataStore) => ({ ...state, key })),
    setName: (name: string) => set((state: UserDataStore) => ({ ...state, name })),
    setEmail: (email: string) => set((state: UserDataStore) => ({ ...state, email })),
    setContact: (contact: string) => set((state:UserDataStore) => ({ ...state, contact })),
    setAdharNumber: (adhar_number: string) => set((state:UserDataStore) => ({ ...state, adhar_number })),
    setPanNumber: (pan_number: string) => set((state:UserDataStore) => ({ ...state, pan_number })),
    setPassportNumber: (passport_number: string) => set((state:UserDataStore) => ({ ...state, passport_number })),  
    setVoterId: (voter_id: string) => set((state:UserDataStore) => ({ ...state, voter_id })),
    setOccupation: (occupation: "STUDENT"| "WORKING_PROFESSIONAL") => set((state: UserDataStore) => ({ ...state, occupation })),
    setStudentInfo: (studentInfo: UserDataStore["studentInfo"]) => set((state:UserDataStore) => ({ ...state, studentInfo })),
    setWorkingProfessionalInfo: (workingProfessionalInfo:UserDataStore["WorkingProfessionaInfo"]) => set((state:UserDataStore) => ({ ...state, WorkingProfessionaInfo: workingProfessionalInfo })), 
    setResumeLink: (resumeLink: string) => set((state:UserDataStore) => ({ ...state, resume_link: resumeLink })),
    setGithubProfile: (githubProfile: string) => set((state:UserDataStore) => ({ ...state, github_profile: githubProfile })),
    setLinkedinProfile: (linkedinProfile: string) => set((state:UserDataStore) => ({ ...state, linkedin_profile: linkedinProfile })),
    setTwitterProfile: (twitterProfile: string) => set((state:UserDataStore) => ({ ...state, twitter_profile: twitterProfile })),
    setAchievementsSummary: (achievementsSummary: string) => set((state:UserDataStore) => ({ ...state, achievements_summary: achievementsSummary })),
    setCollegeName: (collegeName: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, college_name: collegeName } })),
    setCourse: (course: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, course } })),
    setSection: (section: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, section} })),
    setYear: (year: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, year } })),
    setGPA: (gpa: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, gpa } })),
    setBranch: (branch: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, branch } })),
    setWorkingExperience: (workingExperience: string) => set((state:UserDataStore) => ({ ...state, studentInfo: { ...state.studentInfo, working_experience: workingExperience } })),
    setJobTitle: (jobTitle: string) => set((state:UserDataStore) => ({ ...state, WorkingProfessionaInfo: { ...state.WorkingProfessionaInfo, job_title: jobTitle } })),
    setCompanyName: (companyName: string) => set((state:UserDataStore) => ({ ...state, WorkingProfessionaInfo: { ...state.WorkingProfessionaInfo, company_name: companyName } })),
    setYearsOfExperience: (yearsOfExperience: string) => set((state:UserDataStore) => ({ ...state, WorkingProfessionaInfo: { ...state.WorkingProfessionaInfo, years_of_experience: yearsOfExperience } })),
    setSkills: (skills: string) => set((state:UserDataStore) => ({
        studentInfo: { ...state.studentInfo, skills },
        WorkingProfessionaInfo: { ...state.WorkingProfessionaInfo, skills }
    })),
    setUserDataState: (data: UserDataType) => set(() => ({
        ...data
    })),
    reset: () => set(() => ({
        key: "userData",
        name: "",
        email: "",
        contact: "",
        adhar_number: "",
        pan_number: "",
        passport_number: "",
        voter_id: "",
        occupation: "STUDENT",
        studentInfo: {
            college_name: "",
            course: "",
            section: "",
            year: "",
            gpa: "",
            skills: "",
            working_experience: "",
            branch:""
        },
        WorkingProfessionaInfo: {
            company_name: "",
            job_title: "",
            years_of_experience: "",
            skills: "",
        },
        resume_link: "",
        github_profile: "",
        linkedin_profile: "",
        twitter_profile: "",
        achievements_summary: ""
    })),
    getObjectKeys: () => {
        let userObjectKeys : string[] = []
        
        for (let key of Object.keys(get())) {
            if(key.substring(0, 3)!="set" && key.substring(0, 3)!="get" && key !== "reset" && key!="key" && key!="studentInfo" && key!="WorkingProfessionaInfo" ) {
                userObjectKeys.push(key);
            }
            if(key=="studentInfo" || key=="WorkingProfessionaInfo") {
                userObjectKeys.push(...Object.keys(get()[key as keyof UserDataStore]));
            }
        }
        return userObjectKeys;

},
getUserInfo: () => {
    const userInfo: UserDataType = {
        key: get().key,
        name: get().name,
        email: get().email,
        contact: get().contact,
        adhar_number: get().adhar_number,
        pan_number: get().pan_number,
        passport_number: get().passport_number,
        voter_id: get().voter_id,
        occupation: get().occupation,
        studentInfo: {
            college_name: get().studentInfo.college_name,
            course: get().studentInfo.course,
            section: get().studentInfo.section,
            year: get().studentInfo.year,
            gpa: get().studentInfo.gpa,
            skills: get().studentInfo.skills,
            working_experience: get().studentInfo.working_experience,
            branch:get().studentInfo.branch
        },
        WorkingProfessionaInfo: {
            company_name: get().WorkingProfessionaInfo.company_name,
            job_title: get().WorkingProfessionaInfo.job_title,
            years_of_experience: get().WorkingProfessionaInfo.years_of_experience,
            skills: get().WorkingProfessionaInfo.skills
        },
        resume_link: get().resume_link,
        github_profile: get().github_profile,
        linkedin_profile: get().linkedin_profile,
        twitter_profile: get().twitter_profile,
        achievements_summary: get().achievements_summary
    };
    return userInfo;
}
}));