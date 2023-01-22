import { ReactNode } from "react";

import { Content } from "../../components/layout/MainLayout/Content";
import { Footer } from "../../components/layout/MainLayout/Footer";
import { Header } from "../../components/layout/MainLayout/Header";
import { Center, Flex } from "@chakra-ui/layout";

interface MainLayoutProps {
  children?: ReactNode | ReactNode[] | string;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>    
        <Header />

        <Center>
        <Content>{children}</Content>
        </Center>

        <Footer />
    </>
  );
}
