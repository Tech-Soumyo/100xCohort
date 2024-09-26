// interface Config {
//   readonly endPoint: string;
//   readonly apiKey: string;
// }
interface Config {
  endPoint: string;
  apiKey: string;
}
const config: Readonly<Config> = {
  endPoint: "https://api.example.com",
  apiKey: "abcdef123456",
};
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a r
