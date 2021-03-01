import Chakra from "./_chakra"
import NProgress from 'next-nprogress-emotion';

export default function App({ Component, pageProps }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <NProgress
                color="#29d"
                options={{ trickleSpeed: 50 }}
                showAfterMs={300}
                spinner
            />
            <Component {...pageProps} />
        </Chakra>
    );
}

export { getServerSideProps } from "./_chakra"