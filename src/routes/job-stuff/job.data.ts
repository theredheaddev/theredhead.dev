import type { Education, JobDescription, TechSkillSet } from '../../models/Job.type';

export const technologies: TechSkillSet[] = [
    {
        title: 'Angular2+',
        href: 'https://angular.io/'
    },
    {
        title: 'React',
        href: 'https://reactjs.org/'
    },
    {
        title: 'Svelte',
        href: 'https://svelte.dev/'
    },
    {
        title: '.NET (C#)',
        href: 'https://docs.microsoft.com/en-us/dotnet/'
    },
    {
        title: 'SQL',
        href: 'https://www.microsoft.com/en-au/sql-server/sql-server-2019'
    },
    {
        title: 'Network Administration',
        href: '#'
    },
    {
        title: 'React Native',
        href: 'https://reactnative.dev/'
    },


];

export const experience: JobDescription[] = [
    {
        title: 'Mudbath Digital',
        start: 'June 2018',
        role: 'Software Developer',
        roles: [
            'Estimate work to be completed by self or others',
            'Deconstruct tasks into smaller, more manageable tasks',
            'Write code to meet project requirements',
            'Review other team members code to ensure quality',
            'Learn new technologies',
            'Help teach and upskill new and existing developers',
            'Ensure delivery of projects on time and on or under budget'
        ]
    },
    {
        title: 'Colourworks',
        start: 'November 2016',
        end: 'December 2017',
        role: 'Developer',
        roles: ['Manage clients effectively', 'Ensure project expectations were met']
    },
    {
        title: 'JMK Logistics',
        role: 'Picker/Packer, Merchandiser, Delivery Driver',
        start: 'May 2012',
        end: 'October 2016',
        roles: null,
        rolesWithSubRoles: [
            {
                title: 'Picker Packer',
                roles: [
                    'Ensure loads were completed and checked for errors at end of night',
                    'Ensuring all adequate paperwork was completed',
                    'Delegating tasks to other staff members',
                    'Working within and managing time on night'
                ]
            },
            {
                title: 'Merchandiser',
                roles: [
                    'Ensure store shelves were stocked and in a presentable manner',
                    'Communicating with managers to ensure good product placement',
                    'Meeting deadlines on time restrictions (eg shop opening hours)',
                ],
            },
            {
                title: 'Delivery Driver',
                roles: [
                    'Delivering packages in required time allocation (end of day/close of shop)',
                    'Organising truck in most efficient and effective order',
                    'Managing routes'
                ]
            }
        ]
    }
];

export const education: Education[] = [
    {
        title: 'Academy of Interactive Technology, Sydney',
        cert: 'Diploma in Software Development',
        start: 'January 2016',
        end: 'October 2016'
    },
    {
        title: 'Academy of Interactive Entertainment, Sydney',
        cert: 'CERT III in Information, Digital media and Technology',
        start: 'January 2014',
        end: 'December 2014'
    },
    {
        title: 'Wadalba Community School',
        cert: 'High School Certificate',
        start: '2015',
    },
]