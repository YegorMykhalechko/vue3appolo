import { createApp } from "vue";
import App from "./App.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import "./index.css";
import { apolloClient } from "./client/apolloClient";

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);

app.mount("#app");
