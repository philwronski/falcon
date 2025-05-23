export type NavEntry = {
    title: string;
    link: string;
    items: never;
    collapsed: never;
} | {
    title: string;
    link: never;
    items: NavEntry[];
    collapsed: boolean;
}
