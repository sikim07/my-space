const Layout = ({ children, isPending = false }) => {
    return (
        <div className="layout">
            <section
                className="header"
                style={{
                    opacity: isPending ? 0.7 : 1,
                }}
            >
                section example
            </section>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
