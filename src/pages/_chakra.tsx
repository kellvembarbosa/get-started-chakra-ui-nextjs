import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import React from "react";
import theme from "../styles/global";

// 
// Para evitar flashing entre o dark e light mode
// 
export default function Chakra({ cookies, children }) {
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManager(cookies)
            : localStorageManager
    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
}

export function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        },
    }
}