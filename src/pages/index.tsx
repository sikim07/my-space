import Layout from "../components/Layout";

const Index = (navigate): JSX.Element => {
    return (
        <Layout isPending={false}>
            <div>
                Index
                <div>
                    <a href={`/blog`}>blog</a>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
