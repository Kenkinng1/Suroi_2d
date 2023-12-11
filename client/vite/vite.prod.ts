import { mergeConfig, type UserConfig } from "vite";

import common from "./vite.common.js";

const config: UserConfig = {
    define: {
        API_URL: JSON.stringify("/api")
    }
};

export default mergeConfig(common, config);
