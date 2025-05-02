interface IConfig {
    nodeEnv: string;
    port: number;
}
const config: IConfig = {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.PORT) || 3000,
};
export default config;