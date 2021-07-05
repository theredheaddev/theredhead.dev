export interface JobStuff {
    jobs: JobDescription[];
    skillSet: TechSkillSet[];
    education: Education[];
}

export interface TechSkillSet {
    title: string;
    href: string;
}

export interface JobDescription {
    title: string;
    role: string;
    start: string;
    end?: string;
    roles?: string[];
    rolesWithSubRoles?: SubRoles[];
}

export interface SubRoles {
    title: string;
    roles: string[];
}

export interface Education {
    title: string;
    cert: string;
    start: string;
    end?: string;
}