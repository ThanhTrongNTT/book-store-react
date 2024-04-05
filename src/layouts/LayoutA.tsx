import Footer from "@/modules/partials/Footer/Footer";
import Header from "@/modules/partials/Header/Header";
import { Layout } from "antd";
import { ReactNode } from "react";
const { Content } = Layout;

type LayoutAProps = {
  children: ReactNode;
};

const LayoutA = (props: LayoutAProps) => {
  const { children } = props;

  return (
    <Layout>
      <div className="bg-neutral-100">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </Layout>
  );
};

export default LayoutA;
