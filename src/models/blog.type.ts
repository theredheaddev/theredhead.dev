export interface Blog {
    title: string;
    key: string;
    content: BlogContent[];
    tags: string[];
    description: string;
    created: string;
}

export interface Tag {
    name: string;
    totalCount: number;
}
export interface BlogContent {
    type: BlogContentType;
    data: string;
}

export enum BlogContentType {
    Paragraph = 'para',
    Image = 'image'
}