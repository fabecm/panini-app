interface WPText {
    rendered: string;
}
export interface Panino {
    id: number;
    better_featured_image: {
        source_url: string
    };
    title: WPText;
    content: WPText;
    date: Date;
}