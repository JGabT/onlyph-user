import Navbar from "./Navbar"

type AppProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: AppProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}