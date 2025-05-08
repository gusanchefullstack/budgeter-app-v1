interface IConfig {
    accessTokenSecret: string;
    nodeEnv: string;
    port: number;
    refreshTokenSecret: string;
}
const config: IConfig = {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET ?? 'secret',
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.PORT) || 3000,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET ?? 'secret',
};
export default config;