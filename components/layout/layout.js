import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="pt-[100px] px-[20px] md:px-[40px]">
        <Header />
        <div className="py-[20px]">{children}</div>
      </div>
    </div>
  );
}
