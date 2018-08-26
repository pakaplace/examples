import App from "../components/App";

export default () => (process.browser ? <App /> : null);
