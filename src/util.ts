interface UriConfig {
    language: string;
}

export const urlBuilder = ({ language }: UriConfig): string =>
    `https://api.github.com/search/repositories?q=language:${ language }&sort=stars&per_page=3`;
