export interface Blog {
    title: string;
    key: string;
    content: BlogContent[]
}

export interface BlogContent {
    type: BlogContentType,
    data: string;
}

export enum BlogContentType {
    Paragraph = 'para',
    Image = 'image'
}