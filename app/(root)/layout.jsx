import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Provider from "@/components/Provider";
import Nav from "@/components/Nav";

const RootLayout = ({ children }) => (
  <div className="flex h-screen flex-col">
    <Header />
    <main className="flex-1">
      {children}
      {/* <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider> */}
    </main>
    <Footer />
  </div>
);

export default RootLayout;
