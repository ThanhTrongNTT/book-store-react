import Banner from "@/components/Banner/Banner";
import Product from "@/components/Product/Product";

const Dashboard = () => {
  return (
    <>
      <div className="font-inter flex flex-col justify-center">
        <Banner />
        <Product />
      </div>
    </>
  );
};

export default Dashboard;
